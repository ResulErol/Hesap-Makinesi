
const display = document.getElementById('display');


function appendToDisplay(value) {
    
    if (display.value === '0' && value !== '.' && isNaN(parseInt(value))) {
        display.value = value;
    } else if (display.value === '0' && value !== '.') {
         display.value = value;
    } 
    else {
        
        display.value += value;
    }
}


function clearDisplay() {
    display.value = '0';
}


function calculateResult() {
    try {
        
        const result = eval(display.value);
        
        
        display.value = result;

    } catch (error) {
        
        display.value = 'Hata!';
    }
}