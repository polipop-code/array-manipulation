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

// FlatMap clasic
const users = [
	{ userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
	{ userId: 2, username: "Mike", attributes: ["Lovely"] },
	{ userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];

const response = users.map((user) => user.attributes).flat();
console.log(response);

// Only flatMap
const flatMap = users.flatMap((user) => user.attributes);
console.log(flatMap);

// Challenge
const calendars = {
	primaryCalendar: [
		{
			startDate: new Date(2021, 1, 1, 15),
			endDate: new Date(2021, 1, 1, 15, 30),
			title: "Cita 1",
		},
		{
			startDate: new Date(2021, 1, 1, 17),
			endDate: new Date(2021, 1, 1, 18),
			title: "Cita 2",
		},
	],
	secondaryCalendar: [
		{
			startDate: new Date(2021, 1, 1, 12),
			endDate: new Date(2021, 1, 1, 12, 30),
			title: "Cita 2",
		},
		{
			startDate: new Date(2021, 1, 1, 9),
			endDate: new Date(2021, 1, 1, 10),
			title: "Cita 4",
		},
	],
};

// Solution
const challengeSolution = Object.values(calendars).flat();
const challengeMap = challengeSolution.map((object) => object.startDate);
console.log(challengeMap);
