// Needs revising with topological sort - add nodes with no incoming edges to
// build order. Remove those nodes as incoming edges for remaining nodes. Add any new
// nodes with no incoming edges to build order etc

// You are given a list of projects and a list of dependencies (which is a list
// of pairs of projects where the second project is dependent on the first). All
// a project's dependencies must be built before the project is. Find a build order
// that will allow the projects to be build. If there is no valid build order, return an error

// The pair dependencies are analogous to edges between 2 vertices in a directed graph
// I will use breadth-first search to find the build order (CtCi suggests depth-first search).
// The starting nodes for the bfs will be any projects that have no dependencies (i.e they're not
// contained in the values array of the adjacency list)

function buildOrder(graph) {
  // All the projects are stored as keys in the adjacency list of the Graph
  let projects = Object.keys(graph.adjList);
  // All the dependent projects are values in the adjacency list. I've flattened the
  // nested arrays of the values into one array
  let dependentProjects = Object.values(graph.adjList).flat(Infinity);
  // This will hold the final build order
  let finalBuildOrder = '';
  // The head projects are those without any dependencies. They will be the starting nodes
  // for the breadth first search
  let headProjects = [];
  // This will track the visited nodes in the BF search
  let visited = {};

  // For each project, if it's not included in the dependentProject array, it
  // has no dependencies and will be used as the starting node for BFS
  projects.forEach((project) => {
    if (!dependentProjects.includes(project)) {
      finalBuildOrder += `${project} `;
      headProjects.push(project);
      visited[project] = true;
    } else {
      visited[project] = false;
    }
  });

  // For each head project, perform a BFS using the utility function. The util function
  // returns the visited object and the finalBuildOrder, which will then be passed into the next
  // call of BFS by any subsequent "head" projects
  for (let i = 0; i < headProjects.length; i++) {
    let returnedValues = _BuildOrderUtil(
      headProjects[i],
      graph,
      visited,
      finalBuildOrder
    );
    visited = returnedValues[0];
    finalBuildOrder = returnedValues[1];
  }
  return finalBuildOrder;
}

// This function performs a breadth first search
function _BuildOrderUtil(startingNode, graph, visited, finalBuildOrder) {
  // Create a queue to ensure the nodes are visited in the correct order
  let q = new Queue();

  // Add the starting node to the queue and make a note that it's been visited
  q.enqueue(startingNode);

  while (q.front != null) {
    let getQueueElement = q.dequeue();

    // Get the adjacent nodes, loop through them and enqueue them if
    // they haven't been visited
    let get_List = graph.adjList[getQueueElement];
    get_List.forEach((neighbour) => {
      if (!visited[neighbour]) {
        visited[neighbour] = true;
        finalBuildOrder += `${neighbour} `;
        q.enqueue(neighbour);
      }
    });
  }
  return [visited, finalBuildOrder];
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
const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

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

// vertices with adjacency lists
// A -> D
// B -> D
// C ->
// D -> C
// E ->
// F -> B A

console.log(buildOrder(g));
