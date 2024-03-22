// Define class with capital letter as per JavaScript naming convention
class NodeList {
    constructor(value){
        this.value = value;
        this.next = null;
    }
    
    append(value){
        let current = this;
        while(current.next !== null){
            current = current.next;
        }
        current.next = new NodeList(value); // Change 'nodelist' to 'NodeList'
    }
    
    deleteNode(node){ // Rename delete to deleteNode to avoid conflicts
        if(!node || !node.next) return false;
        node.value = node.next.value;
        node.next = node.next.next;
        return true;
    }
    
    print(){
        let current = this;
        let res = "";
        while(current !== null){
            res += current.value + " -> "; // Fix concatenation
            current = current.next;
        }
        console.log(res + "null"); // Add "null" at the end
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
head.deleteNode(nodeToDelete); // Call deleteNode on the instance of NodeList

console.log("After delete:");
head.print();
