/*
Tienes un array de productos con los siguientes atributos:

name
price
stock
Debes agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base.

Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de $1000 el resultado de los "taxes" será $190, debes tener en cuenta que como resultado se debe dejar un valor entero sin decimales.
*/

function solution(array) {
	let result = array.map(function (item) {
		return {
			...item,
			// taxes: Math.trunc(item.price * 0.19),
			taxes: item.price * 0.19,
		};
	});
	// console.log(result);
	return result;
}

solution([
	{
		name: "Product 1",
		price: 1000,
		stock: 10,
	},
	{
		name: "Product 2",
		price: 2000,
		stock: 20,
	},
]);
