class Stack {

    constructor() {
        this.array = [];
    }

    size() {
        return this.array.length;
    }

    push(item) {
        this.array.push(item);
    }

    get() {
        if (this.array.length === 0){
            throw new Error('Stack is empty');
        }

        return this.array[this.size() - 1];
    }

    pop() {
        if (this.array.length === 0){
           throw new Error('Stack is empty');
        }
        return this.array.pop();
    }
}

module.exports = Stack;