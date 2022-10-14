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
 * @return {number[][]}
 */
// O(n) - time, O(n) - space, DFS

// var levelOrder = function(root) {
//     const levels = [];

//     if (root === null) {
//         return levels;
//     }

//     function helper(node, level) {
//         if (levels.length === level) {
//            levels.push([]);
//         }

//         levels[level].push(node.val);

//         if (node.left) {
//             helper(node.left, level + 1);
//         }
//         if (node.right) {
//             helper(node.right, level + 1);
//         }
//     }

//     helper(root, 0);
//     return levels;
// };

// O(n) - time, O(n) - space, BFS

var levelOrder = function (root) {
  if (!root) {
    return [];
  }

  const levels = [];

  let level = 0;

  let queue = [root];

  while (queue.length) {
    const queueLength = queue.length;

    const row = [];

    for (let i = 0; i < queueLength; ++i) {
      let node = queue.shift();

      row.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    levels.push(row);

    level += 1;
  }

  return levels;
};
