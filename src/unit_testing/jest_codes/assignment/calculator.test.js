let calculator = require('../../test_codes/assignment/calculatorSimple');
let plusTest = '1+1';
let minusTest = '1-1';
let multiplyTest = '1*1';
let divisionTest = '1/0';

test('checking addition calculator operations', () => {
    let [a,op,b] = plusTest.split('');
    expect(calculator(a,b,op)).toEqual(2);    
});

test('checking subtraction calculator operations', () => {
    let [a,op,b] = minusTest.split('');
    expect(calculator(a,b,op)).toEqual(0);
});

test('checking multiplication calculator operations', () => {
    let [a,op,b] = multiplyTest.split('');
    expect(calculator(a,b,op)).toEqual(1);
});

test('checking division calculator operations', () => {
    let [a,op,b] = divisionTest.split('');
    Number(b) === 0 ? expect(calculator(a,b,op)).toEqual(0) : expect(calculator(a,b,op)).toEqual(1);
});