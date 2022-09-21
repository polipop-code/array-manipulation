/*
Tienes un array con palabras, tu desafío es retornar un array solo con las que cumplan con la condición de tener 4 o más letras.
*/

function solution(array) {
	let result = array.forEach((element) => {
		if (element.lenght >= 4) {
			return element;
		}
	});
	console.log(result);
	return result;
}

solution(["amor", "sol", "piedra", "día"]);
