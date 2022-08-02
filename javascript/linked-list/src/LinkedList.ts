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
  append(value: T): void {
    const newNode ={
      item: value,
      next: undefined,
    };

    let tail = this.start;
    if (tail) {
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = newNode;
    }
  }

  insertBefore(needle: T, value: T) {
    let tracker = this.start;
    while (tracker !== undefined) {
      if (tracker.item === needle ) {
        let shiftedNode = tracker;
          const newNode = {
            item: value,
            next: shiftedNode,
          };
        this.start= newNode;
          break;
        }


    if (tracker.next?.item === needle ) {
    let shiftedNode = tracker.next;
      const newNode = {
        item: value,
        next: shiftedNode,
      };
    tracker.next = newNode;
      break;
    }
    tracker = tracker.next;
   }
  }

  insertAfter(needle: T, value: T) {
    let tracker = this.start;
    while (tracker !== undefined) {
      if (tracker.item === needle) {
        let shiftedNode = tracker.next;
        const newNode = {
          item: value,
          next: shiftedNode,
        };
        tracker.next = newNode;
        break;
      }
      tracker = tracker.next;
    }
  }
}

interface Node<T> {
  item: T;
  next: Node<T> | undefined;
}
