function bfs(bt) {
  let result = [];
  const queue = [];
  if (bt.root == undefined) {
    throw new Error('tree is empty');
  }
  queue.push(bt.root);
  while (queue.length > 0) {
    let currentNode = queue.shift();
    result.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
  return result;
}
module.exports = bfs;
