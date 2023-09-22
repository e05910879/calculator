// Step 1: Completed
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

// Step 2: Completed
let firstNumber, operator, secondNumber;

// Step 3: Completed
function operate(firstNumber, operator, secondNumber) {
}

const display = document.querySelector('#display');

function addNumberToDisplay(number) {
    if (display.textContent === '0') {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
}
const numberButtons = document.querySelectorAll('.number-button');
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', () => {
        addNumberToDisplay(numberButton.textContent);
    })
})

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', () => {
    display.textContent = '0';
});

const operatorButtons = document.querySelectorAll('.operator-button');
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        operator = operatorButton.id;
    });
})