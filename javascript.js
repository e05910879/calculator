let firstNumber, operator, secondNumber;

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

let displayingUserInput = false;
function numberButtonFunction(numberButton) {
    if (displayingUserInput) {
        display.textContent += numberButton.textContent;
    } else {    // if display is displaying '0'
        if (number !== '0') {
            display.textContent = numberButton.textContent;
            displayingUserInput = true;
        }
    }
}
const numberButtons = document.querySelectorAll('.number-button');
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', () => {
            numberButtonFunction(numberButton);
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

function operatorButtonFunction(operatorButton) {
    //should include displayingUserInput = false


}
const operatorButtons = document.querySelectorAll('.operator-button');
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        operatorButtonFunction(operatorButton);
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


/*
Equals sign and operator sign should be treated as mutually exclusive functions.

Equals sign:
Equals sign only works if in an 'operator pressed' state. Otherwise, it does nothing.
If an operator is pressed, the operator function will have already saved the preceding value into firstNumber.
Then pressing equals will save the display value into second number, and call operate() to perform the corresponding
operation.
The resulting sum should then be stored in firstNumber.

Operator sign:
The calculator starts off with its 'operator-pressed' state turned off.

If the operator button is FIRST pressed, i.e. the operator-pressed state is initially off, 
the value in the screen must be passed to firstNumber, and the calculator should enter an 'operator pressed' state.
If already in the 'operator pressed' state no modification of the display value is made, i.e. the 'newValueEntered' state is off, 
aside from the equals button pressing different operators will merely switch the operator.
Else if in the 'operator pressed' state the display value were to be modified, pressing the operator button 
again would act as an equals sign, as well as calling on the operator button again.
Exception: a + b * c.

// if first time pressing operator button, pass display value to firstNum and turn on operatorIsSelected state
if (operatorIsSelected === false) {
    operatorIsSelected = true;
    firstNumber = display.textContent;
    newValueEntered = false;
}
else {
    if (newValueEntered === true) {
        equalsFunction();
        firstNumber = display.textContent;

    }
}


NOTE: the only buttons that can reset operatorIsSelected state are the equals button or clear button.


*/