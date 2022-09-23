// Clasic
const numbers = [1, 30, 41, 29, 10, 13];

let respuesta = true;
for (let i = 0; i < numbers.length; i++) {
	const element = numbers[i];
	if (element >= 40) {
		respuesta = false;
		break;
	}
}

console.log(respuesta); // false

// With every
const response = numbers.every((item) => item <= 40);
console.log(response);

// Challenge, team
const team = [
	{
		name: "Nicolas",
		age: 12,
	},
	{
		name: "Andrea",
		age: 8,
	},
	{
		name: "Zulema",
		age: 2,
	},
	{
		name: "Santiago",
		age: 18,
	},
];

const joungTeam = team.every((person) => person.age <= 15);
console.log("Only <15?", joungTeam);
