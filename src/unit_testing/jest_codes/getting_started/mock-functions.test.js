// mock functions allow us to test links between code by erasing actual  implementation of a function
// capturing calls to function(parameters passed in calls), capturing instances of constructor functios when instantiated  with 'new' and allowing test -time configuration of return values

// there are two ways to mock functions, either by creating a mock function to use in test code, or writing  a 'manual mock' to over ride a module dependency
// using a mock function: implementation of a function forEach, which invokes a callback for each item in a supplied array
function forEach(items, callback) {
    for(let idx = 0; idx < items.length; idx++) {
        callback(items[idx]);
    }
}
// to test this function, we can use a mock function, and inspect mock;s state to ensure callback is invoked as expected
let mockCallback = jest.fn(x => 42 + x);
forEach([0,1], mockCallback);
// .calls is an array which takes in arguments passed in by mock functions
test('check mock', ()=> {
    // mock function called once
    // expect(mockCallback.calls.length).toBe(1); // not how i expected
    /**
     * .calls property of .mock:
     * an array containing call arguments of all calls that have been made to this mock function
     * each item in array is an array of arguments that were passed during call
     * e.g. a moick function call with two arguments and another call with two more arguments would look like this
     * [
     *    [arg1,arg2],
     *    [arg3, aeg4]
     * ]
     */

    // mock function called twice
    expect(mockCallback.mock.calls.length).toBe(2);
    // first argument of first call to function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    // second argument of first call to mock function was 'second value'
    expect(mockCallback.mock.calls[1][0]).toBe(1);
    // return value of first call to function was 'return value'
    expect(mockCallback.mock.results[0].value).toBe(42);
    expect(mockCallback.mock.results[1].value).toBe(43);
    /**
     * .results, array containing of all calls that have been made to this mock function
     * each entry in this array is an object containing a type, value property
     * where type property will be one of these following
     * <> 'return' - indicates that call completed by returning normally
     * <> 'throw' - indicates that call completed by throwing a value
     * <> 'incomplete' - indicates that call has not yet completed, 
     * this occurs if we test result from within mock function itself or from within function that was called by mock
     * 
     * value property contains, return value that was thrown or returned, it's undefined  when type === 'incompletye'
     */
});

// .mock preperty
// all mock functions have this special .mock property, which is where data about how function has been called what function retuned is kept
// .mock property also tracks value of 'this' for each call, so it is possible to inspect .mock using 'this' as well
let smMock = jest.fn();
let a = new smMock();
let b = {};
let bound = smMock.bind(b);
bound();
console.log(smMock.mock.instances, smMock.mock, smMock.mock.results[0], smMock.mock.invocationCallOrder, smMock.mock.instances[0].name, smMock.mock.invocationCallOrder[1]);
// these mock members are very useful in tests to assert how these functions get called, instantiated or what they returned
test('mock properties', () => {
    // function was called twice
    expect(smMock.mock.calls.length).toBe(2);
    // first argument of first mock call
    // expect(smMock.mock.calls[0][0]).toBe('first arg')
    expect(smMock.mock.calls[0][0]).toBe(undefined);
    // second argument of first mock call
    // expect(smMock.mock.calls[0][1]).toBe('second arg')
    expect(smMock.mock.calls[0][1]).toBe(undefined);
    // return value of first mock call
    // expect(smMock.mock.results[0].value).toBe('return value');
    expect(smMock.mock.results[0].value).toBe(undefined);
    // mock function was instantiated exactly twice
    expect(smMock.mock.instances.length).toBe(2);
    // object returned by first instantiation of mock function had a name proprty, lets check that value
    // expect(smMock.mock.instances[0].name).toEqual('smMock')
    expect(smMock.mock.instances[0].name).toEqual(undefined)
});

// mock calls return values
// mock functions can also be used to inject test values into our code during a test:
let aMock = jest.fn();
console.log(aMock()); // undefined
aMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
console.log(aMock(), aMock(), aMock(), aMock()); // 10, x, true true
aMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue('true').mockReturnValue(false);
console.log(aMock(), aMock(), aMock(), aMock()); // 10, x, false false
// mock functions are also very effective in code that uses a functional continuation passing style
// this helps avoid need for complicated stubs that recreate behavior of real component they're standing in for, in favor of injecting values into test right before they're used
let filterTestFn = jest.fn();
// make mock return 'true' for first call, and 'false' for second call
filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);
let result = [11,12].filter(num => filterTestFn(num));
console.log(result, filterTestFn.mock.results[1].value, filterTestFn.mock.results[0].value); // 11, false, true
console.log(filterTestFn.mock.calls[0][0],filterTestFn.mock.calls[1][0]); // 11, 12
// most real world examples actually involve getting ahold of a mock function on a dependent component and configuring into that but technique is very same

