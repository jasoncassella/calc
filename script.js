let display = document.querySelector('#display');
let buttons = document.querySelectorAll('.number');
let operands = document.querySelectorAll('.operand');
let clear = document.querySelector('#clear');
let equals = document.querySelector('#equals');

let displayValue = 0;
let operator;
let num1;
let num2;
let final;

buttons.forEach((number) => {
  number.addEventListener('click', (e) => {
    if (displayValue) {
      display.textContent = displayValue + e.target.textContent;
      displayValue = display.textContent;
    } else {
      display.textContent = e.target.textContent;
      displayValue = display.textContent;
    }
  });
});

operands.forEach((operand) => {
  operand.addEventListener('click', (e) => {
    if (!displayValue) return;
    num1 = parseInt(displayValue);
    operator = e.target.textContent;
    display.textContent = `${displayValue} ${e.target.textContent} `;
    displayValue = display.textContent;
  });
});

clear.addEventListener('click', () => {
  display.textContent = '0';
  displayValue = 0;
});

equals.addEventListener('click', () => {
  console.log(displayValue);
  console.log(num2);
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
