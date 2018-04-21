const mergeIntervals = intervals => {
  let lo = intervals[0].start
  let hi = intervals[0].end
  let result = []

  for (let i=1; i < intervals.length; i++) {
    if (intervals[i].start <= hi) {
      hi = Math.max(intervals[i].end, hi)
    } else {
      result.push([lo, hi])
      lo = intervals[i].start
      hi = intervals[i].end
    }
    if (i == intervals.length-1) {
      let [start, end] = result[result.length-1]
      if (start != lo) result.push([lo, hi])
    }
  }
  return result
}

console.log(mergeIntervals([
  {
    start: 1,
    end: 5
  },
  {
    start: 3,
    end: 7
  },
  {
    start: 6,
    end: 8
  },
  {
    start: 10,
    end: 12
  },
  {
    start: 11,
    end: 15
  }
]))