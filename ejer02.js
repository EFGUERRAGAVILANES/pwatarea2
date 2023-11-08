let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

function appendOperator(op) {
    if (currentInput !== '') {
        operator = op;
        firstOperand = currentInput;
        currentInput = '';
    }
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    secondOperand = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    if (currentInput !== '') {
        secondOperand = currentInput;
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(firstOperand) + parseFloat(secondOperand);
                break;
            case '-':
                result = parseFloat(firstOperand) - parseFloat(secondOperand);
                break;
            case '*':
                result = parseFloat(firstOperand) * parseFloat(secondOperand);
                break;
            case '/':
                result = parseFloat(firstOperand) / parseFloat(secondOperand);
                break;
        }
        document.getElementById('display').value = result;
        currentInput = result;
        operator = '';
        firstOperand = '';
        secondOperand = '';
    }
}
