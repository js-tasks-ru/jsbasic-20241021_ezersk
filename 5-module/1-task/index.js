function hideSelf() {
  const el = document.querySelector('.hide-self-button');

  el.onclick = () => el.setAttribute('hidden', '');
}

