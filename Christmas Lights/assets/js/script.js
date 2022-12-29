const lights = document.querySelectorAll('.light')
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const bntSpeed = document.querySelector('.speed')
const inpSpeed = document.querySelector('.inp-speed')
const error = document.querySelector('.error')
let len = lights.length;

const on = function () {
  for (let i = 0; i < len; i++) {
    lights[i].removeAttribute("style");
    lights[i].style.animationPlayState = "running";
  }
}

const off = function () {
  for (let i = 0; i < len; i++) {
    lights[i].style.animation = "none";
    lights[i].style.background = "#0a4075";
  }
}


function changeSpeed() {
  let speed = inpSpeed.value;
  
  for (let i = 0; i < len; i++) {
    if (speed < 0.1 || speed > 1) {
      error.innerHTML = 'The speed is between 0.1 and 1'
    } else {
      lights[i].style.animationDuration = speed + 's';
    }
  }
}

start.addEventListener('click', on);
stop.addEventListener('click', off);
