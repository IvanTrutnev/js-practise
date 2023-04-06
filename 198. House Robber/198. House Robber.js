/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n) - time, O(1) - space

var rob = function(nums) {
  let prev2 = 0;
  let prev1 = 0;
  let current = 0;

  for (let i = 0; i < nums.length; i++) {
      current = Math.max(prev2 + nums[i], prev1);

      prev2 = prev1;
      prev1 = current;
  }

  return current;
};