let firstNumber = null,
    secondNumber = null,
    operator = null;

function operate(firstNumber, operator, secondNumber) {
    switch(operator) {
        case 'add':
            display.textContent = Number(firstNumber) + Number(secondNumber);
            break;
        case 'subtract':
            display.textContent = Number(firstNumber) - Number(secondNumber);
            break;
        case 'multiply':
            display.textContent = Number(firstNumber) * Number(secondNumber);
            break;
        case 'divide':
            display.textContent = Number(firstNumber) / Number(secondNumber);
            break;
    }
}

const display = document.querySelector('#display');

function numberButtonFunction(number) {
}
const numberButtons = document.querySelectorAll('.number-button');
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', () => {
            numberButtonFunction(numberButton.textContent);
    })
});

function clearButtonFunction() {
}
const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', () => {
    clearButtonFunction();
});

function operatorButtonFunction() {
}
const operatorButtons = document.querySelectorAll('.operator-button');
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        operatorButtonFunction(operatorButton.id);
    });
});

function equalsButtonFunction() {
}
const equalsButton = document.querySelector('.equals-button');
equalsButton.addEventListener('click', () => {
        equalsButtonFunction();
});