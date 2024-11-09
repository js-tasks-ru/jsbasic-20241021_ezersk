function camelize(str) {
  let transformWord = str
    .split('-')
    .map((word, index) => {
      if (index === 0) { return word; }

      return word.charAt(0).toUpperCase() + word.slice(1);

    })
    .join('');

  return transformWord;
}
