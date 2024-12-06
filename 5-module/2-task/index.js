function toggleText() {
  const buttonElement = document.querySelector('.toggle-text-button');
  const textElement = document.getElementById('text');

  buttonElement.addEventListener('click', () => {
    textElement.hidden = !textElement.hidden;
  });
}
