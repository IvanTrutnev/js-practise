/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function binarySearch(nums, left, right, target) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

var searchRange = function (nums, target) {
  if (nums.length === 0) return [-1, -1];

  const firstPos = binarySearch(nums, 0, nums.length - 1, target);

  if (firstPos === -1) return [-1, -1];

  let startPos = firstPos,
    endPos = firstPos,
    startTemp,
    endTemp; // we need to keep track last included position of left and right parts

  while (startPos !== -1) {
    startTemp = startPos;
    startPos = binarySearch(nums, 0, startPos - 1, target);
  }

  while (endPos !== -1) {
    endTemp = endPos;
    endPos = binarySearch(nums, endPos + 1, nums.length - 1, target);
  }

  startPos = startTemp;
  endPos = endTemp;

  return [startPos, endPos];
};
