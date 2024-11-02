function sumSalary(salaries) {
  let sum = 0;

  for (let key in salaries) {
    let value = Number(salaries[key]);

    if (typeof value === 'number' && value !== Infinity && value !== -Infinity && !isNaN(value)) {
      sum += value;
    }
    /* if (isFinite(value)) {
      sum += value;
    } */
  }

  return sum;
}
