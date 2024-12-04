const block = document.querySelector('.block');
const maxWidth = window.innerWidth - block.offsetWidth;
const maxHeight = window.innerHeight - block.offsetHeight;
const STEP = 10;
const STOP = (newBg = `yodaBoom`) => {
  const bg = block.style.backgroundImage;
  block.style.backgroundImage = `url(img/${newBg}.gif)`;
  setTimeout(() => {
    block.style.backgroundImage = bg;
  }, 1000);
};

const KEYS = {
  37: () => {
    //arrowLeft
    let deadLine = block.offsetLeft - STEP;
    if (deadLine < 0) {
      STOP();
      block.style.left = `${parseInt(block.style.left) + STEP}px`;
    } else {
      block.style.left = !block.style.left
        ? `-${STEP}px`
        : `${parseInt(block.style.left) - STEP}px`;
    }
  },
  38: () => {
    let deadLine = block.offsetTop - STEP;
    if (deadLine < 0) {
      STOP();
      block.style.top = `${parseInt(block.style.top) + STEP}px`;
    } else {
      block.style.top = !block.style.top
        ? `-${STEP}px`
        : `${parseInt(block.style.top) - STEP}px`;
    }
  },
  39: () => {
    let deadLine = block.offsetLeft + STEP;
    if (deadLine > maxWidth) {
      STOP();
      block.style.left = `${parseInt(block.style.left) - STEP}px`;
    } else {
      block.style.left = !block.style.left
        ? `${STEP}px`
        : `${parseInt(block.style.left) + STEP}px`;
    }
  },
  40: () => {
    let deadLine = block.offsetTop + STEP;

    if (deadLine > maxHeight) {
      STOP();
      block.style.top = `${parseInt(block.style.top) - STEP}px`;
    } else {
      block.style.top = !block.style.top
        ? `${STEP}px`
        : `${parseInt(block.style.top) + STEP}px`;
    }
  },
  32: () => {
    STOP('yodaSpace');
  },
  17: () => {
    STOP('yodaControl');
  },
};

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 32 && event.repeat) {
    return;
  }
  KEYS[event.keyCode] && KEYS[event.keyCode]();
});
