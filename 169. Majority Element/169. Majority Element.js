/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n) - time, O(1) - space

var majorityElement = function (nums) {
  // Initialize result and counter to store the solution and its frequency for respective iterations...
  let result = 0;
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    // If counter is equal to zero, update result as result = nums[i]
    if (counter === 0) {
      result = nums[i];
      counter = 1;
    } else if (result === nums[i]) {
      // If i is equal to candidate, increment counter...
      counter++;
    } else {
      // Otherwise, decrement counter...
      counter--;
    }
  }

  return result;
};
