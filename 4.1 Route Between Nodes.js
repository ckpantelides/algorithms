// Given a directed graph, design an algorithm to find out whether there is a route
// between two nodes

// This can be solved be breadth first or depth first traversal. If the endNode is
// visited during the traversal, there's a route between the nodes. Below is a breadth first method
function routeBetween(graph, startNode, endNode) {
  if (startNode === endNode) {
    return true;
  }
  let result = false;
  // This object will keep track of visited nodes
  let visited = {};

  // Add each node as a key to the visited object, set the value pair as false
  const nodes = Object.keys(graph.adjList);
  nodes.forEach((el) => {
    visited[el] = false;
  });

  // Create a queue to ensure the nodes are visited in the correct order
  let q = new Queue();

  // Add the starting node to the queue and make a note that it's been visited
  q.enqueue(startNode);
  visited[startNode] = true;

  while (q.front != null) {
    let getQueueElement = q.dequeue();

    // Get the adjacent nodes, loop through them. If they're the end node, result is
    // true as there is a route. N.B. forEach returns undefined, which I've used a for loop
    let get_List = graph.adjList[getQueueElement];
    for (let i = 0; i < get_List.length; i++) {
      let neighbour = get_List[i];
      if (neighbour === endNode) {
        return true;
      }
      if (!visited[neighbour]) {
        visited[neighbour] = true;
        q.enqueue(neighbour);
      }
    }
  }
  return false;
}

class Graph {
  constructor() {
    // This object will hold vertices as keys with adjacent vertices (i.e. the adjacency list) as values
    this.adjList = {};
  }
  addVertex(data) {
    // adding a vertex with an empty array for its adjacency list
    this.adjList[data] = [];
  }
  // add edge to the graph
  addEdge(vertex1, vertex2) {
    // get the list for vertex1 and add vertex2 to it
    this.adjList[vertex1].push(vertex2);
  }
  printGraph() {
    // get all nodes
    let keys = Object.keys(this.adjList);

    // iterate over the nodes
    for (let el of keys) {
      // get the corresponding adjacency list for the node
      let values = this.adjList[el];
      let adjacencyList = '';

      // iterate over the adjacency list & concatenate the values into a string
      for (let j of values) adjacencyList += j + ' ';

      // print the node and its adjacency list
      console.log(el + ' -> ' + adjacencyList);
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
  }
  // If empty add to the front
  enqueue(data) {
    if (!this.front) {
      this.front = new Node(data);
      // Else traverse the queue and add the data to the end
    } else {
      let node = this.front;
      while (node.next != null) {
        node = node.next;
      }
      node.next = new Node(data);
    }
  }
  // By changing the front to the next in-line, the front of the queue is removed
  dequeue() {
    if (this.front !== null) {
      let temp = this.front.data;
      this.front = this.front.next;
      return temp;
    }
  }
  peek() {
    return this.front.data;
  }
  isEmpty() {
    this.front === null;
  }
}

const g = new Graph();
const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

// adding vertices
for (let i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

// vertices with adjacency lists (for directed graph)
// A -> B D E
// B -> C
// C -> F
// D -> E
// E -> F C
// F ->
// G ->

routeBetween(g, 'A', 'F') === true
  ? console.log('Test passed')
  : console.log('Test failed');
routeBetween(g, 'A', 'G') === false
  ? console.log('Test passed')
  : console.log('Test failed');
