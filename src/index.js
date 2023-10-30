const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const bodyElement = document.body;

function getRandomHexColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
}

let intervalId;

const startButtonClickHandler = () => {
  startButton.disabled = true;
  intervalId = setInterval(() => {
    bodyElement.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

const stopButtonClickHandler = () => {
  startButton.disabled = false;
  clearInterval(intervalId);
};

startButton.addEventListener('click', startButtonClickHandler);
stopButton.addEventListener('click', stopButtonClickHandler);
