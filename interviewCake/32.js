// sort an array of scores from 0-100 in O(n)
// use counting sort to create new array for each number 0-100 and fill with 0's
// everytime you see a number increment that index in the new array
const countingSort = arr => {
  const counts = Array(101).fill(0)

  arr.forEach(num => {
    counts[num]++
  })

  let result = []
  counts.map((num, i) => {
    let count = num
    while (count > 0) {
      result.push(i)
      count--
    }
  })

  console.log(result)
  return result
}

countingSort([37, 89, 41, 65, 91, 53])
countingSort([37, 37, 100, 100, 89, 41, 65, 91, 53])