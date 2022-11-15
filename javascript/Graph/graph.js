'use strict';

class Node {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(node, weight) {
    this.node = node;
    this.weight = weight;
  }
}

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
}

module.exports = {
  Graph,
}
