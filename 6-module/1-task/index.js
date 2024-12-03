export default class UserTable {
  elem = null;

  constructor(rows) {
    this.rows = rows;
    this.createTable();
    this.fillTable();
  }

  createTable() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    const headers = ["Имя", "Возраст", "Зарплата", "Город"];

    headers.forEach((header) => {
      const th = document.createElement("th");
      th.textContent = header;
      tr.appendChild(th);
    });

    thead.appendChild(tr);
    table.appendChild(thead);
    table.appendChild(tbody);

    this.elem = table;
  }

  fillTable() {
    const tbody = this.elem.querySelector("tbody");

    this.rows.forEach((row) => {
      const tr = document.createElement("tr");

      for (const key in row) {
        const td = document.createElement('td');
        td.textContent = row[key];
        tr.appendChild(td);
      }

      const deleteBtnTd = document.createElement('td');
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = 'X';

      deleteBtn.addEventListener("click", () => {
        tbody.removeChild(tr);
      });
      deleteBtnTd.appendChild(deleteBtn);
      tr.appendChild(deleteBtnTd);

      tbody.appendChild(tr);
    });
  }
}
