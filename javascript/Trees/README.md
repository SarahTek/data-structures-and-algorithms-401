
## Implementation: Trees

- Tree is collection of nodes. A tree is a hierarchical data structure. Tree is a non-linear data structure which contains nodes and edges.
- A binary tree is a tree data structure in which each parent node can have at most two children.A binary search tree is a binary tree made up of nodes. Each node has a key signifying its value.
- The values of the nodes on the left subtree are always smaller than the value of the root node. Also, the values of the nodes on the right subtree are larger than the value of the root node.

### Node

- Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.

### Binary Tree

- Create a Binary Tree class
  - Define a method for each of the depth first traversals:
    - pre order
    - in order
    - post order
 which returns an array of the values, ordered appropriately.

### Binary Search Tree

- Create a Binary Search Tree class
  - This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:
  - Add
    - Arguments: value
    - Return: nothing
    - Adds a new node with that value in the correct location in the binary search tree.
  - Contains
    - Argument: value
    - Returns: boolean indicating whether or not the value is in the tree at least once.

## Approach & Efficiency

- pre order - O(n)
- in order - O(n)
- post order - O(n)

## API

Depth First Traversals:

- pre order(Root, Left, Right)
- in order(Left, Root, Right)
- post order(Left, Right, Root)

## [PR](https://github.com/SarahTek/data-structures-and-algorithms-401/pull/60)

## Structure and Testing

1. Can successfully instantiate an empty tree
2. Can successfully instantiate a tree with a single root node
3. For a Binary Search Tree, can successfully add a left child and right child properly to a node
4. Can successfully return a collection from a preorder traversal
5. Can successfully return a collection from an inorder traversal
6. Can successfully return a collection from a postorder traversal
7. Returns true|false for the `contains` method, given an existing or non-existing node value
