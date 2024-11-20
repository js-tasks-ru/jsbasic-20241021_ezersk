function toggleText() {
  document.addEventListener('click', function (event) {
    let btnName = event.target;

    if (btnName.classList.contains('toggle-text-button')) {
      let textElement = document.getElementById('text');
      textElement.hidden = !textElement.hidden;
    }
  });
}
