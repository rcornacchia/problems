const mergeAndSortIntervals = arr => {
  const stack = []
  let sorted = arr.sort((a, b) => {
    if (a[0] == b[0]) return a[1] - b[1]
    return a[0] - b[0]
  })
  stack.push(sorted.shift())

  while (sorted.length) {
    let [topStart, topEnd] = stack[stack.length-1]
    let [start, end] = sorted.shift()
    if (start > topEnd) {
      // no overlap
      stack.push([start, end])
    } else if (start <= topEnd) {
      let e = Math.max(end, topEnd)
      stack.pop()
      stack.push([topStart, e])
    }
  }

  console.log(stack)
  return stack
}

const intervals = [[33, 35], [1, 2], [3, 5], [4, 6], [7, 12], [8, 9], [10, 11], [11, 15], [22, 25], [22, 24]]
console.log(mergeAndSortIntervals(intervals))