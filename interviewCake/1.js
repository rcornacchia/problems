/**
 * Write an efficient function that takes stockPricesYesterday and returns the best profit 
 * I could have made from one purchase and one sale of one share of Apple stock yesterday.
 */

/**
 * record global min, starting as first price
 * record global profit starting at negative infinity
 * iterate through each number and subtract that number - min
 * if profit is greater than current max_profit set equal to profit
 * if that number is less than min set equal to that number
 */

const getMaxProfit = prices => {
  if (!prices || !prices.length) throw new Error()

  let min = prices[0]
  let maxProfit = -Infinity
  for (let i=1; i<prices.length; i++) {
    let curr = prices[i]
    let profit = curr - min
    if (profit > maxProfit) maxProfit = profit
    if (curr < min) min = curr
  }

  console.log(maxProfit)
  return maxProfit
}

getMaxProfit([10, 7, 5, 8, 11, 9]);
getMaxProfit([10, 7, 5]);