const flat = (arr, depth = 1) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];

    if (Array.isArray(elem)) {
      if (depth === 0) {
        result.push(elem);
      } else {
        const newArr = flat(elem, depth - 1);
        result = [...result, ...newArr];
      }
    } else {
      result.push(elem);
    }
  }
  return result;
};

const arr = [1, [2], [3, [4]]];

console.log(flat(arr)); // [1, 2, 3, [4]];

console.log(flat(arr, 1)); // [1, 2, 3, [4]];

console.log(flat(arr, 2)); // [1, 2, 3, 4];
