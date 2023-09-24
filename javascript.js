let firstNumber = null,
    secondNumber = null,
    operator = null,
    operatorCurrentlySelected = false,
    newNumberEntered = false;

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
    if (operatorCurrentlySelected) {
        display.textContent = number;
        operatorCurrentlySelected = false;
    }
    else if (display.textContent === '0') {
        if (number !== '0') {
            display.textContent = number;
        }
    } else {
        display.textContent += number;
    }
    newNumberEntered = true;
}
const numberButtons = document.querySelectorAll('.number-button');
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', () => {
            numberButtonFunction(numberButton.textContent);
    })
});

function clearButtonFunction() {
    display.textContent = '0';
}
const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', () => {
    clearButtonFunction();
});

function operatorButtonFunction(o) {
    operatorCurrentlySelected = true;
    if (operator === null) {
        firstNumber = display.textContent;
    } else if (newNumberEntered) {
            secondNumber = display.textContent;
            operate(firstNumber, operator, secondNumber);
            firstNumber = display.textContent;
    }   
    operator = o;
    newNumberEntered = false;
    console.log(`firstNumber: ${firstNumber}`);
    console.log(`operator: ${operator}`);
    console.log(`secondNumber: ${secondNumber}`);
}
const operatorButtons = document.querySelectorAll('.operator-button');
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        operatorButtonFunction(operatorButton.id);
    });
});

function equalsButtonFunction() {
    operatorCurrentlySelected = true;
    if (operator !== null) {
        secondNumber = display.textContent;
        operate(firstNumber, operator, secondNumber);
        firstNumber
    }
}
const equalsButton = document.querySelector('.equals-button');
equalsButton.addEventListener('click', () => {
        equalsButtonFunction();
});