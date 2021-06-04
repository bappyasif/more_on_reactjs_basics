let sum = require('../../test_codes/getting_started/sum');

test('add 1 and 2 to equal 3', ()=>expect(sum(1,2)).toBe(3));

// expect returns an expectation object, and these call matchers on th them but toBe() syntax, which is matcxher
// when jest runs, it tracks all failing matchers and prints well informed error messages
it('2 and 2 to be 4', ()=>expect(2+2).toBe(4));

// toBe() uses Object.is to test equality, if we want to check value of an object, we'll have to use toEquyal() instead
test('object assignment', () => {
    let data = {een: 1};
    expect(data).toEqual({een:1});
    // expect(data).toBe(1)
    // expect(data).toEqual(1)
    // expect(data).toBe({een:1})
    data['twee'] = 2;
    expect(data).toEqual({een:1, twee:2});
    expect(data['een']).toBe(1);
    expect(data.een).toEqual(1)
    // toEqual() recursively checks every field of an object or array
});

// we can also  test for opposite of a matcher
test('adding positives numbers is not zero', () => {
    for(let a=1; a<10; a++) {
        for(let b=1; b<10; b++) {
            expect(a+b).not.toBe(0)
        }
    }
});