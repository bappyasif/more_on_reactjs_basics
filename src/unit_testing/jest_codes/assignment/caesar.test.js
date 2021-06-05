let caesarCipher = require('../../test_codes/assignment/caesarCipher');
let testString = 'a brand new day';

test('cipher string with caesar cipher encoding', () => {
    expect(caesarCipher(testString, 13)).toEqual('n omnmq mrm qnm');
});

let testString2 = 'aZ zA';

test('cipher string with caesar cipher encoding', () => {
    expect(caesarCipher(testString2, 13)).toEqual('nM mN');
});