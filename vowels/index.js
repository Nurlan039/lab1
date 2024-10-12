// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function countVowels(input) {
    const vowels = new Set('aeiouAEIOU'); // Use a Set for efficient look-up
    let vowelCount = 0;

    Array.from(input).forEach(char => {
        if (vowels.has(char)) {
            vowelCount++;
        }
    });

    return vowelCount;
}

module.exports = countVowels;