// mocking modules
let Users = require('../../test_codes/getting_started/mockingModules');
// import Users from'../../test_codes/getting_started/mockingModules';

let axios = require('axios');
// console.log(Users.all, "[--]")
// in order to test this users method without actuyally hitting up API, we can use jest.mock() functiona to automatically mock axios module
// once we mock module we can provide a mockResolvedValue for .get that returns data we want our test to assert against, in effect, we are going to say we wnat axios.get('users-url') to return a fake response
// jest.mock(axios);
jest.mock('axios');
// jest.mock(users);
// jest.mock('Users');
test('mock should fetch users', () => {
    let usersName = [{name: 'bob'}];
    let resp = {data: usersName};
    // axios.get.mockResolvedValue(resp);
    // or using promise syntax
    axios.get.mockResolvedValue(()=>Promise.resolve(resp));
    // axios.mockResolvedValue(()=>Promise.resolve(resp));
    // axios.mockResolvedValue(()=>Promise.resolve(resp));
    // return users().then(data => expect(data).toBe(usersName));
    // return users().then(data => console.log(data));
    // Users.all().then(data => console.log(data));
    // return Users.all().then(data => expect(data).toEqual(usersName));
});

// mock implementations
// still there are cases where it's useful to go beyond ability to specify return values and full-on replace implementation of a mock function
// this can be done with jest.gn or mockImplementationOnce method on mock functions
let mockFn = jest.fn(cb => cb(null, true));
mockFn((err, val) => console.log(val, err));
// mockImplementation method is useful when we need to define default implementation of a mock function that is created from another module
let anotherMock = jest.fn().mockImplementationOnce(cb => cb(null, true)).mockImplementationOnce(cb => cb(null, false));
console.log(anotherMock((err,val)=>console.log(err, val,"??")));
console.log(anotherMock((err,val)=>console.log(err, val,"??")));
// when mocked function runs out of implementations defined with mockImplementationOnce, it will execute default implementation set with jest.fn, when it's defined
let aMockDefaultExample = jest.fn(() => 'default value').mockImplementationOnce(() => 'first call').mockImplementationOnce(() => 'second call');
console.log(aMockDefaultExample(),aMockDefaultExample(),aMockDefaultExample(),aMockDefaultExample(), "<>"); // first-call, second-call, default value, default value
// for cases where we have methods that are typically chained and thus always need to return 'this' we've a method to return this in a simplify form of .mockReturnThis taht also sits on all mocks
let smObj = {
    smMethod: jest.fn().mockReturnThis()
}
// equivalent to above definition
let otherObj = {
    smMethod: jest.fn(() => {return this})
}
console.log(smObj.hasOwnProperty('smMethod') == otherObj.hasOwnProperty('smMethod'));

// mock names
// let mockNames = jest.fn().mockReturnValue('default').mockImplementation(scalar=>42+scalar).mockName('add42');
let mockNames = jest.fn().mockReturnValue('default').mockImplementation(scalar=>typeof(scalar)==='number' ? 42+scalar : new Error('wrong!!')).mockName('add42');
console.log(mockNames(10), mockNames('??'), mockNames(null), mockNames(false));

// custom matchers
// to make it less demanding to assert how mock functions have been called, jest has come cutom matcher functions for us to use

// mock function was called atleast once
expect(smMock).toHaveBeenCalled();

let testMock = jest.fn((a,b)=>console.log(a,b));
testMock("a", "b");

// mock function was called atleast once with specified args
expect(testMock).toHaveBeenCalledWith('a', 'b');

// last call to mock function was called with specific arguments
expect(testMock).toHaveBeenLastCalledWith('a', 'b');
// these matchers are common forms of inspecting .mock property, we can always do this manually for ourselves if we want to meet our specific requirements

// mock function was called atleast once
expect(testMock.mock.calls.length).toBeGreaterThan(0);

// mock function was called at least once with specified arguments
expect(testMock.mock.calls).toContainEqual(['a', 'b']);

// last call to mock function was called with specified arguments
expect(testMock.mock.calls[testMock.mock.calls.length -1]).toEqual(['a', 'b']);

// first argument of last call to mock function was 'a'
expect(testMock.mock.calls[testMock.mock.calls.length -1][0]).toBe('a');

// a snapshot will check that a mock was involved same number of times, in same order, with same arguments, it will also assert name
expect(testMock.mock.calls).toEqual([['a', 'b']]);
expect(testMock.getMockName()).toBe('jest.fn()');