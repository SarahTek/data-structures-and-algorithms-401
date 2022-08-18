

export class Stack <T>  {
  private data: T[] = [];
  
  // constructor() {
  //   this.data = [];
  // }

  get size(): number {
    
      return this.data.length;
    }

  push(item: T): void {
    if(!this.data){ // check to see if the stack is null
      this.data = [item]; // if the stack is null set this.data any create a new arr with item into the arr
    }else{ // if the stack isn't null push an item into the stack
      this.data.push(item);

    }
  }

  pop(): T | undefined  {
    if(this.data && this.data.length > 0) { // if the stack isn't null 
      return this.data.pop(); // pop the value and return it and it will remove the item from the stack
    }else{
      throw new Error('cannot pop an empty stack')
    }
  }
  
  get peek(): T | undefined {
    if(this.data && this.data.length > 0) { // if the stack isn't null 
      return this.data[this.data.length - 1];
    }
  }

    
    isEmpty(): boolean {
      return this.data === undefined ? true : false;
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
