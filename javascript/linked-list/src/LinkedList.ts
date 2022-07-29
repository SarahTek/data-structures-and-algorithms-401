import { Collection, display } from "./Collection";


export class LinkedList<T> implements Collection<T> {
  // TODO
  start: Node<T> | undefined;
  
  insert (item: T) {
    const newNode = {
      item: item,
      next: this.start,
    }
    this.start =newNode;
  }
  includes(item: T): boolean {
    let tracker = this.start;
    while(tracker !== undefined){
      if(tracker.item === item){
        return true;
      }
      tracker = tracker.next;
    }
    return false;
  }

  toString(): string {
    let str = "";
    let tracker = this.start;

    while( tracker !== undefined) {
      const strItem = display(tracker.item);
      str += `{ ${strItem} } -> ` ;
      tracker = tracker.next;
    }

    str += "NULL";

    return str;
  }
  append(value: T): void {}
  insertBefore(needle: T, value: T) {}
  insertAfter(needle: T, value: T) {}
}

interface Node<T> {
  item: T;
  next: Node<T> | undefined;
}
