/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// dp formula - nums[amount] = min(nums[amount], 1 + nums[amount - denom])

// O(n*d) - time, where d is length of denoms array, O(n) - space

var coinChange = function (coins, amount) {
  const ways = [0, ...Array(amount).fill(Infinity)];

  for (const coin of coins) {
    for (let n = coin; n < ways.length; n++) {
      ways[n] = Math.min(ways[n], 1 + ways[n - coin]);
    }
  }

  return ways[amount] === Infinity ? -1 : ways[amount];
};
