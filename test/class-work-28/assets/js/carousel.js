function Carousel(containerId = '#carousel', slideId = '.slide') {
  this.container = document.querySelector(containerId);
  this.slides = this.container.querySelectorAll(slideId);
}
Carousel.prototype = {
  _initControls() {
    const controls = document.createElement('div');
    const PAUSE =
      '<span id="pause-btn" class="control control-pause">Pause</span>';
    const PREV =
      '<span id="prev-btn" class="control control-prev">Previous</span>';
    const NEXT = '<span id="next-btn" class="control control-next">Next</span>';

    controls.setAttribute('id', 'controls-container');
    controls.classList.add('controls');

    controls.innerHTML = PAUSE + PREV + NEXT;
    this.container.appendChild(controls);

    this.pauseBtn = this.container.querySelector('#pause-btn');
    this.prevBtn = this.container.querySelector('#prev-btn');
    this.nextBtn = this.container.querySelector('#next-btn');
  },

  _initIndicators() {
    const indicators = document.createElement('div');
    indicators.setAttribute('id', 'indicators-container');
    indicators.setAttribute('class', 'indicators');

    for (let i = 0; i < this.SLIDES_COUNT; i++) {
      const indicator = document.createElement('div');
      indicator.setAttribute('class', i ? 'indicator' : 'indicator active');
      indicator.dataset.slideTo = `${i}`;
      indicators.appendChild(indicator);
    }

    this.container.appendChild(indicators);
    this.indicatorsContainer = this.container.querySelector(
      '#indicators-container'
    );
    this.indicatorsItems =
      this.indicatorsContainer.querySelectorAll('#indicator');
  },

  _initProps() {
    this.SLIDES_COUNT = this.slides.length;
    this.CODE_ARROW_LEFT = 'ArrowLeft';
    this.CODE_ARROW_RIGHT = 'ArrowRight';
    this.CODE_SPACE = 'Space';

    this.currentSlide = 0;
    this.isPlaying = true;
    this.timerId = null;
    this.interval = 2000;
  },

  _initListeners() {
    this.pauseBtn.addEventListener('click', this.pausePlay.bind(this));
    this.prevBtn.addEventListener('click', this.prevSlide.bind(this));
    this.nextBtn.addEventListener('click', this.nextSlide.bind(this));
    this.indicatorsContainer.addEventListener(
      'click',
      this._indicateHandler.bind(this)
    );
    document.addEventListener('keydown', this._pressKey.bind(this));
  },

  _gotoNth(n) {
    this.slides[this.currentSlide].classList.toggle('active');
    this.indicatorItems[this.currentSlide].classList.toggle('active');
    this.currentSlide = (n + this.SLIDES_COUNT) % this.SLIDES_COUNT;
    this.slides[this.currentSlide].classList.toggle('active');
    this.indicatorItems[this.currentSlide].classList.toggle('active');
  },

  _gotoPrev() {
    this._gotoNth(this.currentSlide - 1);
  },

  _gotoNext() {
    this._gotoNth(this.currentSlide + 1);
  },

  _tick() {
    this.timerId = setTimeout(() => {
      this._gotoNext();
    }, this.interval);
  },
};
