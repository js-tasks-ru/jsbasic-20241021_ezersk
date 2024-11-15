function highlight(table) {

  for (let i = 1; i < table.rows.length; i++) {
    let row = table.rows[i];

    for (let j = 0; j < row.cells.length; j++) {
      let checkedTd = row.cells[j];
      let cellText = row.cells[j].innerHTML;
      let checkedAttribute = checkedTd.hasAttribute('data-available');

      row.hidden = !checkedAttribute;

      if (checkedAttribute) {
        if (checkedTd.dataset.available === 'true') {
          row.classList.add('available');
        } else {
          row.classList.add('unavailable');
        }
      }

      if (cellText === 'm') {
        row.classList.add('male');
      } else if (cellText === 'f') {
        row.classList.add('female');
      }

      if (Number(cellText) < 18) {
        row.style.textDecoration = 'line-through';
      }
    }
  }
}
