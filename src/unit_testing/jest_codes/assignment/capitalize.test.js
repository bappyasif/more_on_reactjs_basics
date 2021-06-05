let capitalized = require('../../test_codes/assignment/capitalizedString');
let checkString = 'a brand new day';

test('check string is capitalized', () => {
    expect(capitalized(checkString)).toBe('A Brand New Day');
});