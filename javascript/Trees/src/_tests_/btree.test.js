// const { BinaryTree, Node } = require("./binary_tree.js");
const BinaryTree = require("../binary_tree");
const Node = require("../node");



describe("Binary Tree", () => {
  const tree = new BinaryTree(
    new Node(

      1,
      new Node(7, new Node(2), new Node(6, new Node(3), new Node(11))),
      new Node(9, undefined, new Node(9, new Node(5), new Node(15)))
    )
  );
  //          1
  //        /   \
  //       7     9
  //      / \     \
  //     2   6     9
  //        / \   /
  //       3  11 5
  it("does an in-order traversal (left, root, right)", () => {
    expect(tree.inOrder()).toEqual([2, 7, 3, 6, 11, 1, 9, 5, 9, 15]);
  });

  it("does an post-order traversal (left, right, root)", () => {
    expect(tree.postOrder()).toEqual([2, 3, 11, 6, 7, 5, 15, 9, 9, 1]);
  });

  it("does an pre-order traversal (root, left, right)", () => {
    expect(tree.preOrder()).toEqual([1, 7, 2, 6, 3, 11, 9, 9, 5, 15]);

  });
  it("finds the maximum value traversal (root, left, right)", () => {
    expect(tree.max()).toEqual(15);
  });
  it("finds the maximum value traversal (root, left, right)", () => {
    const tree = new BinaryTree(new Node(1, new Node(2), new Node(4)))
    expect(tree.max()).toEqual(4);

  });
  it('checks if the tree is empty', () => {
    const tree = new BinaryTree(
      new Node(
        1,
        new Node(2), new Node(3)
      )
    )
    tree.root = new Node(1)
    expect(tree.bfs()).toEqual([1]);
  });

  it("Find Fizz and Buzz numbers ", () => {
    const tree = new BinaryTree(
      new Node(

        1,
        new Node(7, new Node(2), new Node(6, new Node(3), new Node(11))),
        new Node(9, undefined, new Node(9, new Node(5), new Node(15)))
      )
    )
    expect(tree.fizzBuzz()).toEqual(['1', '7', 'Fizz', '2', 'Fizz', 'Fizz', 'Fizz', '11', 'Buzz', 'FizzBuzz']);
  });
});
