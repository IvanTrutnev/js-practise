class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // Average: Time - O(log n), Space - O(1)
  // Worst: Time - O(n), Space - O(1)

  insert(value) {
    let curr = this;

    while (curr) {
      if (value >= curr.value) {
        if (!curr.right) {
          curr.right = new BST(value);
          break;
        }
        curr = curr.right;
      } else {
        if (!curr.left) {
          curr.left = new BST(value);
          break;
        }
        curr = curr.left;
      }
    }

    return this;
  }

  // Average: Time - O(log n), Space - O(1)
  // Worst: Time - O(n), Space - O(1)

  contains(value) {
    let curr = this;

    while (curr) {
      if (curr.value === value) {
        return true;
      }

      if (value > curr.value) {
        curr = curr.right;
      } else if (value < curr.value) {
        curr = curr.left;
      }
    }

    return false;
  }

  // Average: Time - O(log n), Space - O(1)
  // Worst: Time - O(n), Space - O(1)

  remove(value, parentNode = null) {
    let currentNode = this;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        currentNode.shuffleNodes(currentNode, parentNode);
        break;
      }
    }

    return this;
  }

  shuffleNodes(currentNode, parentNode) {
    const leftNodeExists = currentNode.left !== null;
    const rightNodeExists = currentNode.right !== null;

    if (leftNodeExists && rightNodeExists) {
      currentNode.value = currentNode.right.getMinValue();
      currentNode.right.remove(currentNode.value, currentNode);
    } else if (!parentNode) {
      if (leftNodeExists) {
        currentNode.value = currentNode.left.value;
        currentNode.right = currentNode.left.right;
        currentNode.left = currentNode.left.left;
      } else if (rightNodeExists) {
        currentNode.value = currentNode.right.value;
        currentNode.left = currentNode.right.left;
        currentNode.right = currentNode.right.right;
      }
    } else if (parentNode.left === currentNode) {
      parentNode.left = leftNodeExists ? currentNode.left : currentNode.right;
    } else if (parentNode.right === currentNode) {
      parentNode.right = leftNodeExists ? currentNode.left : currentNode.right;
    }
  }

  getMinValue() {
    let curr = this;

    while (curr.left) {
      curr = curr.left;
    }

    return curr.value;
  }
}

exports.BST = BST;
