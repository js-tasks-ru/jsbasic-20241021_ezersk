function initCarousel() {
  let containerCarousel = document.querySelector('.carousel');
  let btnLeft = containerCarousel.querySelector('.carousel__arrow_left');
  let btnRight = containerCarousel.querySelector('.carousel__arrow_right');

  let inner = containerCarousel.querySelector('.carousel__inner');
  let slides = inner.querySelectorAll('.carousel__slide');

  const slideCount = slides.length;
  const slideWidth = slides[0].offsetWidth;
  let currentIndex = 0;
  let innerWidth = 0;

  btnLeft.style.display = 'none';

  containerCarousel.addEventListener("click", (event) => {
    const target = event.target;

    if (btnRight.contains(target) && currentIndex < slideCount - 1) {
      currentIndex++;
      innerWidth += slideWidth;
      inner.style.transform = `translateX(${-innerWidth}px)`;

      if (currentIndex === slideCount - 1) {
        btnRight.style.display = 'none';
      }

      if (currentIndex !== slideCount - 1) {
        btnLeft.style.display = '';
      }
    }

    if (btnLeft.contains(target) && currentIndex > 0) {
      currentIndex--;
      innerWidth -= slideWidth;
      inner.style.transform = `translateX(${-innerWidth}px)`;

      if (currentIndex === 0) {
        btnLeft.style.display = 'none';
      }

      if (currentIndex !== slideCount - 1) {
        btnRight.style.display = '';
      }
    }
  });
}
