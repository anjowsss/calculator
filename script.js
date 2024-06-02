function clearDisplay() {
    document.getElementsByName('display')[0].value = '';
}

function deleteLastChar() {
    var display = document.getElementsByName('display')[0];
    display.value = display.value.slice(0, -1);
}

function appendSymbol(symbol) {
    document.getElementsByName('display')[0].value += symbol;
}

function calculate() {
    var display = document.getElementsByName('display')[0];
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
