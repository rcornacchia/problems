const checkCycle = words => {
  let result = true
  let v = {
    start: {},
    end: {}
  }

  words.map(word => {
    if (!word) return
    let first = word[0]
    let last = word[word.length-1]

    if (!v.start[first]) { v.start[first] = [word] } 
    else { v.start[first].push(word) }
    
    if (!v.end[last]) { v.end[last] = [word] }
    else v.end[last].push(word)
  })

  if (Object.keys(v.start).sort().join("") != Object.keys(v.end).sort().join("")) return false

  let res = Object.keys(v.start).map(key => {
    let word = v.start[key].length && v.start[key].pop()
    let endWord = v.end[word[0]].length && v.end[word[0]].pop()
    return word && endWord
  })

  return !res.find(r => r == false)
}

console.log(checkCycle(["eve", "eat", "ripe", "tear"]))