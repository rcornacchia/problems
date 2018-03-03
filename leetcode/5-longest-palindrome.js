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
  s.split('').map((l, index) => {
    if (!l) return 0;
    let curr = l, j = i = index
    if (s[i+1] == l) {
      curr += s [i + 1]
      j = i + 1
    }
    while (i-1 >= 0 && j+1 <= s.length-1 && s[i-1] == s[j+1]) {
      curr = s[i-1] + curr + s[j+1]
      i -= 1
      j += 1
    }
    if (curr.length > longest.length) {
      longest = curr
    }
    // also check to see if we assume that the palindrome is odd, only if the previous check was even
    curr = l
    j = i = index
    while (i-1 >= 0 && j+1 <= s.length-1 && s[i-1] == s[j+1] && curr.length % 2 != 0) {
      curr = s[i-1] + curr + s[j+1]
      i -= 1
      j += 1
    }
    if (curr.length > longest.length) {
      longest = curr
    }
  })
  return longest
}

console.log(findPalindrome('eeeeeeeee'))