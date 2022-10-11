/**
 * @param {number[]} prices
 * @return {number}
 */

// O(n) - time, O(1) - space

var maxProfit = function (prices) {
  let maxProfit = 0;
  let boughtPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const currPrice = prices[i];

    if (currPrice < boughtPrice) {
      boughtPrice = currPrice;
    } else {
      maxProfit = Math.max(maxProfit, currPrice - boughtPrice);
    }
  }

  return maxProfit;
};
