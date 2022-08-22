function getEvenNumbers(start, end) {
	let number = [];

	for (let i = start; i <= end; i += 2) {
		if (i % 2 === 0) {
			number.push(i);
		}
		if (i % 2 === 1 && i < end) {
			number.push(i + 1);
		}
	}

	console.log(number);
	return number;
}

getEvenNumbers(2, 5);
getEvenNumbers(3, 11);
getEvenNumbers(6, 12);
getEvenNumbers(8, 8);
getEvenNumbers(7, 53);
getEvenNumbers(1, 17);
getEvenNumbers(20, 25);
getEvenNumbers(15, 190);
getEvenNumbers(34, 3e4);
