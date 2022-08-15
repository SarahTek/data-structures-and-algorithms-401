'use strict';

class Node {
  constructor (value){
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
  this.top = null;
  }


  push(value) {
      let newNode = new Node(value);
    }

 pop(){
  try {
   if  (!this.isEmpty()){
    let banana = this.top;
    this.top = banana.next;


   }
  }
 }
}
