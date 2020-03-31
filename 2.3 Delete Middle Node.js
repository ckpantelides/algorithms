// Delete a node in the middle of a linked list. You only have access to the middle node.
// The middle node is any node that's not the head or the tail
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function returnList(list) {
  let result = '';
  while (list) {
    result += list.data;
    list = list.next;
  }
  return result;
}

function deleteNode(node) {
  if (node === null || node.next === null) {
    return;
  }
  let next = node.next;
  node.data = next.data;
  node.next = next.next;
}

let nodeA = new Node('a');
let nodeB = new Node('b');
let nodeC = new Node('c');
let nodeD = new Node('d');
let nodeE = new Node('e');

// Creates a linked list of nodesA to E with nodeA as the head
nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;

deleteNode(nodeC);

//TEST
returnList(nodeA) == 'abde'
  ? console.log('Test passed')
  : console.log('Test failed');
