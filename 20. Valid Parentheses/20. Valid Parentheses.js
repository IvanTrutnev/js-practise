/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const symbol = s[i];

    if (symbol in map) {
      stack.push(symbol);
    } else {
      const lastSymbol = stack.pop();
      if (map[lastSymbol] !== symbol) {
        return false;
      }
    }
  }

  return !stack.length;
};
