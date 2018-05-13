/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
    start with empty set and an emtpy array
    push just each number onto result array
    for each number add to every element in the array
*/


var subsets = function(nums) {
  let res = []
  // let set = new Set()
  

  // add empty set
  res.push([])
  // set.add([])
  
  // add each number once
  // for (let i=0; i < nums.length; i++) {
  //     res.push([nums[i]])
  //     set.add([nums[i]])
  // }
  
  for (let i=0; i < nums.length; i++) {
      let num = nums[i]
      let length = res.length
      for (let j=0; j < length; j++) {
          let curr = res[j].slice()
          curr.push(num)
          // if (!set.has(curr)) {
              // set.add(curr)
          res.push(curr)
          // }
      }    
  }
  console.log(res)
  return res
};

subsets([1, 2, 3])