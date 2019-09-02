let body = document.querySelector('body');
let colorInfo = document.querySelector('h3');
const colorInputs = document.querySelector('.color-input-box');
let colors = document.querySelectorAll('.color-input');
const genButton = document.querySelector('.gen-btn');
let numOfColor = 2;
const bgModeSelector = document.getElementsByClassName('style-selector');

const init = () => {
  setupColors();
  buildBackground();
  userSelectColor();
}

const userSelectColor = () => {
  colors.forEach(input => {
    input.addEventListener('input', e => {
      this.value = e.target.value;
      buildBackground();
    });
  });
}

const setupColors = () => {
  colors.forEach(color => color.value = buildColor());
}

const buildBackground = () => {
  let gradient = colors[0].value;
  for (let i = 1; i < colors.length; i ++) {
    gradient += ', ' + colors[i].value;
  }
  body.style.background = 'linear-gradient(to right bottom, ' + gradient + ')';
  console.log(gradient);
  colorInfo.textContent = gradient;
}

const buildColor = () => {
  let hexOfColor = [];
  for (let i = 0; i < 6; i++) {
    hexOfColor.push(randomColor());
  }
  return '#' + hexOfColor.join('');
}

const randomColor = () => Math.floor(Math.random()*16).toString(16);

const setupInputMode = () => {
  for (let i = 0; i < bgModeSelector.length; i++) {
    bgModeSelector[i].addEventListener('click', () => { 
      numOfColor = i + 2;
      createColorInputBox(numOfColor);
      init();
    });
  }
}

const createColorInputBox = (num) => {
  while (colorInputs.hasChildNodes()) {
    colorInputs.removeChild(colorInputs.firstChild);
  }
  for (let i = 0; i < num; i++) {
    let newInput = document.createElement('input');
    newInput.type = 'color';
    newInput.className = 'color-input';
    colorInputs.appendChild(newInput);
  }
  colors = document.querySelectorAll('.color-input');
}

init();
setupInputMode();