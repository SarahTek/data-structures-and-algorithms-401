export class Queue<T> {
  queue: T[];

  peek(): T {
    if (this.isEmpty()) {
        throw new Error('Queue is empty');
    }
    return this.queue[0];
}
}
