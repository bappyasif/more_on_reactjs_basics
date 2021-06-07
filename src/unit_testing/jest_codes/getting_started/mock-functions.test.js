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
test.only('check mock', ()=> {
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