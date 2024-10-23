function factorial(n) {
  let result = n;
  if (n === 0 || n === 1) {
    return 1;
  }
  for (let i = n - 1; i > 1; i--) {
    result *= i;
  }
  return result;
}
