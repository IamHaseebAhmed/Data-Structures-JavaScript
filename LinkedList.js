// New NODE will be created on every insertion operation.
class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

// Linked List class containing all LL operations.
class LinkedList {
  constructor() {
    this.head = null;
    this.next = null;
    this.tail = null;
  }

  insertAtFirst(data) {
    const newNode = new Node(data, this.head);
    if (!this.tail) {
      this.tail = this.head;
    }
    this.head = newNode;
  }

  insertAtLast(data) {
    const newNode = new Node(data, null);
    if (!this.head && !this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  printList() {
    var temp = this.head;
    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

// Creating an Object/Instance of LinkedList class.
const LL = new LinkedList();

LL.insertAtFirst(10);
LL.insertAtFirst(20);
LL.insertAtFirst(30);

LL.insertAtLast(40);
LL.insertAtLast(50);
LL.insertAtLast(60);
// LL.insertAtLast(32);

// LL.insertAtFirst(15);

LL.printList();
