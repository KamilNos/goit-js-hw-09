const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const bodyElement = document.body;

function getRandomHexColor() {
  return #${Math.floor(Math.random() * 16777215).toString(16)};
}

let intervalId;


startButton.addEventListener('click', () => {

 startButton.disabled = true;

  intervalId = setInterval(() => {
    bodyElement.style.backgroundColor = getRandomHexColor();
  }, 1000);
});


stopButton.addEventListener('click', () => {

  startButton.disabled = false;
  
  clearInterval(intervalId);
});