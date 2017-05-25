function kthToLastNode(k, headNode) {
  var nodes = {};
  var currentNode = headNode;
  var tempNode = null;
  var counter = 1;
  while (currentNode.next !== null) {
    nodes[counter] = currentNode;
    tempNode = currentNode;
    currentNode = tempNode.next;
    counter++;
  }
  return nodes[counter - k + 1];
}



function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(2, a));
