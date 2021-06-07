/**
 * beforeEach and afterEach - that must be called before and after each of these test
 * beforeAll and afterALL - these would run only once at begining and at end of a file
 * scoping - to group test together, when inside a describe block, before and after blocks only apply to tests within that block
 * order of execution od describe and test blocks - jest executes all describes handlers in a test file before it executes any of these actual test
 * this another reasno to do setup and teardown inside before* and after* handlers rather than inside describe blocks,
 * once describe blocks are completed by default jest runs tests serially in order they were encountered, waiting for each to finish and tidied up before moving on
 */
beforeAll(()=>console.log('1 - beforeAll'));
afterAll(()=>console.log('1 - afterAll'));
beforeEach(()=>console.log('1 - beforeEach'));
afterEach(()=>console.log('1 - afterEach'));
test('',()=>console.log('1 - test'));
describe('scoped / nested block', () => {
    beforeAll(()=>console.log('2 - beforeAll'));
    afterAll(()=>console.log('2 - afterAll'));
    beforeEach(()=>console.log('2 - beforeEach'));
    afterEach(()=>console.log('2 - afterEach'));
    test('',()=>console.log('2 - test'));
});

// execution order
describe('outer', () => {
    console.log('describe outer-a');
    describe('inner-1', () => {
        console.log('describe inner-1');
        test('test 1 for inner-1', () => {
            console.log('describe test for inner-1');
            expect(true).toEqual(true);
        });
    });
    console.log('describe outer-b');
    test('test 1', () => {
        console.log('describe test for outer');
        expect(true).toEqual(true);
    });
    describe('inner-2', () => {
        console.log('describe inner-2');
        test('test 2 for inner-2', () => {
            console.log('describe test for inner-2');
            expect(false).toEqual(false);
        });
    });
    console.log('describe outer-c');
});
/**
 * describe outer-a
 * describe inner-1
 * describe outer-b
 * describe inner-2
 * describe outer-c
 * describe test for inner-1
 * describe test for outer
 * describe test for inner-2
 */

// if a test is failing to check for if that only test that is failing in a file, we can do so by using .only after test definition
test.only('only test that runs', ()=>expect(true).toBe(false))
test.only('only test that runs', ()=>expect(true).toBe(true))
// if we have a test that often fails when runs as a part of a larger test suite, but doesnt fail when runs solo
// its a good indication that something froma different test is interfeting with this, we can fix this by cleairng some shared state with beforeEach, alon with logging into console to be sure if that state is being modified or not before even doing so