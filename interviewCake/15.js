const fib = i => {
  if (i < 2) return i
  return fib(i-1) + fib(i-2)
}

const memoFib = (i, memo=[]) => {
  if (i < 2) return i
  if (memo[i]) return memo[i]
  memo[i] = fib(i-1) + fib(i-2)
  return memo[i]
}

const start = Date.now()
console.log(fib(50))
const end1 = Date.now()
console.log(end1 - start)
console.log(memoFib(50))
const end2 = Date.now()
console.log(end2 - end1)