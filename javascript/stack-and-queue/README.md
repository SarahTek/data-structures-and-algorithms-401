# Stacks and Queues

A stack is useful when we want to add elements inside a list into sequential order and remove the last element added. A queue is useful when we want the same behavior, but instead of removing the last added element, we want to remove the first element added to the list.

- stacks use First In Last Out(FILO) and Queues use the Last In Fist Out (LIFO). So the last element added to a stack is going to be the first one to be removed.And the first thing that you added in is the last thing to be removed.
- stacks are used to manage function invocation , undo/redo and routing history.

The stack head structure also contains a pointer to top and count of number of entries currently in stack.

- `push()` – Insert an element at one end of the stack called top.
- `pop()` – Remove and return the element at the top of the stack, if it is not empty.
- `peek()` – Return the element at the top of the stack without removing it, if the stack is not empty.
- `size()` – Return the number of elements in the stack.
- `isEmpty()` – Return true if the stack is empty, otherwise return false.
- `isFull()` – Return true if the stack is full, otherwise return false.

Queue is a linear data structure in which elements can be inserted only from one side of the list called rear, and the elements can be deleted only from the other side called the front.The queue data structure follows the FIFO (First In First Out) principle, i.e. the element inserted at first in the list, is the first element to be removed from the list.

- `enqueue()` – Insert an element at the end of the queue.
- `dequeue()` – Remove and return the first element of the queue, if the queue is not empty.
- `peek()` – Return the element of the queue without removing it, if the queue is not empty.
- `size()` – Return the number of elements in the queue.
- `isEmpty()` – Return true if the queue is empty, otherwise return false.
- `isFull()` – Return true if the queue is full, otherwise return false.

## Challenge

Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue

## Node

- Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.

## Stack

- Create a Stack class that has a top property. It creates an empty Stack when instantiated.
  - This object should be aware of a default empty value assigned to top when the stack is created.
  - The class should contain the following methods:
  - push
    - Arguments: value
    - adds a new node with that value to the top of the stack with an O(1) Time performance.
  - pop
    - Arguments: none
    - Returns: the value from node from the top of the stack
    - Removes the node from the top of the stack
    - Should raise exception when called on empty stack
  - peek
    - Arguments: none
    - Returns: Value of the node located at the top of the stack
    - Should raise exception when called on empty stack
  - is empty
    - Arguments: none
    - Returns: Boolean indicating whether or not the stack is empty.

## Queue

- Create a Queue class that has a front property. It creates an empty Queue when instantiated.
  - This object should be aware of a default empty value assigned to front when the queue is created.
  - The class should contain the following methods:
  - enqueue
    - Arguments: value
    - adds a new node with that value to the back of the queue with an O(1) Time performance.
  - dequeue
    - Arguments: none
    - Returns: the value from node from the front of the queue
    - Removes the node from the front of the queue
    - Should raise exception when called on empty queue
  - peek
    - Arguments: none
    - Returns: Value of the node located at the front of the queue
    - Should raise exception when called on empty stack
  - is empty
    - Arguments: none
    - Returns: Boolean indicating whether or not the queue is empty

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

## API
<!-- Description of each method publicly available to your Stack and Queue-->
