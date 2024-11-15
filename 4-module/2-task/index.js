function makeDiagonalRed(table) {
  /* method 1 */
  // for (let i = 0; i < table.rows.length; i++) {
  //   let elementsTable = table.rows[i].cells[i];
  //   elementsTable.style.backgroundColor = 'red';
  // }

  /* method 2 */
  let tableTransformToArray = Array.from(table.rows);

  tableTransformToArray.forEach((el, i) => el.cells[i].style.backgroundColor = 'red');
}
