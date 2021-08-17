let display = document.querySelector('#display');
let buttons = document.querySelectorAll('.number');
let operands = document.querySelectorAll('.operand');
let clear = document.querySelector('#clear');
let displayValue = 0;

buttons.forEach((number) => {
  number.addEventListener('click', (e) => {
    if (displayValue) {
      display.textContent = `${displayValue} ${e.target.textContent}`;
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
    display.textContent = `${displayValue} ${e.target.textContent}`;
    displayValue = display.textContent;
  });
});

clear.addEventListener('click', () => {
  display.textContent = '0';
  displayValue = 0;
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divclasse(a, b) {
  return a / b;
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
      return divclasse(a, b);
    default:
      console.log('error');
  }
}

console.log(operate('+', 9, 10));
