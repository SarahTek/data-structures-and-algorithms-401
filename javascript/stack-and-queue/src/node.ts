interface Stack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
  enqueue(item: T): void;
  dequeue(): T | undefined;
}
