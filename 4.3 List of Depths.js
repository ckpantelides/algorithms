//import { createMinimalBST, startBST } from './4.2 Minimal Tree.mjs';
// Create a linked list for each depth of a brinary tree, i.e. D linked lists
// for a tree of depth D
class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// This is a form of pre-order traversal - visiting the parent node first and then
// its descendents. level will keep track of the depth of the tree
function listsFromTree(tree, level, arrayOfLists) {
  // Terminal case
  if (typeof tree.data == 'undefined') return;
  // If arrayOfLists[level] has not been defined, this is the first time we've reached
  // this depth of the tree. A new linked list is started at this index
  if (typeof arrayOfLists[level] == 'undefined') {
    arrayOfLists.push(new ListNode(tree.data));
    // Else travel the linked list at that index, and append the tree data to the end of the list
  } else {
    let pointer = arrayOfLists[level];
    while (pointer.next !== null) {
      pointer = pointer.next;
    }
    pointer.next = new ListNode(tree.data);
  }
  // Recurse by looking at the descendents of the current node
  listsFromTree(tree.left, level + 1, arrayOfLists);
  listsFromTree(tree.right, level + 1, arrayOfLists);
  return arrayOfLists;
}

function createMinimalBST(array, start, end) {
  if (end < start) {
    return null;
  }
  let mid = Math.floor((start + end) / 2);
  let n = new TreeNode(array[mid]);
  n.left = new createMinimalBST(array, start, mid - 1);
  n.right = new createMinimalBST(array, mid + 1, end);
  return n;
}

function startBST(array) {
  return createMinimalBST(array, 0, array.length - 1);
}

let array = [1, 2, 3, 4, 5, 6, 7];

let finishedTree = startBST(array);
console.log(listsFromTree(finishedTree, 0, []));
