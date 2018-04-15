/**
 * Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0?
 * Find all unique triplets in the array which gives the sum of zero.
 * Note: The solution set must not contain duplicate triplets.
    For example, given array S = [-1, 0, 1, 2, -1, -4],

    A solution set is:
    [
      [-1, 0, 1],
      [-1, -1, 2]
    ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let result = {};
  let num = nums.sort((a, b) => a-b);
  for (let i=0; i < num.length; i++) {
      let lo = i+1;
      let hi = num.length-1;
      let sum = 0-num[i];
      while (lo < hi) {
          if (num[lo] + num[hi] == sum) {
              let triplet = [num[lo], num[hi], num[i]].sort();
              result[triplet] = triplet;
              lo++;
              hi--;
          } else if (num[lo] + num[hi] < sum) lo++;
          else hi--;
      }
  }
  return Object.values(result);
};