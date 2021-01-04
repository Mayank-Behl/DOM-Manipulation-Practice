function insert_Row(){
    const addRow = document.querySelector("#sampleTable");
    let row = addRow.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.textContent = "NEW CELL!";
    cell2.textContent = "NEW CELL!!!!";
}