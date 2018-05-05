/**
 * 0  1
 * 1  1
 * 2  2
 * 3  2
 * 4  3
 * 5  4
 */

const denominations = (amount, coins) => {
  let stack = []
  let result = new Set()
  coins.map(coin => {
    if (coin == amount) result.add([coin])
    if (coin < amount) stack.push({
      total: coin,
      change: [coin]
    })
  })

  if (!stack.length) throw new Error ('Cannot make change with these denominations')
  while (stack.length) {
    let { total, change } = stack.pop()

    coins.map(coin => {
      let newTotal = total + coin
      let newChange = [...change, coin].sort((a, b) => a-b)
      let newChangeKey = newChange.toString()
      if (newTotal == amount && !result.has(newChangeKey)) {
        result.add(newChangeKey, 1)
      }
      if (newTotal < amount) stack.push({
        total: newTotal,
        change: newChange
      })
    })
  }
  return result
}

console.log(denominations(4, [1, 2, 3]))