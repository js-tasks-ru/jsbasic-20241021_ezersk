import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  elem = null;
  title = '';
  innerBody = '';

  constructor(title, innerBody) {
    this.title = title ?? this.title;
    this.innerBody = innerBody ?? this.innerBody;
    this.elem = createElement(this.#modalWindow());
    this.#listenerCloseBtn();
  }

  #modalWindow() {
    return `
    <div class="modal">
      <div class="modal__overlay"></div>
      <div class="modal__inner">
        <div class="modal__header">
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>
          <h3 class="modal__title">
           Вот сюда нужно добавлять заголовок
          </h3>
        </div>
        <div class="modal__body">
          A сюда нужно добавлять содержимое тела модального окна
        </div>
      </div>
    </div>
   `;
  }

  setTitle(title) {
    let modalTitle = this.elem.querySelector('.modal__title');
    modalTitle.innerText = title;
  }

  setBody(innerBody) {
    let modalBody = this.elem.querySelector('.modal__body');
    modalBody.innerText = '';
    modalBody.appendChild(innerBody);
  }

  open() {
    document.body.classList.add('is-modal-open');
    document.body.appendChild(this.elem);
  }

  #listenerCloseBtn() {
    let btnClose = this.elem.querySelector('.modal__close');
    if (btnClose) {
      btnClose.addEventListener('click', () => this.close());
    }

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.close();
      }
    });
  }

  #deleteListenerCloseBtn() {
    let btnClose = this.elem.querySelector('.modal__close');
    btnClose.removeEventListener('click', this.close);
  }

  close() {
    document.body.classList.remove('is-modal-open');
    this.elem.remove();
    this.#deleteListenerCloseBtn();
  }
}
