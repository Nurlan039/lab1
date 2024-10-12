// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {

    let arr = []

    let i = 1
    while (i <= n) {
        let iter = (n - i)
        let tempArr = []
        for (let i = 1; i <= (2 * n - 1); i++) {
            if (i > iter && i <= (2 * n - 1) - iter) {
                tempArr.push('#')   
                continue

            }
            tempArr.push(" ")

        }
        arr.push(tempArr)
        i++;

    }
    arr.forEach(line => console.log(line.join('')));    
    return arr
}


module.exports = pyramid;
