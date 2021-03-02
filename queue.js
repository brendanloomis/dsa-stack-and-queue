class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _Node(data);
        
        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
            node.prev = this.last;
        }

        // make the new node the last item on the queue
        this.last = node;
    }

    dequeue() {
        // if the queue is empty, there is nothing to return
        if (this.first === null) {
            return;
        }

        const node = this.first;
        this.first = this.first.next;
        this.first.prev = null;
        // if this is the last item in the queue
        if (node === this.last) {
            this.last = null;
        }
        return node.value;
    }
}

let starTrekQ = new Queue();

starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');

function peek(queue) {
    return queue.first.value;
}

function isEmpty(queue) {
    if (!queue.first) {
        return true
    }
    return false
}

function display(queue) {
    let node = queue.first;

    if (!node) {
        console.log('empty queue');
        return;
    }

    while (node !== null) {
        console.log(node.value);
        node = node.next;
    }
}

starTrekQ.dequeue();
starTrekQ.dequeue();
display(starTrekQ);
