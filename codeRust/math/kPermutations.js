// Given a set of n elements find their kth permutation.

const findKthPermutation = (arr, k) => {
  if (!arr) return
  if (arr.length == 1) return [arr[0]]
  let sorted = arr.sort()
  let permutations = []

  sorted.map(num => {
    let remaining = arr.filter(n => n != num)
    let perms = findKthPermutation(remaining, k)
    perms.map(perm => permutations.push([num].concat(perm)))
  })

  console.log(permutations)
  return permutations
}

findKthPermutation([3, 2, 1, 4], 3)