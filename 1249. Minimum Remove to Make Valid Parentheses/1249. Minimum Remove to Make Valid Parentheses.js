/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const res = s.split("");
  const stack = []; //for saving indexes of opening brackets

  for (let i = 0; i < res.length; i++) {
    const char = res[i];

    if (char === "(") {
      stack.push(i);
    } else if (char === ")" && stack.length) {
      stack.pop();
    } else if (char === ")") {
      res[i] = "";
    }
  }

  while (stack.length) {
    const index = stack.pop();
    res[index] = "";
  }

  return res.join("");
};
