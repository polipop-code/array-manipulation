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

// Reduce erloaded
const items = [5, 6, 7, 6, 5, 7, 7, 8];

const solution = items.reduce((obj, item) => {
	if (!obj[item]) {
		obj[item] = 1;
	} else {
		obj[item] = obj[item] + 1;
	}
	return obj;
}, {});

console.log(solution);

// Levels
const data = [
	{
		name: "Nicolas",
		level: "low",
	},
	{
		name: "Andrea",
		level: "medium",
	},
	{
		name: "Zulema",
		level: "hight",
	},
	{
		name: "Santiago",
		level: "low",
	},
	{
		name: "Valentina",
		level: "medium",
	},
	{
		name: "Lucia",
		level: "hight",
	},
];

const levelsSolution = data
	.map((item) => item.level)
	.reduce((obj, item) => {
		if (!obj[item]) {
			obj[item] = 1;
		} else {
			obj[item] = obj[item] + 1;
		}
		return obj;
	}, {});

console.log(levelsSolution);

// Challenge reduce rerload
const num = [1, 25, 16, 8, 5, 7, 36, 24, 14, 3, 1, 12, 20, 21];

const datos = num.reduce(
	(obj, item) => {
		if (item < 6) obj["1-5"] += 1;
		else if (item < 9) obj["6-8"] += 1;
		else obj[">= 9"] += 1;
		return obj;
	},
	{ "1-5": 0, "6-8": 0, ">= 9": 0 }
);

console.log(datos);
