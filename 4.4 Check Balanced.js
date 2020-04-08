// Check if a binary true is balanced. For this question, a balanced tree means the heights
// of two subtrees  never differ by more than one

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const getHeight = function (root) {
  // Base case - if the root is null, we're at the bottom of the tree
  // We return -1 as for each node travesal we add 1
  if (root == null) return -1;

  return 1 + Math.max(getHeight(root.left, getHeight(root.right)));
};

function isBalanced(root) {
  // /Base case. If we reach the root with returning false previously, all subtrees are balanced
  if (root === null) return true;
  let heightDiff = getHeight(root.left) - getHeight(root.right);
  // If the difference in height of the two subtrees is more than one
  // the tree is not balanced
  if (Math.abs(heightDiff > 1)) {
    return false;
  } else {
    //Recurse through each root's subtrees
    return isBalanced(root.left) && isBalanced(root.right);
  }
}

let a = new TreeNode(1);
let b = new TreeNode(2);
let c = new TreeNode(3);
let d = new TreeNode(4);
let e = new TreeNode(5);
let f = new TreeNode(6);
let g = new TreeNode(7);

a.left = b;
b.left = c;
c.left = d;
a.right = e;
/* Unbalanced tree
       1
     /  \
    2    5
   /
  3
 / 
4
*/

console.log(isBalanced(a));

a.left = b;
b.left = c;
b.right = d;
a.right = e;
e.left = f;

/* Balanced tree
        1
     /    \
    2      5
   / \    / \
  3   4  6 

*/

console.log(isBalanced(a));
