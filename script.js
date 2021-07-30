'use strict';

//////////////////////////////////////////////////////////////////////////////////////////
// Query selectors
const body = document.querySelector('body');
const container = document.querySelector('.container');
const text = document.querySelector('#text');
const circle = document.querySelector('.circle');
const pointerContainer = document.querySelector('.pointer-container');
const pointer = document.querySelector('.pointer');
const gradientCircle = document.querySelector('.gradient-circle');
const meditateBtn = document.querySelector('.meditate-btn');
const colour = document.querySelectorAll('.colour');
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

const hexToRgb = hex => {
  const validHexInput = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  let output = {
    r: parseInt(validHexInput[1], 16),
    g: parseInt(validHexInput[2], 16),
    b: parseInt(validHexInput[3], 16),
  };
  const outputArray = Object.values(output);
  return `${outputArray[0]}, ${outputArray[1]}, ${outputArray[2]}`;
};

const changeTheme = (photoColour, colour1, colour2, colour3, colour4) => {
  console.log(photoColour);
  body.style.color = colour1;
  body.style.backgroundImage = `linear-gradient(to right bottom, rgba(${hexToRgb(
    colour2
  )}, 0.8), rgba(${hexToRgb(
    colour3
  )}, 0.8)), url(images/background-${photoColour}.jpg)`;
  gradientCircle.style.background = `conic-gradient(${colour3} 0%, ${colour3} 40%, ${colour1} 40%, ${colour1} 60%, ${colour4} 60%, ${colour4} 100%)`;
  pointer.style.background = colour1;
  circle.style.background = colour2;

  for (let i = 0; i < colour.length; i++) {
    colour[i].style.border = `0.2rem solid ${colour1}`;
  }
};

redColour.addEventListener(
  'click',
  () => {
    changeTheme('red', '#FBCC39', '#220808', '#AF2904', '#44241A');
  },
  false
);

purpleColour.addEventListener(
  'click',
  () => {
    changeTheme('purple', '#D4A1F1', '#2B263A', '#8070B8', '#4D374C');
  },
  false
);

blueColour.addEventListener(
  'click',
  () => {
    changeTheme('blue', '#E8E9E9', '#29384C', '#838DA0', '#444352');
  },
  false
);

greenColour.addEventListener(
  'click',
  () => {
    changeTheme('green', '#6D8B44', '#D3D7CC', '#35461B', '#8EB266');
  },
  false
);

yellowColour.addEventListener(
  'click',
  () => {
    changeTheme('yellow', '#FAD86E', '#432A0E', '#C3995D', '#614D32');
  },
  false
);
