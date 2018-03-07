/**
 * Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
 * For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
 * the contiguous subarray [4,-1,2,1] has the largest sum = 6.
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let i = 0
  let max = curr = nums[i]
  
  while (i < nums.length && nums[i] < 0) {
      curr = nums[i++]
      if (curr > max) max = curr
      if (i == nums.length) return max
  }
  
  curr = 0

  while (i < nums.length) {
      let next = nums[i++]

      if (next >= 0) curr += next
      else {
          if ((curr + next) >= 0) curr += next
          else {
              if (curr > max) max = curr
              curr = 0
          }
      }
      
      if (curr > max) max = curr
  }
  
  return max
};