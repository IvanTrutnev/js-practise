/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 1;
    let end = n;
    let badVersion = 0;

    while (start <= end) {
      let middle = Math.floor((start + end) / 2);

      if (isBadVersion(middle)) {
        badVersion = middle;
        end = middle - 1;
      }

      if (!isBadVersion(middle)) {
        start = middle + 1;
      }
    }

    return badVersion;
  };
};
