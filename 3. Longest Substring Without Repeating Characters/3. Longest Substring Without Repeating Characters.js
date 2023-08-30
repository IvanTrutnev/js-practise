/**
 * @param {string} s
 * @return {number}
 */
//abcabcbb -> 3 (abc)
//pwwkew -> 3 (wke)

var lengthOfLongestSubstring = function (s) {
  let start = 0;
  let maxCount = 0;
  let current = 0;

  let charsSet = new Set();

  while (current < s.length) {
    if (charsSet.has(s[current])) {
      charsSet.delete(s[start]);
      start++;
    } else {
      charsSet.add(s[current]);
      current++;
      maxCount = Math.max(charsSet.size, maxCount);
    }
  }

  return maxCount;
};
