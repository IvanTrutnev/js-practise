/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.initialNums = nums;
  this.nums = [...nums];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.initialNums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  for (let i = 0; i < this.nums.length; i++) {
    const randomIndex = Math.floor(Math.random() * this.nums.length);
    swap(i, randomIndex, this.nums);
  }
  return this.nums;
};

function swap(i, j, array) {
  [array[i], array[j]] = [array[j], array[i]];
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
