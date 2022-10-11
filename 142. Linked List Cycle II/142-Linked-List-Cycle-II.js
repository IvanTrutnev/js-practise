/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// O(n) - time, O(n) - space

var detectCycle = function (head) {
  const nodesSet = new Set();

  while (head) {
    if (nodesSet.has(head)) {
      return head;
    }
    nodesSet.add(head);
    head = head.next;
  }

  return null;
};

// Using Floyd's Tortoise and Hare (2 pointers, fast and slow)
// O(n) - time, O(1) - space

var detectCycle = function (head) {
  const getIntersection = () => {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        return slow;
      }
    }

    return null;
  };

  const intersect = getIntersection(head);

  if (!intersect) {
    return null;
  }

  let p1 = head;
  let p2 = intersect;

  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;
};
