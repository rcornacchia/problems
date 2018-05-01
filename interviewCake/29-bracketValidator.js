// solved April 29, 2018
// duration: 9min and 9sec

// Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.
// "{ [ ] ( ) }" should return true
// "{ [ ( ] ) }" should return false
// "{ [ }" should return false

const bracketValidator = str => {
  let stack = []

  for (let i=0; i<str.length; i++) {
    let char = str[i]
    switch (char) {
      case '{':
      case '[':
      case '(':
        stack.push(char)
        break
      case '}':
      case ']':
      case ')':
        let openingChar = stack.pop()
        if (!match(openingChar, char)) {
          return false
        }
        break
      default:
        break
    }
  }
  return (!stack.length)
}

const match = (openingChar, char) => {
  if (char == ')') return openingChar == '('
  if (char == ']') return openingChar == '['
  if (char == '}') return openingChar == '{'
}

console.log(bracketValidator("{ [ ] ( ) }"))
console.log(bracketValidator("{ [ ( ] ) }"))
console.log(bracketValidator("{ [ }"))