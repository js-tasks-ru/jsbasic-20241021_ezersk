import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  elem = null;
  #product = {};

  constructor(product) {
    this.#product = product ?? this.#product;
    this.#render();
  }

  #template() {
    let cardItem = this.#product;
    return `
      <div class="card">
        <div class="card__top">
          <img src="/assets/images/products/${cardItem.image}"
            class="card__image" alt="${cardItem.name}">
           <span class="card__price">€${cardItem.price.toFixed(2)}</span>
        </div>
        <div class="card__body">
          <div class="card__title">${cardItem.name}</div>
          <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `;
  }

  #buttonCard = () => {
    const customEvent =
        new CustomEvent("product-add", {
          detail: this.#product.id,
          bubbles: true
        });
    this.elem.dispatchEvent(customEvent);
  }

  #render() {
    this.elem = createElement(this.#template());

    const button = this.elem.querySelector('.card__button');
    button.addEventListener('click', this.#buttonCard);
  }
}
