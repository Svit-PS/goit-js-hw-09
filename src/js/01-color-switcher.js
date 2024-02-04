const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};

const TIMER = 1000;
let idsetInterval = null;
refs.btnStart.addEventListener('click', onClickStart);
refs.btnStop.addEventListener('click', onClickStop);

refs.btnStop.setAttribute('disabled', '');

function onClickStart() {
  refs.btnStart.setAttribute('disabled', '');
  refs.btnStop.removeAttribute('disabled');
  idsetInterval = setInterval(() => {
    const bgColor = getRandomHexColor();
    refs.body.style.background = bgColor;
  }, TIMER);
}

function onClickStop() {
  clearInterval(idsetInterval);
  idsetInterval = null;
  refs.btnStart.removeAttribute('disabled');
  refs.btnStop.setAttribute('disabled', '');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
