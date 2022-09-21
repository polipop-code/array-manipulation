// Clasic
const words = ["spray", "elites", "limit", "apple", "exuberant"];
const newWords = [];

for (let i = 0; i < words.length; i++) {
	const word = words[i];
	if (word.length >= 6) {
		newWords.push(word);
	}
}

console.log(newWords); // [ 'elites', 'exuberant' ]

// With filter
// long way
function solution(array) {
	let result = array.filter((word) => {
		// is "if" necessary?
		return word.length >= 6;
	});
	console.log(result);
	return result;
}

solution(["spray", "elites", "limit", "apple", "exuberant"]);

// short way
const shSolution = words.filter((item) => item.length >= 6);
console.log(shSolution);
