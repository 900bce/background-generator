let body = document.querySelector('body');
let colorInfo = document.querySelector('h3');
const colors = document.querySelectorAll('.color-input');
const genButton = document.querySelector('.gen-btn');

const init = () => {
  setupColors();
  buildBackground();
  userSelectColor();
  genButton.addEventListener('click', genNewBg);
}

const genNewBg = () => {
  setupColors();
  buildBackground();
}

const userSelectColor = () => {
  colors.forEach(input => {
    input.addEventListener('input', e => {
      this.value = e.target.value;
      buildBackground();
    });
  });
}

const setupColors = () => colors.forEach(color => color.value = buildColor());

const buildBackground = () => {
  body.style.background = 'linear-gradient(to right bottom, ' + colors[0].value + ', ' + colors[1].value + ')';
  colorInfo.textContent = colors[0].value + ' | ' + colors[1].value;
}

const buildColor = () => {
  let hexOfColor = [];
  for (let i = 0; i < 6; i++) {
    hexOfColor.push(randomColor());
  }
  return '#' + hexOfColor.join('');
}

const randomColor = () => Math.floor(Math.random()*16).toString(16);

init();
