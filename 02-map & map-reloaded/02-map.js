const letters = ["a", "b", "c", "d", "e"];

let newArray = letters.map((item) => item + "++");

console.log(letters);
console.log(newArray);

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
