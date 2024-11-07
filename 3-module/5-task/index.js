function getMinMax(str) {
  let sortedArray = str
    .split(' ')
    .map(el => Number(el))
    .filter(el => !isNaN(el));

  return {
    min: Math.min(...sortedArray),
    max: Math.max(...sortedArray),
  };
}
