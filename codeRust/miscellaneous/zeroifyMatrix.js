let matrix = [
  [5, 4, 3, 9],
  [2, 0, 7, 6],
  [1, 3, 4, 0],
  [9, 8, 3, 4]
]

function zeroify(m) {
  let zeros = {
      rows: {},
      cols: {}
  }

  m.map((row, i) => {
      row.map((space, j) => {
          if (space == 0) {
              zeros.rows[i] = 1
              zeros.cols[j] = 1
          }
      }) 
  })

  let result = m.map((row, i) => {
      return row.map((space, j) => {
          if (zeros.rows[i] || zeros.cols[j] && space != 0) {
              return 0
          }
          return space
      }) 
  })

  result.map(row => console.log(row))
}

zeroify(matrix)