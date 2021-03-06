//Imagine a game (like baseball) where a player can score 1,2 or 4 runs.
// Given a score "n", find the total number of ways score "n" can be reached.

// store all sets as keys in an object with the value being the current sum
// iterate through all object and add 1, 2, and 4 if the sum is below n
// recurse and go again until all sets equal n
// let numberOfScores = n => {
//   let runs = [1, 2, 4]
//   let cache = []
//   let result = []
//   runs.map(run => {
//     if (run == n) {
//       result.push([run])
//     }
//     if (run < n) {
//       cache.push([run])
//     }
//   })
//   console.log(cache)
//   return numberOfScoresRec(n, cache, runs, result)
// }

// let numberOfScoresRec = (n, cache, runs, result) => {
//   console.log(cache)
//   console.log(result)
//   if (!cache.length) return result
//   let newCache = []
//   cache.map(scores => {
//     console.log(scores)
//     let score = scores.reduce((acc, el) => acc + el)
//     runs.map(run => {
//       let newScore = score + run
//       let newScores = scores.push(run)
//       if (newScore == n) {
//         result.push(newScores)
//       }
//       if (newScore < n) {
//         newCache.push(newScores)
//       } else if (score < n) {
//         newCache.push(scores)
//       }
//     })
//   })

//   return numberOfScoresRec(n, newCache, runs, result)
// }

const numberOfScores = score => {
  let runs = [1, 2, 4]
  let stack = []
  let result = new Set()
  runs.map(run => {
    if (run == score) result.add([run])
    if (run < score) {
      stack.push({
        scores: [run],
        total: run
      })
    }
  })

  while (stack.length) {
    let { scores, total } = stack.pop()
    runs.map(run => {
      let newScores = [...scores, run]
      console.log(newScores)
      if (total+run == score && !result.has(newScores)) result.add(newScores)
      if (total+run <= score) stack.push({
        scores: newScores,
        total: total+run
      })
    })
  }
  return result
}

console.log(numberOfScores(3))
console.log(numberOfScores(5))