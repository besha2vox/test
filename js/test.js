function foo(array) {
	for (let i = 0; i < array.length; i += 1) {
		array[i] *= 2;
	}
}
const numbers = [1, 2, 3, 4, 5];
foo(numbers);
console.log(numbers);
