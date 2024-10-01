const btnCalc = document.getElementById("calculate");

btnCalc.addEventListener("click", function () {
	const info = document.getElementById("info");
	const output = document.getElementById("output");
	const long = Number.parseFloat(document.getElementById("long-base").value);
	const short = Number.parseFloat(
		document.getElementById("short-base").value
	);
	const height = Number.parseFloat(document.getElementById("height").value);

	let newBase = (long - short) / 2;
	let legLength = Math.sqrt(Math.pow(newBase, 2) + Math.pow(height, 2));
	if (legLength != 0) {
		output.value = legLength;
	}

	if (newBase == height && long != 0 && short != 0 && height != 0) {
		info.textContent = `These measurements will have a perfect 45 degree angle for each leg.`;
	} else if (newBase != height && long != 0 && short != 0 && height != 0) {
		info.textContent = `For a perfect 45 degree angle for each leg, your desired height would need to be ${
			(long - short) / 2
		}. If that's the height you want, your long side should be ${
			2 * height + short
		}.`;
	} else if (long == 0 || short == 0 || height == 0) {
		info.textContent = `Please fill out all three fields above.`;
	}
});
