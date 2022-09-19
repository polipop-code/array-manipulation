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
