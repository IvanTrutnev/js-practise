/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//DFS solution
var sumOfLeftLeaves = function (root) {
  const stack = [root];

  let sum = 0;

  while (stack.length) {
    const node = stack.pop();

    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(node.left);

      if (!node.left.left && !node.left.right) {
        sum += node.left.val;
      }
    }
  }

  return sum;
};

//BFS solution

var sumOfLeftLeaves = function (root) {
  const queue = [root];

  let sum = 0;

  while (queue.length) {
    const node = queue.shift();

    if (node.left) {
      queue.push(node.left);

      if (!node.left.left && !node.left.right) {
        sum += node.left.val;
      }
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return sum;
};
