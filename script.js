function insert_Row() {
    let table = document.getElementById("sampleTable");
  
    let newRow = table.insertRow(0);

	let cell1 = newRow.insertcell(0);
	let cell2 = newRow.insertcell(1);

	cell1.innerHTML = "New cell1";
	cell2.innerHTML = "New cell2"
}
