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
    newNumberEntered = true;

    if (operatorCurrentlySelected) {
        if (firstNumber === display.textContent) {
            display.textContent = number;
        } else {
            display.textContent += number;
        }
    } else {
        if (display.textContent === '0') {
            if (number !== '0') {
                display.textContent = number;
            }
        } else {
            display.textContent += number;
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
    firstNumber = null,
    secondNumber = null,
    operator = null,
    operatorCurrentlySelected = false,
    newNumberEntered = false;
}
const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', () => {
    clearButtonFunction();
});

function displayEquation() {
    let op;
    switch(operator) {
        case 'add':
            op = '+';
            break;
        case 'subtract':
            op = '-';
            break;
        case 'multiply':
            op = 'x';
            break;
        case 'divide':
            op = '/';
            break;
    }
    console.log(`${firstNumber} ${op} ${secondNumber} = ${display.textContent}`);
}
function operatorButtonFunction(o) {
    operatorCurrentlySelected = true;

    if (operator === null) {                    // if this is the first time selecting an operator ...
        firstNumber = display.textContent;      // ... move what the user entered in the display into firstNumber.
    } else {                     // else if an operator was selected before ...
        if (newNumberEntered) {  // ... and there was a change in the display value right before user selected current operator...
                secondNumber = display.textContent;             // ... perform operation using previous operator ... 
                operate(firstNumber, operator, secondNumber);   // ... and store result into firstNumber.
                displayEquation();
                firstNumber = display.textContent;
        } 
    }   
    operator = o;                // the above code will skip if user is just pressing operators arbitrarily.
    newNumberEntered = false;    // after selecting an operator, any numeric input from the user will reset the display.
}
const operatorButtons = document.querySelectorAll('.operator-button');
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        operatorButtonFunction(operatorButton.id);
    });
});

function equalsButtonFunction() {
    newNumberEntered = false;
    if (operator !== null) {
        if (operatorCurrentlySelected) {
            secondNumber = display.textContent;
        }
        operate(firstNumber, operator, secondNumber);
        displayEquation();
        firstNumber = display.textContent;
    }
    operatorCurrentlySelected = false;

}
const equalsButton = document.querySelector('.equals-button');
equalsButton.addEventListener('click', () => {
        equalsButtonFunction();
});