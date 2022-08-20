export class SetOfStacks<T> {
  private container: Stack<T>[] = [] ;

  constructor(private readonly maxHeight: number) {
    this.maxHeight = maxHeight;
    this.container = [new Stack<T>(this.maxHeight)];
  }

  push(t: T): void {
    if (this.container.length === 0) {
      this.container.push(new Stack<T>(this.maxHeight));
    }
    let top = this.container.length -1;
    if (this.container[top].size >= this.maxHeight) {
      let newStack = new Stack<T>(this.maxHeight);
      newStack.push(t);
      this.container.push(newStack);
    }else{
      this.container[top].push(t);
    }
  }

  pop(): T | undefined {
    let top = this.container.at(-1);
    if (top) {
      let t = top.pop()!;
      if (top.size === 0) {
        this.container.pop();
      }
      return t;
    }
     return undefined;
  }

  get peek(): T | undefined {
    let top = this.container.length -1;
    return this.container[top].peek;
   
  }

  // BONUS QUESTION
  get size(): number {
    return this.container.reduce((c, s) => c + s.size, 0);
  }
}

class Stack<T> {
  readonly _arr: T[] = [];

  constructor(private readonly maxHeight: number) {}

  push(t: T) {
    if (this._arr.length > this.maxHeight) {
      throw new Error("Stack toppled over!");
    }
    this._arr.push(t);
  }

  pop() {
    return this._arr.pop();
  }

  get peek(): T | undefined {
    return this._arr.at(-1);
  }

  get size(): number {
    return this._arr.length;
  }
}
