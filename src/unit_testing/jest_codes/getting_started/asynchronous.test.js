// when we've to code that runs asynchronously, jest needs to know when code it is testing has completed, before it cxan move on to another test
// jest can hanlde them in several ways, let see them in action

// Callbacks
// most common asynchronous pattern is callbacks
// lets assume a fetchData(callback) that calls  callback(data) when it is completed

// acoid this following pattern
/**
 test('data is peanut butter', () => {
    function callback(data) {
        expect(data).toBe('peanut butter');
    }
    // fetchData(callback)
});
 */
// above code has a flaw in it, test will complete as soon as fetchData completes, before  calling callback fuinction as intended
// there is an alrenative form of test that fixes this, instead of putting test in function with an empty argument, using a single argument called 'done, jest will wait until done callback is called before finishing test
/**
 test('data has peanut butter', done => {
    // let callback = data => {
        function callback(data) {
        try{
            expect(data).toBe('peanut butter');
            done();
        } catch(err) {
            done(err);
        }
    }
    fetchData(callback)
});
 */
// if done() is never called, test will fail with an timeout error, which is what is expected to happen
// if expect statement fails, it throws an error and done() is not called
// if we want to see test log why it failed, we have to wrap exact in in atry catch block to done, otherwise it will end up in opaque timeout error, without showing what was recieved by expect(data)

// Promises
// if out code uses Promises then we've better wau to handle asynchronous tests, returns a promise from our test and jest will wait untill that promise finishes
// if promise is rejected, test will automatically fail
// lets assume fetchData, instead of calling a callback returns a Promise that is supposed to resolve with string 'peanut butter then we could test withn
let fetchData = () => Promise.resolve('peanut butter');
test('data is peanut butter', () => {
    return fetchData().then(data=>{
        expect(data).toBe('peanut butter');
    });
});
// be sure to return promise from fetchData or any async code, without return code will finishe runnig before promise is returned from fetchData
// if we expect promise to be rejected, we can use .catch method
// also be sure to include expect.assertions to verify that a certain number of assertions are called, otherwisem, a fullfiled promise would not fail test
let fetchData2 = () => Promise.reject('error');
test('fetch fails with error', () => {
    expect.assertions(1);
    // return fetchData().then(data=>expect(data).toBe('peanut butter')).catch(err=>expect(err).toMatch('error'))
    return fetchData2().catch(err=>expect(err).toMatch('error'))
});

// resolves / rejects
//  we can also use 'resolves' matcher in our expect statement, and jest will wait for that promise to resolve, if promise is rejected test will automatically fail as well
test('data is penut butter', () => {
    return expect(fetchData()).resolves.toBe('peanut butter');
    // return expect(fetchData()).resolves.toBe('peanut');
});
// be sure to add return from assertion, the our test will complete before promise is resolved and then callback would have a chance to execute callback
// id an promise expected to be rejected we can use 'rejects' matcher, it works analogically to 'resolves matcher, when fullfiled, test will automatically fail
test('fetch fails with error', () => {
    return expect(fetchData2()).rejects.toMatch('error');
});

// Async / Await
// alternatively we can use async and await in our tests, to write an async test, we have to use async keyword infornt of function passed to test
// let fetchData3 = () => Promise.resolve('peanut butter');
// test('data is peanut butter', async () => {
//     let data = await fetchData3();
//     // let data = await fetchData();
//     expect(data).toBe('peanut butter');
// });

// let fetchData4 = () => Promise.reject('error');
// test('data is peanut butter', async () => {
//     expect.assertions(1);
//     try {
//         await fetchData4();
//     } catch(err) {
//         expect(err).toMatch('error');
//     }
// });

// we can also combine async amd awiat woth resolves and rejects matcher
// test('data is peanut butter', async () => {
//     await expect(fetchData()).resolves.toBe('peanut butter');
// });

// test('fetching failed with error', async () => {
//     await expect(fetchData2()).rejects.toMatch('error');
// });

// above async/await codes requires @babel/plugin-transform-runtime --dev and #babel/rujntime to be installed
// and then .babelIrc config file use this following
/**
 'plugins': [
     ['@babel/plugin-transform-runtime',
     {
         'regenerator': true
     }
    ]
 ]
 */
// aync/await is just syntactic sugar for same logic as promises, none of them are superior to another approach, it all depends personal preference in styles for asynchronous coding