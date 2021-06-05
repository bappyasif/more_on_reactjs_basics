let calculator = (operand1, operand2, operator) => {
    operand1 = Number(operand1);
    operand2 = Number(operand2);

    switch(operator) {
        case '*':
            return operand1 * operand2;
        case '/':
            if(operand2 === 0) return 0;
            return operand1 / operand2;
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        default: 
            throw new Error('unknown operator');
    }
}

module.exports = calculator;