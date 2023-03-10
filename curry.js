function curry(callback) {
  function curried(...args) {
    if (args.length){
      return (...otherArgs) => {
        if (!otherArgs.length) {
          return callback(...args);
        }

        return curried(...args, ...otherArgs);
      }
    } else {
      return callback();
    }
  }

  return curried;
}

const sum = (a, b, c, d) => {
  return a + b + c + d;
};

const curriedJoin = curry(sum);

console.log(curriedJoin(1, 2, 3, 0)); // 6

console.log(curriedJoin(1)(2, 3, 2)); // 8

console.log(curriedJoin(1, 2)(3)(1)); // 7
