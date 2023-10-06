let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let displayValue = 0;
let result = null;

const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    if (b === 0)
    return "lmao";
    return a / b;
}

const operation = function(a, func, b) {
    return func(a, b);
}

let operations = {
    "+": add,
    "-": subtract,
    "x": multiply,
    "÷": divide,
}

const numberButtons = document.querySelector(".number-buttons");
const display = document.querySelector(".display");
const updateDisplay = function() {
    display.textContent = displayValue;
}

const createNumberButton = function(n) {
    const button = document.createElement("button");
    button.setAttribute("class", "number");
    button.textContent = `${n}`;
    numberButtons.appendChild(button);
}

for (let i = 9 ; i >= 0; i--)
{
    createNumberButton(i);
}


const numberClick = function(operand) {
    if (displayValue === "0" || displayValue === 0)
    displayValue = operand;
    else if (firstOperand === null)
    displayValue += operand;
    else if(secondOperand === null)
    displayValue += operand;
}

const operatorClick = function(operator) {
    if (firstOperand === null && (displayValue !== 0 || displayValue !== "0"))
    {
        firstOperand = displayValue;
        firstOperator = operator;
        displayValue = 0;
    }
}

const resultClick = function(a, b, fx) {
    result = operations[fx](Number(a), Number(b));
    console.log(result);
    displayValue = result;
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.className === "number")
        {
            numberClick(button.textContent);
            updateDisplay();
        }
        else if (button.className === "operator")
        {
            operatorClick(button.textContent);
        }
        else if (button.className === "result")
        {
            secondOperand = displayValue;
            resultClick(firstOperand, secondOperand, firstOperator);
            updateDisplay();
        }
    })
})