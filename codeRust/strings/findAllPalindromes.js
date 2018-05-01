function findPalindromes(str) {
  let result = []
  for (let i=0; i < str.length; i++) {
    checkPalindrome(str, result, i-1, i+1) 
    if (str[i+1] && str[i] == str[i+1]) {
      checkPalindrome(str, result, i-1, i+2)
      result.push(str.substring(i, i+2))
    }
  }
  return result
}

function checkPalindrome(str, result, i, j) {
  while (str[i] == str[j] && str[i] && str[j]) {
    result.push(str.substring(i, j+1))
    i--
    j++
  }
}

console.log(findPalindromes('aabbbaa'))