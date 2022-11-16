const Edge = require('./edge');
const Node = require('./node');



class Graph {
  constructor() {
    this.neighborList = new Map();
  }

  addNode(value) {
    const node = new Node(value);
    this.neighborList.set(node, []);
    return node;
  }

  addEdge(start, end, weight) {
    const neighbors = this.neighborList.get(start);
    neighbors.push(new Edge(end, weight));
  }

  getNeighbors(node) {
    return [...this.neighborList.get(node)];
  }

  getNodes() {
    return this.neighborList;
  }

  size() {
    return this.neighborList.size;
  }


  breadthFirst(node) {
    const q = [];
    const visited = new Set();
    const traversal = [];

    let next = q.shift();
    visited.add(next);

    while (next !== undefined) {
      if (!visited.has(next)) {
        traversal.push(next.value);
        q.push(...node.getNeighbors(next));
      }
      next = q.shift();
    }
    return traversal;
  }
}


module.exports = {
  Graph,
};
