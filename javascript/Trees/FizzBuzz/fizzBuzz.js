function fizzBuzz(fb) {
  let root = fb.root;
  let queue = [];

  if (fb.root === null) {
    return null;
  }
  queue.push(root);
  while (queue.length > 0) {
    let tree = queue.shift();
    if (tree.value % 5 === 0) {
      tree.value = "Buzz";
    }
    else if (tree.value % 3 === 0) {
      tree.value = "Fizz";
    }
    if (tree.value % 3 === 0 && tree.value % 5 === 0) {
      tree.value = "FizzBuzz";
    }
    if (trre.left != null) { // check if there left value
      queue.push(tree.left); // if there is push it to queue
    }
    if (tree.right != null) { // check if there right value
      queue.push(tree.right); // if there is push it to queue
    }
  }
  return fb;
}
