// Clasic
const numbersC = [1, 2, 3, 5];

let respuestaC = false;
for (let i = 0; i < numbersC.length; i++) {
	const element = numbersC[i];
	if (element % 2 === 0) {
		respuestaC = true;
		break;
	}
}

console.log(respuestaC); // true

// With some
const numbers = [1, 2, 3, 5];

const respuesta = numbers.some((item) => item % 2 === 0);
console.log(respuesta); // true

// Is delivered?
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

const delivered = orders.some((item) => item.delivered);
console.log(delivered);

// Dates
const dates = [
	{
		startDate: new Date(2021, 1, 1, 10),
		endDate: new Date(2021, 1, 1, 11),
		title: "Cita de trabajo",
	},
	{
		startDate: new Date(2021, 1, 1, 15),
		endDate: new Date(2021, 1, 1, 15, 30),
		title: "Cita con mi jefe",
	},
	{
		startDate: new Date(2021, 1, 1, 20),
		endDate: new Date(2021, 1, 1, 21),
		title: "Cena",
	},
];

const newAppointment = {
	/*
	startDate: new Date(2021, 1, 1, 10),
	endDate: new Date(2021, 1, 1, 11),
    */
	startDate: new Date(2021, 1, 1, 8),
	endDate: new Date(2021, 1, 1, 9, 30),
};

const areIntervalsOverlapping = require("date-fns/areIntervalsOverlapping");

const isOverlap = (newDate) => {
	return dates.some((date) => {
		return areIntervalsOverlapping(
			{
				start: date.startDate,
				end: date.endDate,
			},
			{
				start: newDate.startDate,
				end: newDate.endDate,
			}
		);
	});
};

console.log("isOverlap? ", isOverlap(newAppointment));
