const merge = (arr1, arr2) => {
  let one = 0
  let two = 0
  let result = []

  while (one < arr1.length || two < arr2.length) {
    if (arr1[one] < arr2[two] || two == arr2.length) {
      result.push(arr1[one++])
    } else if (arr1[one] > arr2[two] || one == arr1.length) {
      result.push(arr2[two++])
    }
  }
  return result
}

const arr1 = [3, 4, 6, 10, 11, 15];
const arr2 = [1, 5, 8, 12, 14, 19];

console.log(merge(arr1, arr2))