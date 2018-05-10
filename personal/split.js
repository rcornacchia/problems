const split = (str, length) => {
  let result = []
  let i = 0
  let lastSpace = null
  let start = 0

  // linear scan through the string
  // when you come across a space, set lastSpace = to the index
  // if you're at the end of the string then add the current string + last letter to result
  // else if you are at the limit, then need to split
    // check if there is a lastSpace, if none then just take last x letters given by length
    // otherwise take the substring from start to lastSpace and set i = lastSpace + 1
    // also reset start to i and current to empty string and lastSpace to null
  while (i < str.length) {
    if (i == str.length-1) {
      result.push(str.substring(start))
    } else if (i - start + 1 == length) {
      if (!lastSpace || str[i] == ' ' || str[i+1] == ' ') {
        result.push(str.substring(start, i+1))
        start = i+1
        if (str[start] == ' ') start++
      } else {
        result.push(str.substring(start, lastSpace))
        start = lastSpace+1
      }
      lastSpace = null
    } else {
      if (str[i] == ' ') lastSpace = i
    }
    i++
  }
  console.log(result)
}

split("Joe is the funniest guy", 6)