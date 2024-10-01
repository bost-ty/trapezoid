const btnCalc = document.getElementById("calculate");

btnCalc.addEventListener("click", function () {
	const info = document.getElementById("info");
	const output = document.getElementById("output");
	const long = document.getElementById("long-base").value;
	const short = document.getElementById("short-base").value;
	const height = document.getElementById("height").value;

	let newBase = (long - short) / 2;
	let legLength = Math.sqrt(Math.pow(newBase, 2) + Math.pow(height, 2));
	if (legLength != 0) {
		output.value = legLength;
	}

	if (newBase == height && long != 0 && short != 0 && height != 0) {
		info.textContent = `This will have a perfect 45 degree angle on each leg.`;
	} else if (newBase != height && long != 0 && short != 0 && height != 0) {
		info.textContent = `This will not have a perfect 45 degree angle on each leg. To achieve this, (long base - short base / 2) must be equal to your desired height.`;
	} else if (long == 0 || short == 0 || height == 0) {
		info.textContent = `Please fill out all three fields above.`;
	}
});
