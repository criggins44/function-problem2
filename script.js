findTheVowels = (str) => {
	//used arrow function format to define the function

	const vowel = ['a', 'e', 'i', 'o', 'u'];
	//created a variable for the function to use to define a vowel

	let counter = 0
	//created a counter to store the number of vowels as the function iterates through the string

	for (let char of str) {
		if (vowel.includes(char)) {
			counter ++
		}
	}
	/*loops through each character of the accepted string
	  if the array of vowels the character from a string, increase the counter by 1
	  returns the value of the counter when the function is called
	*/
	return counter
}

console.log(findTheVowels('How mamy vowels are in this question?'));