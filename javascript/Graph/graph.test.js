'use strict';

const { Graph } = require('./graph');

describe('Testing', () => {
  let graph = new Graph();

  test('Should add a new node to the graph', () => {
    const A = graph.addNode('Atlanta');
    expect(A.value).toEqual('Atlanta');
  });

  test('Should be able to add an edge to a graph', () => {
    const B = graph.addNode('Boston');
    const C = graph.addNode('Chicago');
    graph.addEdge(B, C);
    graph.addEdge(C, B);
    expect(graph.neighborList.get(B).length).toEqual(1);
    expect(graph.neighborList.get(C).length).toEqual(1);
  });

  test('Should return all the nodes in the graph', () => {
    const A = graph.addNode('A');
    const B = graph.addNode('B');
    graph.addEdge(A, B);
    const C = graph.addNode('C');
    graph.addEdge(B, C);
    let nodes = graph.getNodes();
    expect(nodes.size).toEqual(6);
  });

  test('Should return the neighbors from the graph', () => {
    const A = graph.addNode('A');
    const B = graph.addNode('B');
    graph.addEdge(A, B);
    graph.addEdge(B, A);
    const C = graph.addNode('C');
    graph.addEdge(B, C);
    let neighbors = graph.getNeighbors(B);
    expect(neighbors.length).toEqual(2);
    expect(neighbors[0].node.value).toEqual('A');
  });

  test('Should return the size of the graph', () => {
    let size = graph.size();
    expect(size).toEqual(9);
  });

  test("breadth first", () => {
    const traversal = breadthFirst(graph, pandora);
    const graph = new Graph();
    const pandora = graph.addNode("Pandora");
    const arendelle = graph.addNode("Arendelle");
    const metroville = graph.addNode("Metroville");
    const monstropolis = graph.addNode("Monstropolis");
    const narnia = graph.addNode("Narnia");
    const naboo = graph.addNode("Naboo");


    graph.addEdge(pandora, arendelle);
    graph.addEdge(arendelle, metroville);
    graph.addEdge(arendelle, monstropolis);
    graph.addEdge(metroville, monstropolis);
    graph.addEdge(metroville, naboo);
    graph.addEdge(metroville, narnia);
    graph.addEdge(monstropolis, naboo);
    graph.addEdge(narnia, naboo);
    // Bi-directional edges
    graph.addEdge(arendelle, pandora);
    graph.addEdge(metroville, arendelle);
    graph.addEdge(monstropolis, arendelle);
    graph.addEdge(monstropolis, metroville);
    graph.addEdge(naboo, metroville);
    graph.addEdge(narnia, metroville);
    graph.addEdge(naboo, monstropolis);
    graph.addEdge(naboo, narnia);


    expect(traversal).toEqual([
      "Pandora",
      "Arendelle",
      "Metroville",
      "Monstropolis",
      "Naboo",
      "Narnia",
    ]);
  });
});
