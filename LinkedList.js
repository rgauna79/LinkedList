// Node Class
class Node {
    constructor(value) {
      this.value = value;
      this.nextNode = null;
    }
  }
  
  
  //LinkedList class
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
   
    append(value) {
      const newNode = new Node(value);
      if (!this.head){
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.nextNode = newNode;
        this.tail = newNode;
      }
      
      this.size++;
    }
    
    prepend(value) {
      const newNode = new Node(value);
      if (!this.head){
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.nextNode = this.head;
        this.head = newNode;
      }
      this.size++;
    }
    
    size() {
      return this.size;
    }
    
    head() {
      return this.head;
    }
    
    tail() {
      return this.tail;
    }
    
    at(index) {
      //console.log(index < 0 || index >= this.size)
      if (index < 0 || index >= this.size) {
        return null;
      }
      
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.nextNode
      }
      
      return current;
      
    }
    
    pop() {
      if (!this.head) {
        return null;
      }
      
      let current = this.head;
      let previous = null;
      
      while (current.nextNode) {
        previous = current;
        current = current.nextNode;
      }
      
      if (previous) {
        previous.nextNode = null;
        this.tail = previous
      } else {
        this.head = null;
        this.tail = null;
      }
      
      this.size--;
      return current;
   }
    
    contains(value) {
      let current = this.head;
      while (current) {
        if (current.value === value) {
          return true;
        }
        current = current.nextNode;
      }
      
      return false;
    }
    
    find(value) {
      let current = this.head;
      let index = 0;
      while (current) {
        if (current.value === value) {
          return index;
        }
        current = current.nextNode;
        index++;
      }
      return null;
    }
  
    toString() {
      let result = "";
      let current = this.head;
      while (current) {
        result += `(${current.value}) -> `;
        current = current.nextNode;
      }
      
      result += "null";
      return result;
    }
    
  insertAt(value, index) {
      if (index < 0 || index > this.size) {
        return null;
      }
  
      const newNode = new Node(value);
  
      if (index === 0) {
        newNode.nextNode = this.head;
        this.head = newNode;
      } else {
        let current = this.head;
        let previous = null;
  
        for (let i = 0; i < index; i++) {
          previous = current;
          current = current.nextNode;
        }
  
        newNode.nextNode = current;
        previous.nextNode = newNode;
      }
  
      this.size++;
    }
    
    removeAt(index) {
      if (index < 0 || index >= this.size) {
        return null;
      }
  
      let current = this.head;
      let previous = null;
  
      if (index === 0) {
        this.head = current.nextNode;
      } else {
        for (let i = 0; i < index; i++) {
          previous = current;
          current = current.nextNode;
        }
  
        previous.nextNode = current.nextNode;
  
        if (index === this.size - 1) {
          this.tail = previous;
        }
      }
  
      this.size--;
    }
    
  }
  
  // Example usage:
  const myList = new LinkedList();
  myList.append(1);
  myList.append(2);
  myList.append(6);
  myList.prepend(0);
  console.log(myList.toString()); // Output: (0) -> (1) -> (2) -> (3) -> null
  console.log(myList.size); // Output: 4
  console.log(myList.head.value); // Output: 0
  console.log(myList.tail.value); // Output: 3
  console.log(myList.at(6)); // Output: 2
  console.log(myList.pop().value); // Output: 3
  console.log(myList.toString()); // Output: (0) -> (1) -> (2) -> null
  console.log(myList.contains(2)); // Output: true
  console.log(myList.find(1)); // Output: 1
  myList.insertAt(4, 2);
  console.log(myList.toString()); // Output: (0) -> (1) -> (4) -> (2) -> null
   myList.removeAt(1);
   console.log(myList.toString()); // Output: (0) -> (4) -> (2) -> null