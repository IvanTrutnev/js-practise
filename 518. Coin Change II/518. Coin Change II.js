/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

// time - O(NxD), where N is amount and D is D is coins length
// space - O(n)
var change = function (amount, coins) {
  const ways = [1, ...Array(amount).fill(0)];

  for (const coin of coins) {
    for (let charge = coin; charge < ways.length; charge++) {
      ways[charge] += ways[charge - coin];
    }
  }

  return ways[amount];
};
