'use strict';


const treeIntersections = require('./tree-intersection');
const { BinaryTree } = require('../javascript/Trees/src/binary_tree')
const { Node } = require('../javascript/Trees/src/node');


describe('testing tree intersection', () => {
  const tree1 = new BinaryTree();

  tree1.root = new Node(150);
  tree1.root.left = new Node(100);
  tree1.root.right = new Node(250);
  tree1.root.left.left = new Node(75);
  tree1.root.left.right = new Node(160);

  const tree2 = new BinaryTree();

  tree2.root = new Node(42);
  tree2.root.left = new Node(100);
  tree2.root.right = new Node(600);
  tree2.root.left.left = new Node(75);
  tree2.root.left.right = new Node(160);


  test('return a value that are shared between two binary tree ', () => {
    let duplicate = treeIntersections(tree1, tree2);
    expect(duplicate.length).toEqual(3);
  })
})
