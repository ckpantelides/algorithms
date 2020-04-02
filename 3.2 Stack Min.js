// Design a stack which returns the minimum element. Push, pop and min should operate in
// O(1) time

// Each node will contain the minimum value of the stack when it was added (by comparing its own data to stackMin
// and updating stackMin and its min value accordingly). Whenever a node is popped, stackMin is reverted
// to the previous node's min value, as this was the stack's minimum value before the popped node was added
class Node {
  constructor(data, previous = null, min = null) {
    this.data = data;
    this.previous = previous;
    this.min = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
    this.stackMin = null;
  }

  push(data) {
    let node = new Node(data);
    node.previous = this.top;
    this.top = node;
    this.size += 1;
    // Compares the new data to the current stackMin, updates its own
    // min and the stackMin accordinly
    if (data < this.stackMin || this.stackMin === null) {
      this.stackMin = data;
      node.min = data;
    } else {
      node.min = this.stackMin;
    }
  }

  pushMultiple(array) {
    array.forEach(value => this.push(value));
  }

  pop() {
    // Sets the stackMin to the stackMin before the top node was added
    this.stackMin = this.top.previous.min;
    // Sets the top node to the previous top node, deleting the top node
    this.top = this.top.previous;
    this.size -= 1;
  }

  peek() {
    return this.top;
  }

  min() {
    return this.stackMin;
  }
  isEmpty() {
    return this.top === null;
  }
}

let array = [5, 4, 1, 0, 5];
let stack = new Stack();
stack.pushMultiple(array);

//TESTS
stack.min() === 0 ? console.log('Test passed') : console.log('Test failed');
stack.pop();
stack.pop();
stack.min() === 1 ? console.log('Test passed') : console.log('Test failed');
stack.pop();
stack.min() === 4 ? console.log('Test passed') : console.log('Test failed');
