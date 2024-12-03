import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  elem = null;

  constructor(categories) {
    this.categories = categories ?? this.categories;
    this.#render();
  }

  #template() {
    return `
    <div class="ribbon">
     <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
       <img src="/assets/images/icons/angle-icon.svg" alt="icon">
     </button>
     <nav class="ribbon__inner">
     ${this.categories.map((item) => (
      `<a href="#" class="ribbon__item ribbon__item_active" data-id=${item.id}>${item.name}</a>`
    )).join(' ')}
     </nav>
     <button class="ribbon__arrow ribbon__arrow_right">
       <img src="/assets/images/icons/angle-icon.svg" alt="icon">
     </button>
     </div>
    `;
  }

  #arrowsButtons = (event) => {
    const target = event.target;
    let ribbonInner = this.elem.querySelector('.ribbon__inner');
    let btnLeft = this.elem.querySelector('.ribbon__arrow_left');
    let btnRight = this.elem.querySelector('.ribbon__arrow_right');

    let scrollWidth = ribbonInner.scrollWidth;
    let scrollLeft = ribbonInner.scrollLeft;
    let clientWidth = ribbonInner.clientWidth;

    let scrollRight = scrollWidth - scrollLeft - clientWidth;

    if (btnLeft.contains(target)) {
      ribbonInner.scrollBy(-350, 0);
    }

    if (btnRight.contains(target)) {
      ribbonInner.scrollBy(350, 0);
      btnLeft.classList.add('ribbon__arrow_visible');
    }

    if (scrollRight < 1) {
      btnRight.classList.remove('ribbon__arrow_visible');
    }

    if (scrollLeft === 0) {
      btnLeft.classList.remove('ribbon__arrow_visible');
    }
  };

  #categoryButton = (event) => {
    event.preventDefault();
    const target = event.target;
    let btnActive;

    if (target) {
      this.elem.querySelectorAll('a').forEach((item) => {
        item.classList.remove('ribbon__item_active');
      });
      target.classList.add('ribbon__item_active');
      btnActive = target.getAttribute('data-id');
    }

    const customEvent =
      new CustomEvent("ribbon-select", {
        detail: btnActive,
        bubbles: true
      });
    console.log(btnActive);
    this.elem.dispatchEvent(customEvent);
  };

  #render() {
    this.elem = createElement(this.#template());
    this.elem.querySelectorAll('.ribbon__item_active').forEach((item) => {
      item.classList.remove('ribbon__item_active');
    });

    this.elem.querySelectorAll('a').forEach(button => {
      button.addEventListener('click', this.#categoryButton);
    });

    this.elem.addEventListener('click', this.#arrowsButtons);
    let btnLeft = this.elem.querySelector('.ribbon__arrow_left');
    btnLeft.classList.remove('ribbon__arrow_visible');
    let btnRight = this.elem.querySelector('.ribbon__arrow_right');
    btnRight.classList.add('ribbon__arrow_visible');
  }
}
