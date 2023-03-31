class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

// O(n) - time, O(n) - space

function inOrderTraversal(tree, array = []) {
  if (!tree) return;

  inOrderTraversal(tree.left, array);
  array.push(tree);
  inOrderTraversal(tree.right, array);

  return array;
}

function findSuccessor(tree, node) {
  const nodesArray = inOrderTraversal(tree, []);

  let nodeIndex = null;

  for (let i = 0; i < nodesArray.length; i++) {
    if (nodesArray[i].value === node.value) {
      nodeIndex = i + 1;
    }
  }

  return nodesArray[nodeIndex];
}

// O(h) - time, O(1) - space

const findRightSucessor = (node) =>
  node.left ? findRightSucessor(node.left) : node;

function findSuccessor(tree, node) {
  if (!tree.left && !tree.right) return null;

  if (node.right) return findRightSucessor(node.right);

  return node === node.parent.right ? node.parent.parent : node.parent;
}
