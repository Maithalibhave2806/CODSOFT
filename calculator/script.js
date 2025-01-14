const keys = document.querySelector('.calculator-keys');
const screen = document.querySelector('.calculator-screen');
let screenValue = '';

keys.addEventListener('click', function(event) {
    const { target } = event;
    const { value } = target;
    
    if (!target.matches('button')) return;

    switch (value) {
        case '=':
            try {
                screenValue = eval(screenValue);
            } catch {
                screenValue = 'Error';
            }
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            screenValue += ` ${value} `;
            break;
        default:
            screenValue += value;
    }
    
    screen.value = screenValue;
});
212