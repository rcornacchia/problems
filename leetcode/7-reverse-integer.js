/*

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output:  321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range.
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let arr = x.toString().split('').reverse();
  console.log(arr)
  while (arr.length && arr[0] == '0') {
      arr.shift();
  }
  console.log(arr)
  
  if (x < 0) {
      arr.pop();
      arr.unshift('-')
  }
  
  let num = parseInt(arr.join('').toString() || 0)
  return (num > 2147483647 || num < -2147483648) ? 0 : num;
};