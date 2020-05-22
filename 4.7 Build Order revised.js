// You are given a list of projects and a list of dependencies (which is a list
// of pairs of projects where the second project is dependent on the first). All
// a project's dependencies must be built before the project is. Find a build order
// that will allow the projects to be built. If there is no valid build order, return an error

// A topological sort is needed - this is a linear ordering of nodes in which for every directed
//edge 'a -> b', 'a' comes before 'b' in the ordering. This can only be performed on Directed
// Acyclical Graph. Topological sort uses DFS with a temporary Stack as opposed to a Queue.
// As DFS is running on the graph, you add node onto the temporary Stack once all of the children
// of its children have been explored as well.

function topologicalSortUtil(v, graph, visited, stack) {
  // Mark the current node as visited.
  visited[v] = true;
  // Recur for all the vertices adjacent to this vertex
  let children = graph.adjList[v];
  children.forEach((el) => {
    if (!visited[el]) {
      topologicalSortUtil(el, graph, visited, stack);
    }
  });
  // The first vertices pushed to the stack will be those without children. As they have no
  // children, nothing is dependent on them. The last stack push to the stack will have no incoming edge
  stack.push(v);
}

// This function calls the recursive topologicalSortUtil()
function topologicalSort(graph) {
  // This stack will hold the vertices with no incoming edges at the top
  let stack = new Stack();

  // This visited object will keep track of all the vertices that have been visited
  let visited = {};
  let nodes = Object.keys(graph.adjList);
  for (let n of nodes) {
    visited[n] = false;
  }

  // Iterate through each vertex and call the helper function if not already visited
  for (let i of nodes) {
    if (visited[i] === false) {
      topologicalSortUtil(i, graph, visited, stack);
    }
  }
  // Print the contents of stack once every vertex has been visited
  while (stack.isEmpty() === false) {
    console.log(stack.pop());
  }
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
    // For an undirected graph, add an edge from vertex2 to vertex1 as well
    //this.adjList[vertex2].push(vertex1);
  }
}

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
  }

  push(data) {
    let node = new Node(data);
    node.previous = this.top;
    this.top = node;
  }

  pop() {
    // Sets the top node to the previous top node, deleting the top node
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

const g = new Graph();
const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

// adding vertices
for (let i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

// adding edges
g.addEdge('A', 'D');
g.addEdge('F', 'B');
g.addEdge('B', 'D');
g.addEdge('F', 'A');
g.addEdge('D', 'C');
g.addEdge('G', 'E');

// vertices with adjacency lists
// A -> D
// B -> D
// C ->
// D -> C
// E ->
// F -> B A
// G -> E

console.log(topologicalSort(g));
