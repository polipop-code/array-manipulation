// Clasic
const pets = ["cat", "dog", "bat"];

let includeInArray = false;
for (let i = 0; i < pets.length; i++) {
	const item = pets[i];
	if (item === "cat") {
		includeInArray = true;
		break;
	}
}

console.log(includeInArray); // true

// With includes
const response = pets.includes("dog");
console.log(response);
