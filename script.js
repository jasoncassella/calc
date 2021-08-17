let display = document.querySelector('#display');
let buttons = document.querySelectorAll('.number');
let operands = document.querySelectorAll('.operand');
let clear = document.querySelector('#clear');
let equals = document.querySelector('#equals');

let displayValue = 0;
let operator;
let num1;
let num2;
let num2total = 0;
let final;

buttons.forEach((number) => {
  number.addEventListener('click', (e) => {
    if (displayValue != 0) {
      // keep adding to the number
      display.textContent = displayValue + e.target.textContent; //append the number to the textContent of the display
      displayValue = display.textContent; // update the displayValue
      num2 = parseInt(displayValue);
    } else {
      // if theres a 0 on the screen
      display.textContent = e.target.textContent; // textContent = number
      displayValue = display.textContent; //update the displayValue
    }
  });
});

operands.forEach((operand) => {
  operand.addEventListener('click', (e) => {
    if (!displayValue) return; // if theres a 0 on the screen do nothing
    num1 = parseInt(displayValue); // once you hit +,-,*, or /, the number before will be num1
    operator = e.target.textContent; // operator = the operator button you hit
    display.textContent = 0;
    displayValue = display.textContent;
  });
});

clear.addEventListener('click', () => {
  display.textContent = '0';
  displayValue = 0;
});

equals.addEventListener('click', () => {
  num2 = parseInt(displayValue);
  operate(operator, num1, num2);
});

function add(a, b) {
  display.textContent = a + b;
}

function subtract(a, b) {
  display.textContent = a - b;
}

function multiply(a, b) {
  display.textContent = a * b;
}

function divide(a, b) {
  if (b !== 0) {
    display.textContent = a / b;
  } else display.textContent = 'you mothafucka';
}

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      console.log('error');
  }
}
