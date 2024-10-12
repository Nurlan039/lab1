// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    let strArr = n.toString().split('');
    let sign = ''
    if(strArr[0] === '-'){
        sign = '-'
    }
    let reverseNum = Math.abs(n).toString().split('').reverse().join('');
    return parseInt(sign + reverseNum)

}

module.exports = reverseInt;
