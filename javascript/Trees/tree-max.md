# Challenge Type: Extending an Implementation

## Feature Tasks

Write the following method for the Binary Tree class

- find maximum value
  - Arguments: none
  - Returns: number
Find the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.


![example](Tree-max.png)

### UML tree-max

![Binary Tree max value](BT-max.png)
## Solutions

```

 max() {
    let traversal = [];
    traversal.push(this.value); // Root
    // Right
    if (this.right) {
      let rightTraversal = this.right.postOrder();
      traversal = [...rightTraversal, ...traversal];
    }
    if (this.left) {
      // Left
      let leftTraversal = this.left.postOrder();
      traversal = [...leftTraversal, ...traversal];
    }
    return Math.max(...traversal);

  }

```
## Collaborators

- Danny
- Martha
