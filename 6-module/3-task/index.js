import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  elem = null;
  #slides = [];
  #currentIndex = 0;
  #innerWidth = 0;

  constructor(slides) {
    this.#slides = slides ?? this.#slides;
    this.#render();
  }

  #createSlides () {
    let slides = this.#slides;

    return `
    <div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
      <div class="carousel__inner">
      ${slides.map((item) => {
        return ( `
          <div class="carousel__slide" data-id="${item.id}">
            <img src="/assets/images/carousel/${item.image}" class="carousel__img" alt="${item.name}"/>
            <div class="carousel__caption">
              <span class="carousel__price">€${item.price.toFixed(2)}</span>
              <div class="carousel__title">${item.name}</div>
              <button type="button" class="carousel__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon"/>
              </button>
            </div>
          </div>`
        );
      }).join(' ')}
      </div>
    </div>
   `;
  }

  #arrowsButtons = (event) => {
    const target = event.target;
    let btnLeft = this.elem.querySelector('.carousel__arrow_left');
    let btnRight = this.elem.querySelector('.carousel__arrow_right');
    let inner = this.elem.querySelector('.carousel__inner');
    let slides = this.elem.querySelectorAll('.carousel__slide');

    const slideCount = slides.length;
    const slideWidth = slides[0].offsetWidth;

    if (btnRight.contains(target) && this.#currentIndex < slideCount - 1) {
      this.#currentIndex++;
      this.#innerWidth += slideWidth;
      inner.style.transform = `translateX(${-this.#innerWidth}px)`;

      if (this.#currentIndex === slideCount - 1) {
        btnRight.style.display = 'none';
      }

      if (this.#currentIndex !== slideCount - 1) {
        btnLeft.style.display = '';
      }
    }

    if (btnLeft.contains(target) && this.#currentIndex > 0) {
      this.#currentIndex--;
      this.#innerWidth -= slideWidth;
      inner.style.transform = `translateX(${-this.#innerWidth}px)`;

      if (this.#currentIndex === 0) {
        btnLeft.style.display = 'none';
      }

      if (this.#currentIndex !== slideCount - 1) {
        btnRight.style.display = '';
      }
    }
  }

  get currentDataId () {
    return this.#slides[this.#currentIndex].id;
  }

  #carouselButton = () => {
    const customEvent =
      new CustomEvent("product-add", {
        detail: this.currentDataId,
        bubbles: true
      });

    console.log('Click:', this.currentDataId);
    this.elem.dispatchEvent(customEvent);
  }

  #render () {
    this.elem = createElement(this.#createSlides());

    let btnLeft = this.elem.querySelector('.carousel__arrow_left');
    btnLeft.style.display = 'none';

    this.elem.querySelectorAll('.carousel__button').forEach(button => {
      button.addEventListener('click', this.#carouselButton);
    });

    this.elem.addEventListener('click', this.#arrowsButtons);
  }
}
