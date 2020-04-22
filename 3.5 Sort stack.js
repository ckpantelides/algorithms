// Write a program to sort a stack such that the smallest items are on the top
// You can use an additional temporary stack, but no other data structure

function sortStack(stack) {
  let tempStack = new Stack();
  while (!stack.isEmpty()) {
    // Pop the top of the stack and hold the data in memory. Push it to the
    // buffer stack once all larger elements from the buffer stack have been
    // pushed to the original stack
    let temp = stack.pop();
    while (!tempStack.isEmpty() && temp < tempStack.peek().data) {
      stack.push(tempStack.pop());
    }
    tempStack.push(temp);
  }
  // The buffer stack will now hold all the elements with the largest at the top
  // Push all of these back to the original stack, and they'll be in order
  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }
  return stack;
}

class Node {
  constructor(data, previous = null) {
    this.data = data;
    this.previous = previous;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    let node = new Node(data);
    node.previous = this.top;
    this.top = node;
    this.size += 1;
  }

  pop() {
    let temp = this.top.data;
    this.top = this.top.previous;
    this.size -= 1;
    return temp;
  }

  peek() {
    return this.top;
  }

  isEmpty() {
    return this.top === null;
  }
}

// TEST
let testStack = new Stack();
testStack.push(1);
testStack.push(5);
testStack.push(3);
testStack.push(4);
testStack.push(2);

let sortedStack = sortStack(testStack);

sortedStack.peek().data === 1 &&
sortedStack.peek().previous.data === 2 &&
sortedStack.peek().previous.previous.data === 3
  ? console.log('Test passed')
  : console.log('Test failed');
