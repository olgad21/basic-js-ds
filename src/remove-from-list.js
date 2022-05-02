const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');


function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  if (l.value === k) {
    l.value = l.next.value;   // This is for removing if k is on first position
    l.next = l.next.next;
  }

  let curr = l;

  while (curr.next) {
    if (curr.next.value === k) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return l;
}

// const initial = convertArrayToList([3, 4, 5, 3, 1, 2, 3]);
// const res = removeKFromList(initial, 3);
// console.log(res, 111111)


module.exports = {
  removeKFromList
};
