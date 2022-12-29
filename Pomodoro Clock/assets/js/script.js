const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
const counter = document.querySelector('.counter');
let minutes = 25;
let seconds = 0;

function template() {
  document.querySelector('.counter').innerHTML = minutes + ':' + seconds;
}