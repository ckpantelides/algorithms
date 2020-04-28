// Check if a binary tree is a binary search tree

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// In a binary search tree node.left <= node < node.right. All nodes in the left branch
// are less than (or equal to) the root node, similary all nodes in the right branch are greater than
// the root node. A maximum value therefore has to be passed through each recursion on the left,
// and a mininum is needed on the right
function isBST(tree) {
  // Starting with the root of the tree, that has no minimum or maximum value
  return _isBST(tree, null, null);
}

// For the left branch, min is always null, and a new max of node.data is passed down.
// On the right branch, max is always null, and a new min of node.data is passed down
function _isBST(node, min, max) {
  // Base case. If we reach the root without returning false previously, it is a BST
  if (node === null) return true;
  // On the right branch (i.e. min is not null), the data can't be less than the minimum
  // On the left branch (i.e. max is not null), the data can't be more than the maximum
  if ((min != null && node.data <= min) || (max != null && node.data > max)) {
    return false;
  }
  // Recurse down the left and right branches. For the left branch, the maximuim is passed down
  // On the right, the minimum is passed down
  if (
    !_isBST(node.left, min, node.data) ||
    !_isBST(node.right, node.data, max)
  ) {
    return false;
  }
  return true;
}

let a = new TreeNode(1);
let b = new TreeNode(2);
let c = new TreeNode(3);
let d = new TreeNode(4);
let e = new TreeNode(5);
let f = new TreeNode(6);
let g = new TreeNode(7);

d.left = b;
d.right = f;
b.left = a;
b.right = c;
f.left = e;
f.right = g;

/* BST
        4
     /    \
    2      6
   / \    / \
  1   3  5  7 

*/

isBST(d) === true ? console.log('Test passed') : console.log('Test failed');

let h = new TreeNode(1);
let i = new TreeNode(2);
let j = new TreeNode(3);
let k = new TreeNode(4);
let l = new TreeNode(8);
let m = new TreeNode(6);
let n = new TreeNode(7);

k.left = i;
k.right = m;
i.left = h;
i.right = j;
m.left = l;
m.right = n;

/* Not BST
        4
     /    \
    2      6
   / \    / \
  1   3  8  7 

*/

isBST(k) === false ? console.log('Test passed') : console.log('Test failed');
