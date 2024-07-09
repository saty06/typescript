class Node2 {
    data: number;
    next: Node2 | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class LinkList {
    head: Node2 | null;

    constructor() {
        this.head = null;
    }

    addData(data: number): void {
        let newList = new Node2(data);
        if (this.head === null) {
            this.head = newList;
        } else {
            newList.next = this.head;
            this.head = newList;
        }
    }

    print(): void {
        let current = this.head;
        if (this.head === null) {
            console.log("List is empty");
        } else {
            while (current !== null) {
                console.log(current.data, "=>");
                current = current.next;
            }
        }
    }
}

// Usage
let data5 = new LinkList();
data5.addData(23);
data5.addData(203);
data5.addData(223);
data5.addData(2123);
data5.print();
