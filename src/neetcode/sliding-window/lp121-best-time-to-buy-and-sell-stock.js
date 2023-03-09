/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let minBuy = prices[0],
    profit = 0

  for (let i = 1; i < prices.length; i++) {
    minBuy = Math.min(minBuy, prices[i])
    profit = Math.max(profit, prices[i] - minBuy)
  }

  return profit
}

export { maxProfit }
