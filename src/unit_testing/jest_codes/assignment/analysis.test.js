let arrayAnalysis = require('../../test_codes/assignment/arrayAnalysis');
let testArray = [1,8,3,4,2,6];
let matchWith = {average: 4, min: 1, max: 8, length: 6}
test('array analysis which returns an object', () => {
    expect(arrayAnalysis(testArray)).toEqual(matchWith)
});