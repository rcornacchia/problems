// 2[3[a]b] => aaabaaab
// 3[abc]4[ab]c => abcabcabcababababc

// base case: just a string, return the string
// find first number
// make sure adjacent elements aren't continuation of that number
// find first opening bracket
// use counter method to find corresponding closing bracket
// pass that whole thing to a recursive call and repeat the result by the number

const decompress = str => {
  let res = ''
  let i = 0
  let num = ''
  let bracketCount = 0
  let start
  let containsNum = false

  while (i < str.length) {
    if (!isNaN(str[i]) && !bracketCount) {
      num += str[i]
      containsNum = true
    } else if (str[i] == '[') {
      if (!bracketCount) start = i+1
      bracketCount++
    } else if (str[i] == ']') {
      bracketCount--
      if (!bracketCount) {
        res += decompress(str.slice(start, i)).repeat(parseInt(num))
        num = ''
      }
    } else if (!bracketCount) {
      res += str[i]
    }
    i++
  }
  if (!containsNum) return str
  return res
}

let result = decompress('2[3[a]b]')
console.log(result == 'aaabaaab')
let result2 = decompress('3[abc]4[ab]c')
console.log(result2 == 'abcabcabcababababc')