/**
 * @param {number[]} nums
 * @return {number[]}
 */

//Merge sort
const merge = (left, right) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
};

var sortArray = function (nums) {
  if (nums.length === 1) {
    return nums;
  }

  const length = nums.length;

  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  return merge(sortArray(left), sortArray(right));
};
