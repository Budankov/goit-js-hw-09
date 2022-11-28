const startBtn = document.querySelector('button[data-start]');
const stoptBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

startBtn.addEventListener('click', changeColor);
stoptBtn.addEventListener('click', stopInterval);

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    startBtn.disabled = true;
    stoptBtn.disabled = false;
    startBtn.setAttribute = 'disabled';
  }, 1000);
}

function stopInterval() {
  startBtn.disabled = false;
  stoptBtn.disabled = true;
  clearInterval(intervalId);
}
