const throttle = (fn, delay) => {
  let savedArgs,
    savedThis,
    isThrottled = false;

  return function wrapper() {
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
