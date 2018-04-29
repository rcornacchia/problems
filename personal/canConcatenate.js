/*
Given a set of strings, e.g. {“one”, “cat”, “two”, “four”, "eat"}, and a target string, e.g. “fouroneone”, return true if the target string is composed (by concatenation) of elements from the set.     
“fouroneone” -> true
“onecat” -> true
“fouron” -> false
“twone” -> false
*/
// empty return true
// dictionary is never empty

// "oneat" -> false

// if input is empty return true
// linear scan through input string
// if current substring is a word in the dictionary
  // if current index is the last element in the input string, return true
  // if adding the next letter also forms a word recurse with both options
  // else simply add the current substring and recurse with the remaining substring
// return false


const canConcatenate = (dict, str) => {
  console.log(str)
  if (!str) return true

  for (let i=0; i < str.length; i++) {
    let curr = str.substring(0, i+1)
    console.log(`STRING: ${str}\nCURR: ${curr}\n`)

    if (dict.has(curr)) {
      if (i == str.length-1) return true
      let res = canConcatenate(dict, str.substring(i+1))
      if (res) return true
    }
  }

  return false
}

console.log(canConcatenate(new Set(["on","one", "cat", "two", "four", "eat"]), "fouroneone"))
// console.log(canConcatenate(new Set(["on","one", "cat", "two", "four", "eat"]), "twone"))
// console.log(canConcatenate(new Set(["one", "cat", "two", "four", "eat"]), "fouron"))
