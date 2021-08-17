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
let final;

buttons.forEach((number) => {
  number.addEventListener('click', (e) => {
    if (display.textContent !== '0') {
      display.textContent += e.target.textContent; //append the number to the textContent of the display
      displayValue = parseFloat(display.textContent); // update the displayValue
      num2 = parseFloat(displayValue);
    } else {
      // if theres a 0 on the screen
      display.textContent = e.target.textContent; // textContent = number
      displayValue = parseFloat(display.textContent); //update the displayValue
    }
  });
});

operands.forEach((operand) => {
  operand.addEventListener('click', (e) => {
    if (!displayValue) return; // if theres a 0 on the screen do nothing
    num1 = displayValue; // once you hit +,-,*, or /, the number before will be num1
    operator = e.target.textContent; // operator = the operator button you hit
    display.textContent = 0;
    displayValue = 0;
  });
});

clear.addEventListener('click', () => {
  display.textContent = '0';
  displayValue = 0;
});

equals.addEventListener('click', () => {
  if (!displayValue) return
  num2 = displayValue;
  operate(operator, num1, num2);
});

decimal.addEventListener('click', (e) => {
  display.textContent += e.target.textContent; //append the decimal to the textContent of the display
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
