let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstNumber = '';
let secondNumber = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(op) {
    if (firstNumber === '') {
        firstNumber = currentInput;
        operator = op;
        currentInput = '';
    }
}

function calculateResult() {
    secondNumber = currentInput;
    if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(firstNumber) + parseFloat(secondNumber);
                break;
            case '-':
                result = parseFloat(firstNumber) - parseFloat(secondNumber);
                break;
            case '*':
                result = parseFloat(firstNumber) * parseFloat(secondNumber);
                break;
            case '/':
                if (secondNumber === '0') {
                    result = 'Error: Division by zero';
                } else {
                    result = parseFloat(firstNumber) / parseFloat(secondNumber);
                }
                break;
            default:
                result = 'Error';
                break;
        }
        display.value = result;
        currentInput = result.toString();
        firstNumber = '';
        operator = '';
        secondNumber = '';
    }
}

function clearDisplay() {
    currentInput = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';
    display.value = '';
}
