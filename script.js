const display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.classList.contains('button-clear')) {
            currentInput = '';
            operator = '';
            previousInput = '';
            display.textContent = '0';
        } else if (button.classList.contains('button-operator')) {
            if (currentInput !== '') {
                previousInput = currentInput;
                currentInput = '';
                operator = value;
            }
        } else if (button.classList.contains('button-equal')) {
            if (previousInput !== '' && currentInput !== '' && operator !== '') {
                currentInput = eval(`${previousInput}${operator}${currentInput}`);
                display.textContent = currentInput;
                operator = '';
                previousInput = '';
            }
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});
