function debounce(callback, delay, immediate = false) {
  let timer = null;

  return function (...args) {
    clearInterval(timer);

    const shouldCallImmediately = timer === null && immediate;

    if (shouldCallImmediately) {
      callback.apply(this, args);
    }

    timer = setTimeout(() => {
      if (!immediate) {
        callback.apply(this, args);
      }
      timer = null;
    }, delay);
  };
}

// Do not edit the line below.
exports.debounce = debounce;
