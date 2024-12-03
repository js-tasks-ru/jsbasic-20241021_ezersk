import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  elem = null;

  constructor({steps, value = 0}) {
    this.steps = steps;
    this.value = value;
    this.#render();
  }

  #sliderTemplate() {
    return `
    <!--Корневой элемент слайдера-->
    <div class="slider">
      <!--Ползунок слайдера с активным значением-->
      <div class="slider__thumb">
        <span class="slider__value">0</span>
      </div>

      <!--Полоска слайдера-->
      <div class="slider__progress"></div>

      <!-- Шаги слайдера (вертикальные чёрточки) -->
      <div class="slider__steps">
        <!-- текущий выбранный шаг выделен этим классом -->
        <span class="slider__step-active"></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    `;
  }

  #createStepSlider() {
    const containerSpan = this.elem.querySelector('.slider__steps');
    containerSpan.innerHTML = '';

    for (let i = 0; i < this.steps; i++) {
      const span = document.createElement('span');
      if (i === this.value) {
        span.className = 'slider__step-active';
      }
      containerSpan.appendChild(span);
    }
  }

  #sliderChange = (event) => {
    let left = event.clientX - this.elem.getBoundingClientRect().left;
    let leftRelative = left / this.elem.offsetWidth;
    let segments = this.steps - 1;
    let approximateValue = leftRelative * segments;
    let value = Math.round(approximateValue);
    this.#updateSlider(value);

    const customEvent =
      new CustomEvent("slider-change", {
        detail: value,
        bubbles: true
      });
    this.elem.dispatchEvent(customEvent);
  };

  #updateSlider(stepIndex) {
    const thumb = this.elem.querySelector('.slider__thumb');
    const progress = this.elem.querySelector('.slider__progress');
    const stepsContainer = this.elem.querySelectorAll('.slider__steps span');

    let valuePercents = (stepIndex / (this.steps - 1)) * 100;
    thumb.style.left = `${valuePercents}%`;
    progress.style.width = `${valuePercents}%`;

    stepsContainer.forEach((step, index) => {
      step.classList.toggle('slider__step-active', index === stepIndex);
    });

    this.elem.querySelector('.slider__value').innerText = stepIndex;
  }

  #render() {
    this.elem = createElement(this.#sliderTemplate());
    this.#createStepSlider();
    this.elem.addEventListener('click', this.#sliderChange);
    this.#updateSlider(this.value);
  }
}
