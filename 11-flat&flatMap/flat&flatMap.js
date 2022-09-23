// Clasic
const matiz = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

const flatArray = [];

for (let i = 0; i < matiz.length; i++) {
	const array = matiz[i];
	for (let j = 0; j < array.length; j++) {
		flatArray.push(matiz[i][j]);
	}
}

console.log(flatArray);
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// Flat
const array = [1, 2, [3, 4], 5, 6];
const result = array.flat();
console.log(
	"un nivel",
	result // [1,2,3,4,5,6]
);

const array2 = [1, 2, [3, 4, [5, 6]]];
const result2 = array2.flat();
console.log(
	"dos niveles",
	result2 // [1, 2, 3, 4, [5, 6]]
);

const array3 = [1, 2, [3, 4, [5, 6]]];
const result3 = array3.flat(2);
console.log(
	"dos niveles más",
	result3 // [1, 2, 3, 4, 5, 6]
);

const array4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
const result4 = array4.flat(Infinity);
console.log(
	"niveles infinitos",
	result4 // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
);
