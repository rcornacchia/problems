// merge time intervals

// if no intervals throw new error
// sort intervals by start time
// add first interval on to a result stack
// for each interval, check if start time is less than the end time of the interval on top of the stack
// if current start is less than or equal to end at top of stack, pop and then add the max end time
// if current start time is greater, simply push onto the stack (no overlap)

const merge = intervals => {
  if (!intervals || !intervals.length) throw new Error('No intervals given.')

  intervals.sort((a, b) => a.startTime - b.startTime)
  let result = [intervals.shift()]

  while (intervals.length) {
    let curr = intervals.shift()
    let top = result[result.length-1]
    if (curr.startTime > top.endTime) {
      // no overlap
      result.push(curr)
    } else {
      // there is an overlap take the minimum start time and the max endTime
      let startTime = Math.min(curr.startTime, top.startTime)
      let endTime = Math.max(curr.endTime, top.endTime)
      result.pop()
      result.push({
        startTime,
        endTime
      })
    }
  }

  console.log(result)
  return result
}


merge([
  {startTime: 0,  endTime: 1},
  {startTime: 1,  endTime: 2},
  {startTime: 3,  endTime: 5},
  {startTime: 4,  endTime: 8},
  {startTime: 5,  endTime: 7},
  {startTime: 10, endTime: 12},
  {startTime: 9,  endTime: 10},
])

merge([
  {startTime: 1, endTime: 10},
  {startTime: 2, endTime: 6},
  {startTime: 3, endTime: 5},
  {startTime: 7, endTime: 9},
])