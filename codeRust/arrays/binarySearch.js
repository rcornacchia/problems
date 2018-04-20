const binarySearch = (arr, key, lo, hi) => {
  if (!arr.length || (arr.length == 1 && arr[0] != key)) return -1

  let mid = Math.floor((hi+lo)/2)
  if (arr[mid] == key) return mid
  if (arr[mid] < key) return binarySearch(arr, key, mid+1, hi)
  if (arr[mid] > key) return binarySearch(arr, key, 0, mid-1)
}

console.log(binarySearch([4, 7, 8, 9, 19, 25, 299, 399, 400], 400, 0, 8))