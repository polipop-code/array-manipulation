const letters = ["a", "b", "c", "d", "e"];

let newArray = letters.map((item) => item + "++");

console.log(letters);
console.log(newArray);

// Ejercicio
/*
Debes agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base.

Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de $1000 el resultado de los "taxes" será $190, debes tener en cuenta que como resultado se debe dejar un valor entero sin decimales.
*/
function solution(array) {
	// Tu código aquí 👈
	return array.map((item) => {
		return {
			...item,
			taxes: Math.trunc(item.price * 0.19),
		};
	});
}

// Map Reloaded
const orders = [
	{
		customerName: "Nicolas",
		total: 60,
		delivered: true,
	},
	{
		customerName: "Zulema",
		total: 120,
		delivered: false,
	},
	{
		customerName: "Santiago",
		total: 180,
		delivered: true,
	},
	{
		customerName: "Valentina",
		total: 240,
		delivered: true,
	},
];

// Get a single element from an objects array
const totalOrders = orders.map((item) => item.total);
console.log(totalOrders);

// Add an extra element to an objects aray, add taxes
const taxes = orders.map((item) => {
	return {
		...item,
		tax: item.total * 0.19,
	};
});

console.log(orders);
console.log(taxes);

// Deliveed orders, with filter
const delivered = orders.filter((item) => item.delivered && item.total >= 100);
console.log(delivered);

// Searcher
const search = (query) => {
	return orders.filter((item) => item.customerName.includes(query));
};

console.log(search("Nico"));
