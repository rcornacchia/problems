const patternMatch = (str, pattern) => {
  if (!str && !pattern) return true
  if (!str || !pattern) return false

  let firstLetter = str[0]
  let patternLetter = pattern[0]
  let hasStar = (pattern[1] == '*')
  let patternLetterIsDot = (patternLetter == '.')

  if (!hasStar && firstLetter == patternLetter) {
    return patternMatch(str.substring(1), pattern.substring(1))
  }

  if (!hasStar && firstLetter != patternLetter && patternLetterIsDot) {
    return patternMatch(str.substring(1), pattern.substring(1))
  }

  if (!hasStar && firstLetter != patternLetter && !patternLetterIsDot) {
    return false
  }

  if (hasStar) {
    if (patternLetterIsDot || firstLetter == patternLetter) {
      return patternMatch(str.substring(1), pattern) || patternMatch(str.substring(1), pattern.substring(2))
    }

    if (firstLetter != patternLetter) {
      return patternMatch(str, pattern.substring(2))
    }
  }
}

console.log(patternMatch('aabbbbbcdda', 'a*bb*cdda'))
console.log(patternMatch('aabbbbbcdda', 'a*bb*.dda'))
console.log(patternMatch('aabbbbbcdda', 'aab*e*cd*a'))
console.log(patternMatch('aabbbbbcdda', 'a*b*c*d*a*'))
console.log(patternMatch('aabbbbbcdda', '.*b*c*d*a*'))
console.log(patternMatch('aabbbbbcdda', 'aabbbbbcdda'))
console.log(patternMatch('aabbbbbcdda', 'aabbbbbcdd'))
console.log(patternMatch('aabbbbbcdda', 'a*b*c*da'))
console.log(patternMatch('aabbbbbcdda', 'a*b*c*.*'))