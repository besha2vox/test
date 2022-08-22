const words = [];

for (let i = 0; i > -1; i += 1) {
	let word = prompt('Введи слово! \nДля завершения нажми "Cancel".').toLowerCase();
	let number = Number(word);
	if (words.includes(word)) {
		continue;
	} else if (!isNaN(number)) {
		continue;
	} else if (word === null) {
		break;
	} else {
		words.push(word);
		words.sort();
	}
}
console.log(words);
