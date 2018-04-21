const moveZerosLeft = arr => {
  let read = arr.length-1
  let write = arr.length-1
  while (read >= 0) {
    if (arr[read] != 0 && read != write) {
      swap(arr, read, write)
      write--
    }
    read--
  }
  return arr
}

const swap = (arr, pos1, pos2) => {
  let temp = arr[pos2]
  arr[pos2] = arr[pos1]
  arr[pos1] = temp
}

console.log(moveZerosLeft([10, 7, 0, 3, 0]))
console.log(moveZerosLeft([1, 10, 20, 0, 59, 63, 0, 88, 0]))