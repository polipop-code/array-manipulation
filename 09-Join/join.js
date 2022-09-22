// Clasic
const elements = ["hola", "como", "estas"];

let acumulator = "";
const separator = "/";
for (let i = 0; i < elements.length; i++) {
	const element = elements[i] ?? "";
	if (i !== elements.length - 1) {
		acumulator += element + separator;
	} else {
		acumulator += element;
	}
}

console.log(acumulator); // 'hola//como/estas'

// With join
console.log(elements.join("--"));

// Split a string
const title = "Curso de manipulación de arrays";
console.log(title.split(" ").join("-").toLocaleLowerCase());
