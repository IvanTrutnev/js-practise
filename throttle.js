function throttle(callback, delay) {
  // Write your code here.
  let lastCallTime = 0
  let timerId = null;

  function throttledFn(...args) {
    const currentTime = new Date();
    const timeSinceLastCall = currentTime - lastCallTime;
    const delayRemaining = delay - timeSinceLastCall;

    if (delayRemaining <= 0) {
      lastCallTime = currentTime;
      callback.apply(this, args);
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        lastCallTime = new Date();
        callback.apply(this, args);
      }, delayRemaining)
    }
  }

  throttledFn.cancel = () => {
    clearTimeout(timerId);
  }

  return throttledFn;
}

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
