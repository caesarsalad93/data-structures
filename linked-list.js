/*
Create a Linked List
A linked list has a head and size properties
The head will be a node which links to more nodes.
*/
function LinkedList() {
  this.head = null;
  this.size = 0;
}
function Node(data) {
  this.data = data;
  this.next = null;
}
LinkedList.prototype.add = function(data) {
  var currentNode = this.head;
  var newNode = new Node(data);
  //If no head, set the head to be the newNode
  if(!this.head) {
    this.head = newNode;
    this.size++;
    return;
  } else {
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
  }
  currentNode.next = newNode;
  this.size++;
};
LinkedList.prototype.get = function(num) {
  var currentNode = this.head;
  if(num > this.size) {
    console.log('Doesnt exist');
  }
  var i = 0;
  while(i < num) {
    currentNode = currentNode.next;
    i++;
  }
  console.log(currentNode);
};

LinkedList.prototype.delete = function(num) {
  var currentNode = this.head;
  var prevNode = null;
  if(num >= this.size) {
    console.log('Does not exist');
  }
  if(num === 0) {
    this.head = currentNode.next;
    this.size--;
    return;
  }
  var i = 0;
  while(i < num) {
    prevNode = currentNode;
    currentNode = currentNode.next;
    i++;
  }
  prevNode.next = currentNode.next;
  currentNode = null;
  this.size--;
  
};
var myList = new LinkedList();
myList.add('chicken');
myList.add('gravy');
myList.add('sausage');
myList.delete(0);
myList.get(0);
console.log(myList);