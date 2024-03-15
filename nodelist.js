class NodeList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    // Method to append a new node with given value to the end of the linked list
    append(value) {
        let current = this;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = new NodeList(value);
    }

    // Method to delete a given node from the linked list
    static deleteNode(node) {
        if (!node || !node.next) return false;
        node.value = node.next.value;
        node.next = node.next.next;
        return true;
    }

    // Method to print the linked list starting from the current node
    print() {
        let current = this;
        let result = "";
        while (current !== null) {
            result += current.value + " -> ";
            current = current.next;
        }
        console.log(result + "null");
    }
}

// Example usage:
let head = new NodeList(1);
head.append(2);
head.append(3);
head.append(4);
head.append(5);

let nodeToDelete = head.next.next;

console.log("Before delete:");
head.print();

console.log("Deleted node:", nodeToDelete.value);
NodeList.deleteNode(nodeToDelete);

console.log("After delete:");
head.print();
