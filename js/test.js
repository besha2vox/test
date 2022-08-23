const words = [];

for (let i = 0; i > -1; i += 1) {
	let word = prompt('Введи слово! \nДля завершения нажми "Cancel".');
	let number = Number(word);
	if (word === null) {
		break;
	} else if (!isNaN(number)) {
		continue;
	} else if (words.includes(word.toLocaleLowerCase())) {
		continue;
	} else {
		words.push(word.toLocaleLowerCase());
		words.sort();
		console.log(i, words);
	}
}
console.log(words);
