// Write a recursive function for generating all permutations of an input string.
// Return them as a set.

// use memoization
// iterate through string and for each letter use as starting letter of word
// recurse with the set and the string minus the letter just used, and the current string
// base case occurs when the length of the string is 1, because ther'es only one set to be made
// in that case just push the current string onto the set (if not already in)
const findPermutationsRec = (str, curr, result) => {
  if (!str.length) return
  if (str.length == 1) {
    let newCurr = str + curr
    result.add(newCurr)
    return
  }

  for (let i=0; i<str.length; i++) {
    let newCurr = curr + str[i]
    let remaining = str.substring(0, i) + str.substring(i+1)
    findPermutationsRec(remaining, newCurr, result)
  }
}

const findPermutations = str => {
  if (!str) return
  const set = new Set()
  findPermutationsRec(str, '', set)
  const result = [...set].sort();
  console.log(result)
  return result
}

findPermutations('aabcd')