/*const str = `This is a string`;
let newArray = str.split("");
const vowel = ['a', 'e', 'i', 'o', 'u'];
//console.log(newArray);
let counter = 0;*/

findTheVowels = (str) => {
	//let newArray = str.split("");
	const vowel = ['a', 'e', 'i', 'o', 'u'];
	let counter = 0
	for (let char of str) {
		if (vowel.includes(char)) {
			counter ++
		}
	}
	return counter
}
console.log(findTheVowels('This sentence contains how many vowels. ' + 'Check this too.'));