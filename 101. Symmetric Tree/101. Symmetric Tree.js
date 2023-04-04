var isMirror = function (p, q) {
  if (!p && !q) {
    return true;
  }

  if (!p || !q) {
    return false;
  }

  if (p.value !== q.value) {
    return false;
  }

  return isMirror(p.left, q.right) && isMirror(p.right, q.left);
};

function symmetricalTree(tree) {
  return isMirror(tree.left, tree.right);
}
