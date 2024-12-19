class Carousel {
  constructor({ numberOfSlide, intervalTime, showIndicators }) {
    this.container = document.createElement('div');
    this.container.className = 'container';
    document.body.appendChild(this.container);

    this.slides = [];
    this.indicators = [];
    this.slideInterval = null;

    this.intervalTime = intervalTime;
    this.showIndicators = showIndicators;
    this.numberOfSlide = numberOfSlide;

    this.counter = 0;
    this.step = 0;

    this.spaceCounter = 1;

    document.addEventListener('keydown', this.sliderControlButtons);
  }

  sliderControlButtons = (event) => {
    if (event.keyCode === 32 && this.spaceCounter === 1) {
      this.startSlide();
    } else if (event.keyCode === 32 && this.spaceCounter === 2) {
      this.stopSlide();
    } else if (event.keyCode === 37) {
      this.showPrevSlide();
    } else if (event.keyCode === 39) {
      this.showNextSlide();
    }
  };

  init() {
    this.createElements();
    this.loadImages();
    this.setupEventListeners();
  }
  createElements() {
    this.wrapperSlider = document.createElement('div');
    this.wrapperSlider.className = 'wrapper-slider';
    this.container.appendChild(this.wrapperSlider);

    this.sliderLine = document.createElement('div');
    this.sliderLine.className = 'slider';
    this.wrapperSlider.appendChild(this.sliderLine);

    this.indicatorsContainer = document.createElement('div');
    this.indicatorsContainer.className = 'img-indicators';
    this.container.appendChild(this.indicatorsContainer);

    this.prevButton = document.createElement('button');
    this.prevButton.className = 'prev';
    this.prevButton.innerHTML = '&lt; PREV';
    this.container.appendChild(this.prevButton);

    this.nextButton = document.createElement('button');
    this.nextButton.className = 'next';
    this.nextButton.innerHTML = 'NEXT &gt;';
    this.container.appendChild(this.nextButton);

    this.playButton = document.createElement('button');
    this.playButton.className = 'play';
    this.playButton.innerHTML = 'PLAY';

    this.container.appendChild(this.playButton);

    this.pauseButton = document.createElement('button');
    this.pauseButton.className = 'pause';
    this.pauseButton.innerHTML = 'PAUSE';
    this.container.appendChild(this.pauseButton);

    document.addEventListener('keydown', this.playStopSlider);

    this.spaceCounter = 1;
  }
  loadImages() {
    let countSlides = 0;
    for (let i = 0; i < this.numberOfSlide; i++) {
      let img = document.createElement('img');
      img.src = `images/${i + 1}.jpg`;
      img.alt = `images/${i + 1}.jpg`;
      img.className = 'slider-item';
      this.slides.push(img);

      img.onload = () => {
        countSlides++;
        if (countSlides === this.numberOfSlide) {
          this.step = this.slides[0].offsetWidth;
          this.updateSlider();
          if (this.showIndicators) {
            this.createIndicators();
          }
        }
      };
      this.sliderLine.appendChild(img);
    }
  }
  updateSlider() {
    this.sliderLine.style.transform = `translateX(${
      -this.step * this.counter
    }px`;
  }
  createIndicators() {
    for (let i = 0; i < this.numberOfSlide; i++) {
      let indicator = document.createElement('span');
      indicator.className = 'indicator';
      indicator.addEventListener('click', () => {
        this.goToSlide(i);
      });
      this.indicatorsContainer.appendChild(indicator);
      this.indicators.push(indicator);
    }
  }
  updateIndicators() {
    this.indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === this.counter);
    });
  }
  showPrevSlide() {
    this.counter = (this.counter - 1 + this.numberOfSlide) % this.numberOfSlide;
    this.updateSlider();
    this.updateIndicators();
  }
  showNextSlide() {
    this.counter = (this.counter + 1) % this.numberOfSlide;
    this.updateSlider();
    this.updateIndicators();
  }
  goToSlide(index) {
    this.counter = index;
    this.updateSlider();
    this.updateIndicators();
  }
  startSlide() {
    if (!this.slideInterval) {
      this.slideInterval = setInterval(
        () => this.showNextSlide(),
        this.intervalTime
      );
      this.spaceCounter = 2;
    }
  }
  stopSlide() {
    this.spaceCounter = 1;
    clearInterval(this.slideInterval);
    this.slideInterval = null;
  }
  setupEventListeners() {
    this.prevButton.addEventListener('click', () => this.showPrevSlide());
    this.nextButton.addEventListener('click', () => this.showNextSlide());
    this.playButton.addEventListener('click', () => this.startSlide());
    this.pauseButton.addEventListener('click', () => this.stopSlide());

    let firstPosition = 0;
    const touchPosition = (lastPosition) => {
      if (lastPosition < firstPosition) {
        this.showPrevSlide();
      } else if (lastPosition > firstPosition) {
        this.showNextSlide();
      }
    };

    this.sliderLine.addEventListener('touchstart', (ev) => {
      let startPosition = ev.touches[0].clientX;
    });

    this.sliderLine.addEventListener('touchend', (ev) => {
      touchPosition(ev.changedTouches[0].clientX);
    });

    this.sliderLine.addEventListener('mousedown', (ev) => {
      let startPosition = ev.clientX;
    });

    this.sliderLine.addEventListener('mouseup', (ev) => {
      touchPosition(ev.clientX);
    });
  }
}

const carousel = new Carousel({
  numberOfSlide: 3,
  intervalTime: 1000,
  showIndicators: true,
});

carousel.init();
