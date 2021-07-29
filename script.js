'use strict';

// Query selectors
const container = document.querySelector('.container');
const text = document.querySelector('#text');
const pointerContainer = document.querySelector('.pointer-container');
const meditateBtn = document.querySelector('.meditate-btn');

// Variables for breathing times
let totalTime;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

// Starting and stopping the timer
let timer = false;

meditateBtn.addEventListener('click', function () {
  timer = !timer;

  if (timer === true) {
    meditateBtn.innerText = 'STOP';
    totalTime = 7500;

    breatheAnimation();
    setInterval(breatheAnimation, totalTime);
  } else {
    totalTime = 0;
    pointerContainer.style.animation = '';
  }
});

// meditateBtn.addEventListener('click', function () {
//   breatheAnimation();
//   setInterval(breatheAnimation, totalTime);
// });

// Function for the timer animations
function breatheAnimation() {
  text.innerText = 'Breathe in';
  container.className = 'container grow';
  pointerContainer.style.animation = 'rotate 7.5s linear forwards infinite';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe out';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}
