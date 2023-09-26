const numbers = [4, 6, 90, 0, 8, 87, 123, 1, 65, 32, 245];

function bubbleSort(arr) {
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];

        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

function selectionSort(arr) {
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    let min = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }

  return arr;
}

function insertionSort(arr) {
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    if (arr[i] < arr[0]) {
      arr.unshift(arr.splice(i, 1)[0]);
    } else {
      if (arr[i] < arr[i - 1]) {
        for (let j = 1; j < length; j++) {
          if (arr[i] >= arr[j - 1] && arr[i] < arr[j]) {
            arr.splice(j, 0, arr.splice(i, 1)[0]);
          }
        }
      }
    }
  }

  return arr;
}

console.log(selectionSort(numbers));
