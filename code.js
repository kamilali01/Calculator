let firstValue = null;
let secondValue = null;
let operator;
let resetDispley= true;
const display = document.querySelector('.container1');
display.innerHTML = 0;

function sum(num1, num2){
    firstValue = num1+num2;
    display.innerHTML = firstValue;

}function subtract(num1, num2){
    firstValue = num1-num2;
    display.innerHTML = firstValue;
}
function multiply(num1, num2){
    firstValue = num1*num2;
    display.innerHTML = firstValue;
}
function divide(num1, num2){
    firstValue = num1/num2;
    display.innerHTML = firstValue;
}



document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    if (!isNaN(key)) {
        addDisplay(key);
       
    }
    if(key === '.'){
        addDisplay(key);
    }

    else if(key === '+'){
        setOperator('+')
    }
    else if(key === '-'){
        setOperator('-')
    }
    else if(key === '*'){
        setOperator('*')
    }
    else if(key === '/'){
        setOperator('/')
    }
    else if(key === 'Backspace'){
        clearDisplay()
    }
    else if(key === '%'){
        percentage();
    }
    else if(key === 'Enter'){
        operate();
    }

    
});

function addDisplay(input){
    if(resetDispley===true){
    display.innerHTML = ' ';
    }
    if(display.innerHTML<100000000)
    display.innerHTML  = display.innerHTML + input;
    resetDispley = false;
    
}

function setOperator(input){
        firstValue = parseFloat(display.innerHTML);
        operator = input;
        resetDispley = true;

        
        
}
function operate(){
    resetDispley = true;
    secondValue = parseFloat(display.innerHTML);
    switch(operator){
        case "+": sum(firstValue, secondValue); break;
        case "-": subtract(firstValue, secondValue); break;
        case "*": multiply(firstValue, secondValue); break;
        case "/": divide(firstValue, secondValue); break;
        default: break;
    }
    

}

function clearDisplay(){
    display.innerHTML = 0;
    firstValue = null;
    secondValue = null;
    operator = null;
    resetDispley = true;
}

function negative(){
        display.innerHTML = -Number(display.innerHTML);
}

function percentage(){
    display.innerHTML = display.innerHTML / 100;
}