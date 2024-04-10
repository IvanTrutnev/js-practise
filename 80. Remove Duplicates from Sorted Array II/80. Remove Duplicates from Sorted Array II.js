/**
 * @param {number[]} nums
 * @return {number}
 */

// nums = [0,0,1,1,1,1,1,2,3,3]

var removeDuplicates = function (nums) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 2]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};
