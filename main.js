const colorInputs = document.querySelector('.color-input-box');
const bgModeSelector = document.getElementsByClassName('style-selector');
let colors = document.querySelectorAll('.color-input');

const init = () => {
  setupColors();
  buildBackground();
  userSelectColor();
}

// Color input box functionality
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

// Create HEX color code '#xxxxxx'
const buildColor = () => {
  let hexOfColor = [];
  for (let i = 0; i < 6; i++) {
    hexOfColor.push(randomColor());
  }
  return '#' + hexOfColor.join('');
}

const randomColor = () => Math.floor(Math.random()*16).toString(16);

const buildBackground = () => {
  let gradient = colors[0].value;
  for (let i = 1; i < colors.length; i ++) {
    gradient += ', ' + colors[i].value;
  }
  document.body.style.background = 'linear-gradient(to right bottom, ' + gradient + ')';
  document.querySelector('h3').textContent = gradient;  // Show grdient information in h3 tag.
}

// Setup mode selector buttons, 2~4 colors.
const setupInputMode = () => {
  for (let i = 0; i < bgModeSelector.length; i++) {
    bgModeSelector[i].addEventListener('click', () => { 
      let numOfColor = i + 2;
      createColorInputBox(numOfColor);
      init();
    });
  }
}

// When switching to different mode, rebuild color input box.
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