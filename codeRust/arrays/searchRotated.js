/**
 * General approach is just like binary search.
 * Check the middle of the array.
 * One half of the array will be sorted and the other half will be unsorted.
 * If it's in the sorted half of the array go that way and you have normal binary search
 * Otherwise go to the other half of the array and check again
 */


const searchRotated = arr => {
  
}

const rotatedArr = [123, 155, 177, 195, 200, 1, 2, 3, 5, 8, 9, 19]
const result = searchRotated(rotatedArr)
console.log(result)