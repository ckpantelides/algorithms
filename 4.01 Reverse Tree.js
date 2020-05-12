const reverse = (tree) => {
  // Base/terminal case - we've reached the bottom of the tree
  if (tree === null) {
    return;
  }
  // To reverse the tree we swap the branches at each level by recursively
  // calling this function
  let temp = tree.left;
  tree.left = reverse(tree.right);
  tree.right = reverse(temp);
  return tree;
};

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(5);
let f = new Node(6);
let g = new Node(7);

d.left = b;
d.right = f;
b.left = a;
b.right = c;
f.left = e;
f.right = g;

console.log(d);
console.log(reverse(d));
