'use strict';
class Stack<T>  {
  storage: T[] = [];
  
  isEmpty(): boolean {
    return this.storage === undefined ? true : false;
  }
  push(item: T): void {
    this.storage.push(item);
  }
  
  pop(): T | undefined {
    if(this.isEmpty === null) {
      throw new Error('it is empty');
    }
    return this.storage.pop();
  }
  
  peek(): T | undefined {
    return this.storage[this.size() - 1];
  }
  
  size(): number {
    return this.storage.length;
  }
}




//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
//   }
//   class Stack {
//     constructor() {
//       this.top = null;
//     }
    
    
//     push(value) {
//       let newNode = new Node(value);
//       newNode.next = this.top;
//       this.top = newNode;
//     }
    
//     pop() {
//       if (this.isEmpty != null) {
//         let banana = this.top;
//         this.top = banana.next;
//         return banana;
//       } else {
//         return null;
//       }
//     }
    
    
//     isEmpty(): boolean {
//       return (this.top === null);
//     }
//   }
// }
