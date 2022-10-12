/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

// Iterative solution
// O(n) - time, O(n) - space

var preorder = function (root) {
  const stack = [root];
  const output = [];

  while (stack.length) {
    let curr = stack.pop();

    if (curr) {
      output.push(curr.val);

      for (let i = curr.children.length - 1; i >= 0; i--) {
        stack.push(curr.children[i]);
      }
    }
  }

  return output;
};
