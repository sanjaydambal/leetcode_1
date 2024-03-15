class NodeList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
function deleteNode(node){
    if(!node ||!node.next) return false;
    node.value = node.next.value;
    node.next = node.next.next;
    return true;
}



let head = new NodeList(1);
head.next = new NodeList(2);
head.next.next = new NodeList(3);
head.next.next.next = new NodeList(4);
head.next.next.next.next = new NodeList(5);

let nodeToDelete = head.next.next;

console.log("Before delete: ", head);
deleteNode(nodeToDelete);
console.log("After delete: ", head);