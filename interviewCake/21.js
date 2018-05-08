// find unique integer in array filled with duplicates and one unique integer
const findUnique = arr => {
  let set = new Set()
  arr.map(num => {
    (!set.has(num)) ? set.add(num) : set.delete(num)
  })
  if (set.size != 1) throw new Error('There was not only one unique integer')
  let iterator = set.values()
  return iterator.next().value
}

// answer is actually to use xor
// because when you xor a number by the same number twice you get 0
// so in this case if you xor every number of the array, you'll be left
// with the unique number
const findUniqueXor = arr => {
  if (!arr) throw new Error()

  let x = 0

  arr.forEach(num => {
    x ^= num
  })

  return x
}

console.log(findUniqueXor([1, 5, 4, 3, 2, 1, 5, 4, 3]))