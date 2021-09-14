const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const DELAY = 1000;

const body = document.querySelector('body');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');

startBtn.addEventListener('click', onStartClick);

function getColor() {
  const index = randomIntegerFromInterval(0, (colors.length - 1));
  body.style.backgroundColor = colors[index];
}

function onStartClick(evt) {
  evt.preventDefault();
  const interval = setInterval(getColor, DELAY);
  evt.target.disabled = true;

  stopBtn.addEventListener('click', onStopClick);

  function onStopClick() {
  body.removeAttribute('style');
  startBtn.disabled = false;
  clearInterval(interval);
}
}