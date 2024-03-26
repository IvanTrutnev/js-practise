/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function any(promises) {
  return new Promise((resolve, reject) => {
    const errors = [];

    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((value) => {
          resolve(value);
        })
        .catch((err) => {
          errors[i] = err;

          if (errors.length === promises.length) {
            reject(
              new AggregateError(
                'No Promise in Promise.any was resolved',
                errors
              )
            );
          }
        });
    }
  });
}
