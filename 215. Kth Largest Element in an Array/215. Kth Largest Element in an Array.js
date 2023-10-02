/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function getPartition(arr, left, right) {
  const pivotElement = arr[right];

  let partitionIndex = left;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivotElement) {
      swap(arr, partitionIndex, j);
      partitionIndex++;
    }
  }

  swap(arr, partitionIndex, right);
  return partitionIndex;
}

// const getPartition = function (nums, left, right) {
//   let i = left;

//   for (let j = left; j <= right; j++) {
//     if (nums[j] <= nums[right]) {
//       swap(nums, i, j);
//       i++;
//     }
//   }
//   return i - 1;
// };

function quickSelect(nums, left, right, indexToFind) {
  const partitionIndex = getPartition(nums, left, right);

  if (partitionIndex === indexToFind) {
    return nums[partitionIndex];
  } else if (indexToFind < partitionIndex) {
    return quickSelect(nums, left, partitionIndex - 1, indexToFind);
  } else {
    return quickSelect(nums, partitionIndex + 1, right, indexToFind);
  }
}

var findKthLargest = function (nums, k) {
  const indexToFind = nums.length - k;

  return quickSelect(nums, 0, nums.length - 1, indexToFind);
};
