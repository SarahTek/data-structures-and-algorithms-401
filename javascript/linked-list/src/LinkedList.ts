import { Collection, display } from "./Collection";

interface Node<T> {
  item: T;
  next: Node<T> | undefined;
}



export class LinkedList<T>  {
  // TODO
  start: Node<T> | undefined;
  tail: Node<T> | undefined;
    //  static start: any;


static zip(ll1: LinkedList<any>, ll2: LinkedList<any>): LinkedList<any> {
    const zipped = new LinkedList<any>();
    // let x : undefined 
      let curr1 = ll1.start;
      let curr2 = ll2.start;
      
    //  edge cases
      if (ll1 == undefined){
        return ll2;
      }else if (ll2 == undefined){
        return ll1;
      }
     if ( ll1 == undefined && ll2 == undefined){
      return zipped;
     }
    while (curr1 != undefined || curr2 != undefined) {
        zipped.append(curr1?.item);
        zipped.append(curr2?.item);
        // curr1 = curr1.next;
        // curr2 = curr2.next;
      }
      if (curr1) {
        while (curr1 != undefined) {
          zipped.append(curr1?.item);
          curr1 = curr1.next;
        }
      } else if (curr2) {
        while (curr2 !== undefined) {
          zipped.append(curr2.item);
          curr2 = curr2.next;
        }
      }
    return zipped;
  }


insert(item: T) {
    const newNode = {
      item: item,
      next: this.start,
    }
    this.start = newNode;
  }
  includes(item: T): boolean {
    let tracker = this.start;
    while (tracker !== undefined) {
      if (tracker.item === item) {
        return true;
      }
      tracker = tracker.next;
    }
    return false;
  }

  toString(): string {
    let str = "";
    let tracker = this.start;

    while (tracker !== undefined) {
      const strItem = display(tracker.item);
      str += `{ ${strItem} } -> `;
      tracker = tracker.next;
    }

    str += "NULL";

    return str;
  }
  append(value: T): void {
    const newNode = {
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

  insertBefore(needle: T, value: T): void {
    let tracker = this.start;
    while (tracker !== undefined) {
      if (tracker.item === needle) {
        let shiftedNode = tracker;
        const newNode = {
          item: value,
          next: shiftedNode,
        };
        this.start = newNode;
        break;
      }


      if (tracker.next?.item === needle) {
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

  insertAfter(needle: T, value: T): void {
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


  kthFromEnd(k: number): any {
    let current = this.start;
    let size = this.size();
    // edge case here
    // if k is < 0 throw error

    if (k > size || k < 0) {
      throw new Error(
        "this is error"
      );
    }

    // current = this.start;
    while (k <= size) {
      let target = size - k;
      for (let i = 0; i < target; i++) {
        current = current?.next;
      }
      return current?.item;
    }
  };

  size(): number {
    let counter = 0;
    let current = this.start;
    while (current != undefined) {
      current = current.next;
      counter++;
    } return counter;
  }
}
