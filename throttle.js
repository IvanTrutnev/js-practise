const throttle = (fn, delay) => {
  let savedArgs,
    savedThis,
    isThrottled = false;

  return function wrapper() {
    console.log('arguments', arguments);
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }
    fn.apply(this, arguments);

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = null;
        savedThis = null;
      }
    }, delay);
  };
};

// function throttle(fn, delay) {
//   let timer = null;

//   return function (...args) {
//     if (timer) return null;

//     timer = setTimeout(() => {
//       fn(...args);

//       timer = null;
//       clearTimeout(timer);
//     }, delay);
//   };
// }

function f(a) {
  console.log(a);
}

const throttled = throttle(f, 1000);

throttled(2);
throttled(2);
throttled(2);
throttled(2);
throttled(2);
throttled(2);
throttled(2);
throttled(3);
