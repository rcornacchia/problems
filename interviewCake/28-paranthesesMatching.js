// "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."
// Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, 
// finds the corresponding closing parenthesis.
// Example: if the example string above is input with the number 10 (position of the first parenthesis), 
// the output should be 79 (position of the last parenthesis).

const findMatching = (str, i) => {
  if (!str || !i || str[i] !== '(') throw new Error('Invalid input')
  let counter = 1
  for (let j=i+1; j < str.length; j++) {
    if (str[j] == '(') counter++
    if (str[j] == ')') counter--
    if (!counter) return j
  }
  return false
}

console.log(findMatching("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.", 10))