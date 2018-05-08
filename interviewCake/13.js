const findFirstWord = words => {
  if (!words) throw new Error ('No words provided.')
  let start = 0
  let end = words.length-1
  while (start <= end) {
    // find mid
    let mid = Math.floor((end - start)/2)

    if (mid == 0 || words[mid][0] < words[mid-1][0]) return words[mid]
    // compare mid with the first letter of the starting word
    let first = words[start][0]
    // starting word is less, go left, otherwise go right
    if (words[mid][0] > start) {
      end = mid-1
    } else {
      start = mid+1
    }
  }
}

const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',  // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
]

console.log(findFirstWord(words))