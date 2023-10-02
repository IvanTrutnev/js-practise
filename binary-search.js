function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((right + left) / 2);
    const foundElem = arr[middle];

    if (foundElem === target) {
      return middle;
    }

    if (target < foundElem) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(binarySearch(arr, 1));
