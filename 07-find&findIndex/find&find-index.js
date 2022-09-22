// Clasic
const numbers = [1, 30, 41, 29, 50, 60];

let respuesta = undefined;
for (let i = 0; i < numbers.length; i++) {
	const element = numbers[i];
	if (element >= 40) {
		respuesta = element;
		break;
	}
}

console.log(respuesta); // 41

// With find

const response = numbers.find((item) => item === 30);
console.log("find", response);

// Products
const products = [
	{
		name: "Pizza",
		price: 12,
		id: "🍕",
	},
	{
		name: "Burger",
		price: 23,
		id: "🍔",
	},
	{
		name: "Hot dog",
		price: 34,
		id: "🌭",
	},
	{
		name: "Hot cakes",
		price: 355,
		id: "🥞",
	},
];

const result = products.find((item) => item.id === "🍔");
console.log(result);

// Find index
const resultPrecise = products.findIndex((item) => item.id === "🍔");
console.log(resultPrecise);
