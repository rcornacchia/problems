/**
 * Given a sorted array of integers, return the low and high index of the given key.
 * Return -1 if not found. The array length can be in millions with lots of duplicates.
 * Ex) given key 5 and array = [1, 2, 5, 5, 5, 8] => return [2, 4]
 */

function findRange(arr, key) {
  if (!arr || !Array.isArray(arr)) return -1
  let index = binarySearch(arr, key)
  if (index < 0) return -1
  let low = high = index
  for (let i = index-1; i >= 0 && arr[i] == key; i--) {
    low = i
  }
  for (let i = index+1; i < arr.length && arr[i] == key; i++) {
    high = i
  }
  return [low, high]
}