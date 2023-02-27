/**
 * @param {number[]} prices
 * @return {number}
 */

// O(n) - time, O(1) - space

var maxProfit = function (prices) {
  let profit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);

    profit = Math.max(profit, prices[i] - minPrice);
  }

  return profit;
};
