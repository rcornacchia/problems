const quicksort = arr => {
  // pick a pivot
  // partition the array as numbers less than or greater than/equal to the pivot
  // recursively call quicksort on the two partitions

  if (!arr || arr.length < 2) return arr

  // picking the first element as the pivot (could also use random)
  const pivot = arr.pop()
  let { partition1, partition2 } = partition(arr, pivot)
  return [].concat(quicksort(partition1), pivot, quicksort(partition2))
}

const partition = (arr, pivot) => {
  let partition1 = []
  let partition2 = []
  arr.map(num => (num < pivot) ? partition1.push(num) : partition2.push(num))

  return { partition1, partition2 }
}

console.log(quicksort([55, 23, 26, 2, 25]))