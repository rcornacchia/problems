const findVolume = arr => {
  let i = 0
  let volume = 0
  let intervals = {}
  let result = {}

  while (i < arr.length) {
    if (!Object.keys(intervals).length) {
      intervals[i] = { index: i, water: [] }
    } else {
      console.log(intervals)
      console.log(result)
      let newIntervals = Object.assign({}, intervals.sort)
      Object.keys(newIntervals).sort().map(key => {
        if (arr[i] < key) newIntervals[key].water.push(arr[i])
        else {
          // remove key from interval and calculate the water betwen
          let shorterWall = Math.min(key, arr[i])
          let start = intervals[key].index
          let water = intervals[key].water.reduce((acc, el) => (acc + shorterWall-el, 0))
          let interval = [start, i]
          delete intervals[key]
          
          // add that interval and water to result, replacing any overlapping interval
          Object.keys(Object.assign({}, result)).map(([s, e]) => {
            if (s > start) {
              delete result[[s, e]]
            }
          })
          result[interval] = water

          // reinsert to intervals
          intervals[i] = { index: i, water: [] }
        }
      })
    }
    i++
  }
  // aggregate all values in result
  return Object.values(result).reduce((acc, el) => acc + el, 0)
}

console.log(findVolume([1,3,2,4,1,3,1,4,5,2,2,1,4,2,2]))

// https://techdevguide.withgoogle.com/resources/volume-of-water/?types=coding-interview-question#!