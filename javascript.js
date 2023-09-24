let firstNumber = null, operator = null, secondNumber = null;

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
    display.textContent = '0';
    displayingUserInput = false;
    firstNumber = null;
    secondNumber = null;
    operator = null;
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

// PRO TIP: If you get confused with implementation, use functions that communicate as much english as possible.
function equalsButtonFunction() {
    if (operator !== null && displayingUserInput) {
        secondNumber = Number(display.textContent);
        operate(firstNumber, operator, secondNumber);
        console.log(`${firstNumber} ${operator} ${secondNumber} = ${display.textContent}`);
    }
}
const equalsButton = document.querySelector('.equals-button');
equalsButton.addEventListener('click', () => {
        equalsButtonFunction();
});


// Work on a function that prints to console the equation
