const form = document.querySelector('.form');
const display = document.querySelector('.display');

const maxDisplay = 40;

function showDisplay(num) {
    if (display.innerHTML.length <  maxDisplay) {
        display.innerHTML += num;
    }
}

function cleanAll() {
    display.innerHTML = ' ';
}

function backspace() {
    let bsp = display.innerHTML;
    display.innerHTML = bsp.substring(0, bsp.length -1)
}

function calc() {
    let result = display.innerHTML;
    if (result) {
        display.innerHTML = eval(result);
    }
}

form.addEventListener('click', function (e) {
    e.preventDefault();

})