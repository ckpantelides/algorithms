// A Graph is a non-linear data structure. A graph contains a set of vertices and set of edges
// (the edges denote connections between vertices)

/* Simple Graph from CtCi - note children are a property of the node, not the Graph class
class Graph {
  constructor() {
    this.nodes = [];
  }
}

class Node(name) {
    this.name=name;
    this.children=[];
}
*/
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
    // For an undirected graph, add an edge from vertex2 to vertex1 as well
    //this.adjList[vertex2].push(vertex1);
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
  // Depth first search
  dfs(startingNode) {
    const nodes = Object.keys(this.adjList);
    const visited = {};
    nodes.forEach((el) => {
      visited[el] = false;
    });
    this._dfsUtil(startingNode, visited);

    // Search with no input/starting node
    /*
    const nodes = Object.keys(this.adjList);
    const visited = {};
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      this._dfsUtil(node, visited);
    }
    */
  }

  _dfsUtil(vertex, visited) {
    if (!visited[vertex]) {
      visited[vertex] = true;
      console.log(vertex);
      const neighbors = this.adjList[vertex];
      for (let i = 0; i < neighbors.length; i++) {
        const neighbor = neighbors[i];
        this._dfsUtil(neighbor, visited);
      }
    }
    // Search with no input?
    /*
    if (!visited[vertex]) {
      visited[vertex] = true;
      console.log(vertex, visited);
      const neighbors = this.adjList[vertex];
      for (let i = 0; i < neighbors.length; i++) {
        const neighbor = neighbors[i];
        this._dfsUtil(neighbor, visited);
      }
    }
    */
  }
  // Breadth first search
  bfs(startingNode) {
    let result = '';
    // This object will keep track of visited nodes
    let visited = {};

    // Add each node as a key to the visited object, set the value pair as false
    const nodes = Object.keys(this.adjList);
    nodes.forEach((el) => {
      visited[el] = false;
    });

    // Create a queue to ensure the nodes are visited in the correct order
    let q = new Queue();

    // Add the starting node to the queue and make a note that it's been visited
    q.enqueue(startingNode);
    visited[startingNode] = true;

    while (q.front != null) {
      let getQueueElement = q.dequeue();

      // Add the current node to the result
      result.length > 0
        ? (result += `->${getQueueElement}`)
        : (result += `${getQueueElement}`);

      // Get the adjacent nodes, loop through them and enqueue them if
      // they haven't been visited
      let get_List = this.adjList[getQueueElement];
      get_List.forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          q.enqueue(neighbour);
        }
      });
    }
    return result;
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
const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

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

// vertices with adjacency lists (for undirected graph)
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C

// vertices with adjacency lists (for directed graph)
// A -> B D E
// B -> C
// C -> F
// D -> E
// E -> F C
// F ->

//g.printGraph();
console.log(g.bfs('A'));
