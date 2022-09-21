// Clasic
const numbers = [5, 4, 8, 6, 2];
let suma = 0;

for (let i = 0; i < numbers.length; i++) {
	const number = numbers[i];
	// suma = suma + number ** 2;
	suma = suma + number;
}

console.log(suma); // 145

// With reduce
const result = numbers.reduce((suma, item) => suma + item, 0);
console.log(result);
