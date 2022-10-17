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
 * @return {boolean}
 */

// time - O(n), O(n) - space

// var validate = function(node, low, high) {
//     if (node === null) {
//         return true;
//     }

//     const val = node.val;

//     if (low !== null && val <= low) return false;
//     if (high !== null && val >= high) return false;

//     return validate(node.left, low, val) && validate(node.right, val, high);
// }

// var isValidBST = function(root) {
//     return validate(root, null, null);
// };

// time - O(n), O(n) - space
var isValidBST = function (root) {
  let stack = [];
  let upperLimits = [];
  let lowerLimits = [];

  function update(node, low, high) {
    stack.push(node);
    lowerLimits.push(low);
    upperLimits.push(high);
  }

  let low = null;
  let high = null;
  let val;

  update(root, low, high);

  while (stack.length) {
    root = stack.pop();
    low = lowerLimits.pop();
    high = upperLimits.pop();

    if (root === null) continue;

    val = root.val;

    if (low !== null && val <= low) {
      return false;
    }

    if (high !== null && val >= high) {
      return false;
    }

    update(root.right, val, high);
    update(root.left, low, val);
  }

  return true;
};
