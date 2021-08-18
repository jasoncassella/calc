let display = document.querySelector('#display');
let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let clear = document.querySelector('#clear');
let equals = document.querySelector('#equals');
let decimal = document.querySelector('#decimal');
let allClear = document.querySelector('#allClear')
let negate = document.querySelector('#negate');

let displayValue = 0;
let myOperator;
let num1;
let num2;

numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    if (display.textContent !== '0') {
      display.textContent += e.target.textContent;
    } else {
      display.textContent = e.target.textContent;
    }
    displayValue = parseFloat(display.textContent);
  });
});

operators.forEach((operator) => {
  operator.addEventListener('click', (e) => {
    num1 = displayValue;
    myOperator = e.target.textContent;
    display.textContent = '0';
    displayValue = 0;
  });
});

clear.addEventListener('click', () => {
  display.textContent = '0';
  displayValue = 0;
  num1 = 0;
  num2 = 0;
  myOperator = '';
});

allClear.addEventListener('click', () => {
  display.textContent = '0';
  displayValue = 0;
  num1 = 0;
  num2 = 0;
  myOperator = '';
})

equals.addEventListener('click', (e) => {
  if (!myOperator) return;
  num2 = displayValue;
  operate(myOperator, num1, num2);
});

negate.addEventListener('click', (e) => {
  // do something
})

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

function operate(myOperator, a, b) {
  switch (myOperator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '×':
      return multiply(a, b);
    case '÷':
      return divide(a, b);
  }
}
