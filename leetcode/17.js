// for each number find all letters that could be that num
// recurse with that letter as the starting point + findNums(str-letter)
// base case occurs when str is one digit long
const mapping = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
}

const findNumsRec = (str, result) => {
  if (!str) return result
  let first = str[0]
  let letters = mapping[first]
  let newResult = []
  for (let i=0; i<result.length; i++) {
    let curr = result[i]
    for (let j=0; j<letters.length; j++) {
      newResult.push(curr+letters[j])
    }
  }

  let remaining = str.substring(1)
  return findNumsRec(remaining, newResult)
}

const findNums = str => {
  if (!str) return
  let first = str[0]
  let remaining = str.substring(1)
  let letters = mapping[first]
  let result = []

  for (let i=0; i<letters.length; i++) {
    result.push(letters[i])
  }
  return findNumsRec(remaining, result)
}

console.log(findNums('2343'))