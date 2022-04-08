const calculator = {
	displayText: '0',
	displayValue: 0,
	num1: undefined,
	num2: undefined,
	display: document.querySelector('#display'),
	numbers: document.querySelectorAll('.number'),
	operators: document.querySelectorAll('.operator'),
	clear: document.querySelector('#clear'),
	equals: document.querySelector('#equals'),
	decimal: document.querySelector('#decimal'),
	allClear: document.querySelector('#allClear'),
	negate: document.querySelector('#negate'),

	operate(myOperator, a, b) {
		switch (myOperator) {
			case '+':
				return this.add(a, b);
			case '-':
				return this.subtract(a, b);
			case '×':
				return this.multiply(a, b);
			case '÷':
				return this.divide(a, b);
		}
	},

	add(a, b) {
		let result = a + b;
		display.textContent = this.overflowCheck(result);
		displayValue = parseFloat(display.textContent);
	},

	subtract(a, b) {
		let result = a - b;
		display.textContent = this.overflowCheck(result);
		displayValue = parseFloat(display.textContent);
	},

	multiply(a, b) {
		let result = a * b;
		display.textContent = this.overflowCheck(result);
		displayValue = parseFloat(display.textContent);
	},

	divide(a, b) {
		if (b !== 0) {
			let result = a / b;
			display.textContent = this.overflowCheck(result);
			displayValue = parseFloat(display.textContent);
		} else display.textContent = 'you mothafucka';
	},

	overflowCheck(number) {
		if (number.toString().length > 6) return number.toFixed(6);
		else return number;
	},
};

calculator.numbers.forEach(number => {
	number.addEventListener('click', e => {
		if (display.textContent !== '0') {
			display.textContent += e.target.textContent;
		} else {
			display.textContent = e.target.textContent;
		}
		displayValue = parseFloat(display.textContent);
	});
});

calculator.operators.forEach(operator => {
	operator.addEventListener('click', e => {
		num1 = displayValue;
		myOperator = e.target.textContent;
		display.textContent = '0';
		displayValue = 0;
	});
});

calculator.clear.addEventListener('click', () => {
	display.textContent = '0';
	displayValue = 0;
	num1 = 0;
	num2 = 0;
	myOperator = '';
});

calculator.allClear.addEventListener('click', () => {
	display.textContent = '0';
	displayValue = 0;
	num1 = 0;
	num2 = 0;
	myOperator = '';
});

calculator.equals.addEventListener('click', () => {
	if (!myOperator) return;
	num2 = displayValue;
	calculator.operate(myOperator, num1, num2);
});

calculator.negate.addEventListener('click', () => {
	if (displayValue > 0) {
		displayValue = 0 - displayValue;
		display.textContent = `${displayValue}`;
	} else if (displayValue < 0) {
		displayValue = Math.abs(displayValue);
		display.textContent = `${displayValue}`;
	}
});

calculator.decimal.addEventListener('click', e => {
	if (display.textContent.includes('.')) return;
	display.textContent += e.target.textContent;
});
