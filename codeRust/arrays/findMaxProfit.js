// given a list of day stock prices, find the maximum single sell profit
const findMaxProfit = prices => {
  if (!prices || prices.length - 1) return

  let min = prices[0]
  let maxProfit

  for (let i=1; i < prices.length; i++) {
    let currentProfit = prices[i] - min

    if (!maxProfit || currentProfit > maxProfit) {
      maxProfit = currentProfit
    }

    if (prices[i] < min) min = prices[i]
  }
  return maxProfit
}

console.log(findMaxProfit([8, 5, 12, 9, 19, 1]))
console.log(findMaxProfit([21, 12, 11, 9, 6, 3]))