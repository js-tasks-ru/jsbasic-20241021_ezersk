function toggleText() {
  document.addEventListener('click', function (event) {
    let btnName = event.target;

    if (btnName.classList.contains('toggle-text-button')) {
      let textElement = document.getElementById('text');
      if (textElement.hasAttribute('hidden')) {
        textElement.removeAttribute('hidden');
      } else {
        textElement.setAttribute('hidden', '');
      }
    }
  });
}
