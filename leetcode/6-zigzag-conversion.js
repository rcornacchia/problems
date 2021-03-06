/*
  The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
  (you may want to display this pattern in a fixed font for better legibility)

  P   A   H   N
  A P L S I I G
  Y   I   R
  And then read line by line: "PAHNAPLSIIGYIR"
  Write the code that will take a string and make this conversion given a number of rows:

  string convert(string text, int nRows);
  convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

function zigzag(s, numRows) {
  if (!s || !s.length) return ""
  s = s.split('')
  const matrix = []
  for (let i = 0; i < numRows; i++) {
    matrix.push([])
  }

  while (s.length) {
    let row = 0
    while (row < numRows && s.length) {
      matrix[row].push(s.shift())
      row++
    }

    row = numRows - 2
    while (row > 0) {
      matrix.map((r, i) => {
        let num = (i == row && s.length) ? s.shift() : -1
        r.push(num)
      })
      row--
    }
  }
  return print(matrix)
}

const print = matrix => {
  console.log(matrix)
  let result = ''
  matrix.map(row => {
    row.map(letter => {
      if (letter != -1) {
        result += letter
      }
    })
  })
  return result
}

console.log(zigzag('teststringistesting', 4))
