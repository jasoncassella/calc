let display = document.querySelector('#display');
let buttons = document.querySelectorAll('.number');
let operands = document.querySelectorAll('.operand');
let clear = document.querySelector('#clear');
let equals = document.querySelector('#equals');
let decimal = document.querySelector('#decimal');

let displayValue = 0;
let operator;
let num1;
let num2;

buttons.forEach((number) => {
  number.addEventListener('click', (e) => {
    if (display.textContent !== '0') {
      display.textContent += e.target.textContent;
    } else {
      display.textContent = e.target.textContent;
    }
    displayValue = parseFloat(display.textContent);
  });
});

operands.forEach((operand) => {
  operand.addEventListener('click', (e) => {
    num1 = displayValue;
    operator = e.target.textContent;
    display.textContent = 0;
    displayValue = 0;
  });
});

clear.addEventListener('click', () => {
  display.textContent = '0';
  displayValue = 0;
  num1 = 0;
  num2 = 0;
  operator = '';
});

equals.addEventListener('click', () => {
  if (!operator) return;
  num2 = displayValue;
  operate(operator, num1, num2);
});

decimal.addEventListener('click', (e) => {
  if (display.textContent.includes('.')) return;
  display.textContent += e.target.textContent;
});

function add(a, b) {
  let result = a + b;
  display.textContent = overflowCheck(result);
}

function subtract(a, b) {
  let result = a - b;
  display.textContent = overflowCheck(result);
}

function multiply(a, b) {
  let result = a * b;
  display.textContent = overflowCheck(result);
}

function divide(a, b) {
  if (b !== 0) {
    let result = a / b;
    display.textContent = overflowCheck(result);
  } else display.textContent = 'you mothafucka';
}

function overflowCheck(number) {
  if (number.toString().length > 6) return number.toFixed(6);
  else return number;
}

function operate(operator, a, b) {
  console.log(operator, a, b);
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
