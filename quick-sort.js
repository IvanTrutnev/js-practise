function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function partition(array, left, right) {
  const pivotElement = array[right];

  let partitionIndex = left;

  for (let j = left; j < right; j++) {
    if (array[j] < pivotElement) {
      swap(array, partitionIndex, j);
      partitionIndex++;
    }
  }

  swap(array, partitionIndex, right);
  return partitionIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const particionIndex = partition(arr, left, right);
    quickSort(arr, left, particionIndex - 1);
    quickSort(arr, particionIndex + 1, right);
  }
}

const arr = [5, 4, 3, 2, 1, 0, 9, 7, 8];

quickSort(arr);

console.log(arr);
