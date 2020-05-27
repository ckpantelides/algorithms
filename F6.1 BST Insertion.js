// Insert a node into a binary search tree
const insertBST = (root, val) => {
  // Set a pointer to the root of the tree
  let pointer = root;
  // The loop will continue until the data is inserted
  while (pointer.data !== val) {
    // If our value is greater than the current node, traverse down the righthand side
    if (pointer.data < val) {
      // If there's no righthand node, create a new node with the value
      if (!pointer.right) {
        pointer.right = new Node(val);
        // Else continue traversing down the righthand side
      } else {
        pointer = pointer.right;
      }
      // If the value is smaller than the current node, traverse the lefthand side
    } else {
      // If there's no lefthand node, create a new node with the value
      if (!pointer.left) {
        pointer.left = new Node(val);
        // Else continue traversing down the lefthand side
      } else {
        pointer = pointer.left;
      }
    }
  }
};
