class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        // If the stack is empty, then the node will be the top of the stack
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        /* If the stack already has something, then create a new node,
           add data to the new node, and have the pointer point to the top */
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        /* In order to remove the top of the stack, you have to point the pointer
           to the next item and that next item becomes the top of the stack */
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

let starTrek = new Stack();

starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

function peek(stack) {
    const node = stack.top;
    return node.data;
}

function isEmpty(stack) {
    if (!stack.top) {
        return true;
    }
    return false;
}

function display(stack) {
    let node = stack.top;

    if (!node) {
        console.log('empty stack');
        return;
    }

    while (node !== null) {
        console.log(node.data);
        node = node.next;
    }
} 

starTrek.pop();
starTrek.pop();

display(starTrek);

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    
    let palindromeStack = new Stack();
    s.split('').forEach(char => {
        palindromeStack.push(char);
    });

    let reverse = '';

    for (let i = 0; i < s.length; i++) {
        reverse += palindromeStack.pop();
    }

    return s === reverse;
}

console.log(is_palindrome('dad'));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));

function matchingParentheses(str) {
    if (str.length === 0) {
        return null;
    }

    let parenStack = new Stack();

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            parenStack.push(str[i]);
        }
        
        if (str[i] === ')') {
            if(parenStack.top === null) {
                console.log('Missing "("');
                return false;
            }
            parenStack.pop();
        }
    }

    if (parenStack.top !== null) {
        console.log('Missing ")"');
        return false;
    }

    return true;
}

function sortStack(stack) {
    if (!stack.top || !stack.top.next) {
        return stack;
    }
    let sortedStack = new Stack();
    
}