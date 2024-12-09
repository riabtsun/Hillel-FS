class Carousel {
  constructor(sliderLine) {
    this.intervalTime = sliderLine.intervalTime;
    this.showIndicators = sliderLine.showIndicators;
    this.numberOfSlider = sliderLine.numberOfSlider;

    this.container = document.createElement('div');
    this.container.className = 'container';
    document.body.appendChild(this.container);

    this.sliders = [];
    this.indicators = [];
    this.slideInterval = null;

    this.counter = 0;
    this.step = 0;
  }
}

Carousel.prototype.init = function () {
  this.createElements();
  this.loadImages();
};

Carousel.prototype.createElements = function () {
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
};

Carousel.prototype.loadImages = function () {
  let countSliders = 0;
  this.numberOfSlider.forEach((el, i) => {
    let img = document.createElement('img');
    img.src = `img/${i + 1}.jpg`;

    this.sliders.push(img);
  });
};
