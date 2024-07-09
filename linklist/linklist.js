var Node2 = /** @class */ (function () {
    function Node2(data) {
        this.data = data;
        this.next = null;
    }
    return Node2;
}());
var LinkList = /** @class */ (function () {
    function LinkList() {
        this.head = null;
    }
    LinkList.prototype.addData = function (data) {
        var newList = new Node2(data);
        if (this.head === null) {
            this.head = newList;
        }
        else {
            newList.next = this.head;
            this.head = newList;
        }
    };
    LinkList.prototype.print = function () {
        var current = this.head;
        if (this.head === null) {
            console.log("List is empty");
        }
        else {
            while (current !== null) {
                console.log(current.data, "=>");
                current = current.next;
            }
        }
    };
    return LinkList;
}());
// Usage
var data5 = new LinkList();
data5.addData(23);
data5.addData(203);
data5.addData(223);
data5.addData(2123);
data5.print();
