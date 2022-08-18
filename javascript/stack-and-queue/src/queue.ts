export class Queue<T> {
  
  storage: T[] = [];

  get size(): number {
    return this.storage.length;
  }

  isEmpty(): boolean {
    return this.storage.length === 0 ? true : false;
  } 
  enqueue(item: T): void {
    this.storage.push(item);
  }
  dequeue(): T | undefined {
    if(this.isEmpty()){
      throw new Error ('it is empty');
    }else{
      return this.storage.shift();
    }
  }

  get peek(): T | undefined {
    if (!this.isEmpty()) {
      return this.storage[this.storage.length - 1];
    }else{
     throw new Error('it is empty');
    }
  }
}
