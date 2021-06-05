let reversify = require('../../test_codes/assignment/reverseString');
let testString = 'a_brand_new_day';
let matchWith = 'yad_wen_dnarb_a';

test('check string is reversed', () => {
    expect(reversify(testString)).toBe(matchWith);
});



// let testString = 'a brand new day';

// test('check string is reversed', () => {
//     expect(reversify(testString)).toBe('day new brand a');
// });