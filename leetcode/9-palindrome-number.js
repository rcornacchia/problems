// Determine whether an integer is a palindrome. Do this without extra space.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let s = x.toString();
  let start = 0, end = s.length-1;
  
  while (start <= end) {
      if (s[start] != s[end]) return false;
      start += 1;
      end -= 1;
  }
  
  return true;
};

for (i = 0, j = 10; i < 5 && j > 5; i++, j--) {
  console.log(`I: ${i}`);
  console.log(`J: ${j}`);
}
