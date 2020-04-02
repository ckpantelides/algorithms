//Describe how you can use a single array to implement three stacks
class Node {
  constructor(data, previous = null) {
    this.data = data;
    this.previous = previous;
  }
}

class Stack {
  constructor(x) {
    this.top = null;
    this.size = 0;
    this.maxSize = x / 3;
  }

  push(data) {
    let node = new Node(data);
    node.previous = this.top;
    this.top = node;
    this.size += 1;
  }

  pop() {
    this.top = this.top.previous;
    this.size -= 1;
  }

  peek() {
    return this.top;
  }

  isEmpty() {
    return this.top === null;
  }

  isFull() {
    return this.size === this.maxSize;
  }
}

// This function implements push for the three stacks. This could be turned to a
// Class with peek and pop functions, which would check is stack3 is empty then stack2 etc
function threeStacks(array) {
  array.forEach(value =>
    !stack1.isFull()
      ? stack1.push(value)
      : !stack2.isFull()
      ? stack2.push(value)
      : !stack3.isFull()
      ? stack3.push(value)
      : console.log('All stacks full')
  );
}

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

threeStacks(array1);
console.log(stack1.peek());
console.log(stack2.peek());
console.log(stack3.peek());
