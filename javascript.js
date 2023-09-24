let firstNumber, operator, secondNumber;
let displayingUserInput = false;

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
    if (displayingUserInput) {
        display.textContent += number;
    } else {    // if display is displaying '0' OR right after operator is pressed
        if (number !== '0') {
            display.textContent = number;
            displayingUserInput = true;
        }
    }
}
const numberButtons = document.querySelectorAll('.number-button');
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', () => {
            numberButtonFunction(numberButton.textContent);
    })
});

function clearButtonFunction() {
    display.textContent = '0';
    displayingUserInput = false;
    firstNumber = null;
    secondNumber = null;
}
const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', () => {
    clearButtonFunction();
});

function operatorButtonFunction(operator) {

}
const operatorButtons = document.querySelectorAll('.operator-button');
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        operatorButtonFunction(operatorButton.id);
    });
});

// PRO TIP: If you get confused with implementation, use functions that communicate as much english as possible.
function equalsFunction() {
    if (operatorIsSelected && displayingUserInput) {
        secondNumber = Number(display.textContent);
        operate(firstNumber, operator, secondNumber);
    }
}
const equalsButton = document.querySelector('.equals-button');
equalsButton.addEventListener('click', () => {
        secondNumber = Number(display.textContent);
        operate(firstNumber, operator, secondNumber);
});