const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const priceCells = document.querySelectorAll(".prices");
	let total = 0;

	priceCells.forEach(cell => {
		total += Number(cell.textcontent.trim());
	});

	const table = document.querySelector(|"table");


	const totalRow = document.createElement("tr");
	const totalcell = document.createElement("td");

	totalCell.colSpan = 2;

	totalcell.textcontent = "Total Price: " + total;

	totalRow.appendChild(totalcell);
	table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

