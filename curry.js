const curry = (fn) => {
  const arity = fn.length; // got how many params the inner function have

  return function f1(...args) {
    if (args.length >= arity) {
      return fn(...args);
    } else {
      return function f2(...args1) {
        const newArgs = [...args, ...args1];
        return f1(...newArgs);
      };
    }
  };
};

const sum = (a, b, c, d) => {
  return a + b + c + d;
};

const curriedJoin = curry(sum);

console.log(curriedJoin(1, 2, 3, 0)); // 6

console.log(curriedJoin(1)(2, 3, 2)); // 8

console.log(curriedJoin(1, 2)(3)(1)); // 7
