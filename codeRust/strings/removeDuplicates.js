const removeDuplicates = s => {
  let res = ""
  let set = new Set()

  s.split("").map(letter => {
    if (!set.has(letter)) {
      set.add(letter)
      res += letter
    }
  })

  return res
}

console.log(removeDuplicates("abbabcddbabcdeedebc"))