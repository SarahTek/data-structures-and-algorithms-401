export class Queue<T> {
  storage: T[] = [];

  isEmpty(): boolean | undefined{
    return this.storage === undefined ? true : false;
  } 
  enqueue(item: T): void {
    this.storage.push(item);
  }
  dequeue(): T | undefined {
    return this.storage.shift();
  }

  peek(): T | undefined {
    if (!this.isEmpty()) {
      return this.storage[this.size() - 1];
    }else{
     throw new Error('it is empty');
    }
  }
  size(): number {
    return this.storage.length;
  }
  
}
