'use strict';

// Query selectors
const body = document.querySelector('body');
const container = document.querySelector('.container');
const text = document.querySelector('#text');
const circle = document.querySelector('.circle');
const pointerContainer = document.querySelector('.pointer-container');
const pointer = document.querySelector('.pointer');
const gradientCircle = document.querySelector('.gradient-circle');
const timeLeft = document.getElementById('time-left');
const meditateBtn = document.querySelector('.meditate-btn');
const colour = document.querySelectorAll('.colour');
const redColour = document.querySelector('.red');
const purpleColour = document.querySelector('.purple');
const blueColour = document.querySelector('.blue');
const greenColour = document.querySelector('.green');
const yellowColour = document.querySelector('.yellow');

/////////////////////////////////////////////////////////////////////////////////////
// Timer and animations

// Breathing animations
let totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

// Function for starting the breathing animations
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

// Countdown timer functionality
const startingMins = 10;
let time = startingMins * 60 - 1;

const updateCountdown = () => {
  let mins = Math.floor(time / 60);
  let secs = time % 60;

  mins = mins < 10 ? '0' + mins : mins;
  secs = secs < 10 ? '0' + secs : secs;
  timeLeft.innerText = `${mins}:${secs}`;

  if (time === 0) {
    timerStop();
  }

  time--;
};

let countdownInterval, animationInterval;

// Function for resetting timer
const timerStop = () => {
  clearInterval(countdownInterval);
  clearInterval(animationInterval);

  timeLeft.innerText = `10:00`;
  meditateBtn.innerText = `START`;
  time = startingMins * 60 - 1;

  container.className = 'container';
  pointerContainer.style.animation = 'rotate 7.5s linear forwards 1';
};

// Start countdown timer and animations
let countdown;
meditateBtn.addEventListener('click', () => {
  countdown = !countdown;
  console.log(countdown);

  if (countdown) {
    meditateBtn.innerText = `RESET`;
    countdownInterval = setInterval(updateCountdown, 1000);
    breatheAnimation();
    animationInterval = setInterval(breatheAnimation, totalTime);
  } else {
    timerStop();
  }
});

// meditateBtn.addEventListener('click', () => {
//   timer = !timer;
//   console.log(timer);

//   if (timer) {
//     countdownInterval = setInterval(updateCountdown, 1000);
//     breatheAnimation();
//     animationInterval = setInterval(breatheAnimation, totalTime);
//   } else {
//     timerStop();
//   }
// });

/////////////////////////////////////////////////////////////////////////////////////
// Theme change

// Changing hex colours to RGB for gradients
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

// Changing the theme
const changeTheme = (photoColour, colour1, colour2, colour3, colour4) => {
  body.style.color = colour1;
  body.style.backgroundImage = `linear-gradient(to right bottom, rgba(${hexToRgb(
    colour2
  )}, 0.8), rgba(${hexToRgb(
    colour3
  )}, 0.8)), url(images/background-${photoColour}.jpg)`;
  meditateBtn.style.border = `0.2rem solid ${colour1}`;
  gradientCircle.style.background = `conic-gradient(${colour3} 0%, ${colour3} 40%, ${colour1} 40%, ${colour1} 60%, ${colour4} 60%, ${colour4} 100%)`;
  pointer.style.background = colour1;
  circle.style.background = colour2;

  for (let i = 0; i < colour.length; i++) {
    colour[i].style.border = `0.2rem solid ${colour1}`;
  }
};

// Event listeners
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
    changeTheme('green', ' #D3D7CC', '#35461B', '#8EB266', '#6D8B44');
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
