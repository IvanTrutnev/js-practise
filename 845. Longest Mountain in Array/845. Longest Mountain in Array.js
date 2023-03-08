/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function (array) {
  let longestPeakLength = 0;
  let i = 1;

  while (i < array.length - 1) {
    const isPeak = array[i - 1] < array[i] && array[i] > array[i + 1];

    if (!isPeak) {
      i += 1;
      continue;
    }

    let leftIndex = i - 2;
    while (leftIndex >= 0 && array[leftIndex] < array[leftIndex + 1]) {
      leftIndex -= 1;
    }

    let rightIndex = i + 2;
    while (
      rightIndex < array.length &&
      array[rightIndex] < array[rightIndex - 1]
    ) {
      rightIndex += 1;
    }

    let currentPeakLength = rightIndex - leftIndex - 1;
    longestPeakLength = Math.max(currentPeakLength, longestPeakLength);
    i = rightIndex;
  }

  return longestPeakLength;
};
