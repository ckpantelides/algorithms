// Given a sorted increasing order array with unique integer elemenets, write an alogorithm
// to create a binary search tree with minimal height

// Each node in a binary tree has two descendents - left and right. In a binary search tree
// left descendent <= n < right descendent.
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// This recursive function inserts the middle of the array into the tree,
// passes the left half of the array to the left branch, the right half of the
// array to the right branch, and then recurses until the base case (when there's no more
// mid point in each array half)
function createMinimalBST(array, start, end) {
  // Terminal case - if the end index  - array.length-1 - is less than the start index
  // there are no more elements to search. The bottom leaves of the tree are all null
  if (end < start) {
    return null;
  }
  let mid = Math.floor((start + end) / 2);
  let n = new Node(array[mid]);
  n.left = new createMinimalBST(array, start, mid - 1);
  n.right = new createMinimalBST(array, mid + 1, end);
  return n;
}

function startBST(array) {
  return createMinimalBST(array, 0, array.length - 1);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

startBST(array);

//export { createMinimalBST, startBST };
