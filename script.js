'use strict';

//////////////////////////////////////////////////////////////////////////////////////////
// Query selectors
const body = document.querySelector('body');
const container = document.querySelector('.container');
const text = document.querySelector('#text');
const circle = document.querySelector('.circle');
const pointerContainer = document.querySelector('.pointer-container');
const gradientCircle = document.querySelector('.gradient-circle');
const meditateBtn = document.querySelector('.meditate-btn');
const redColour = document.querySelector('.red');
const purpleColour = document.querySelector('.purple');
const blueColour = document.querySelector('.blue');
const greenColour = document.querySelector('.green');
const yellowColour = document.querySelector('.yellow');

//////////////////////////////////////////////////////////////////////////////////////////
// Breathing animations

// Variables for breathing times
let totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

// Function for starting the breathing animations
function BreatheAnimation() {
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

BreatheAnimation();
setInterval(BreatheAnimation, totalTime);

//////////////////////////////////////////////////////////////////////////////////////////
// Countdown timer

//////////////////////////////////////////////////////////////////////////////////////////
// Changing the theme colours

const changeTheme = function (colour, primary, secondary, tertiary) {
  body.style.backgroundImage = `linear-gradient(to right bottom, rgba(${primary}, 0.8), rgba(${secondary}, 0.8)), url(images/background-${colour}.jpg)`;
  gradientCircle.style.background = `conic-gradient(${secondary} 0%, ${secondary} 40%, #e8e9e9 40%, #e8e9e9 60%, ${tertiary} 60%, ${tertiary} 100%);`;
  circle.style.backgroundColour = primary;
};

redColour.addEventListener(
  'click',
  changeTheme('red', '#AF2904', '#F47C3C', '#44241A')
);

purpleColour.addEventListener(
  'click',
  changeTheme('red', '#AF2904', '#F47C3C', '#44241A')
);

blueColour.addEventListener(
  'click',
  changeTheme('red', '#29384c', '#838da0', '#444352')
);

greenColour.addEventListener(
  'click',
  changeTheme('red', '#AF2904', '#F47C3C', '#44241A')
);

yellowColour.addEventListener(
  'click',
  changeTheme('red', '#AF2904', '#F47C3C', '#44241A')
);
