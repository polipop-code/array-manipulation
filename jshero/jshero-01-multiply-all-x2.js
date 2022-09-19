/*
En este desafío tienes un array de números, usando la función map debes retornar todos los números del array multiplicados por dos.

La solución debería tener un input y output como los siguientes:

Input

solution([2, 4, 5, 6]);

Output

[4,8,10,12]
*/

function solution(Array) {
	let result = Array.map(function (number) {
		return number * 2;
	});
	// console.log(result);
	return result;
}

solution([1, 2, 3, 4, 5]);

// Tip: use flat arrow functions -----
/*
// Traditional Anonymous Function
(function (a) {
	return a + 100;
});

// Arrow Function Break Down

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
	return a + 100;
};

// 2. Remove the body braces and word "return" — the return is implied.
(a) => a + 100;

// 3. Remove the argument parentheses
(a) => a + 100;
*/
