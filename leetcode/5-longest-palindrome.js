/*
  STATUS: SOLVED
  Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

  Example)
  Input: "babad"
  Output: "bab"
  Note: "aba" is also a valid answer.

  Input: "cbbd"
  Output: "bb"
*/
function findPalindrome(s) {
  let longest = ''
  s.split('').map((l, i) => {
    if (!l) return 0;
    let str1 = extendAround(i, i, s)
    let str2 = extendAround(i, i+1, s)
    let curr = (str1.length > str2.length) ? str1 : str2
    if (curr.length > longest.length) {
      longest = curr
    }
  })
  return longest
}

const extendAround = (i, j, s) => {
  while (i >= 0 && j < s.length && s[i] == s[j+1]) {
    i -= 1
    j += 1
  }
  return s.substring(i, j+1)
}

console.log(findPalindrome('eeeeeeeee').length)