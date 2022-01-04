interface IStack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
}

type Nodee = {
    readonly data: string;
    readonly prevNode?: Nodee;
}

class Stack implements IStack {
    private _size: number = 0;
    private head?: Nodee;
    get size() {
        return this._size;
    }
    push(value: string): void {
        const node: Nodee = {data: value, prevNode: this.head};
        this.head = node;
        this._size++;
    }
    pop(): string {
        if(this.head == null) {
            throw new Error('Stack is empty');
        } else { 
            const node = this.head;
            this.head = node.prevNode;
            this._size--;
            return node.data;
        }       
    }
}

const stack = new Stack();
stack.push('1');
stack.push('2');
stack.push('3');
console.log(stack.size);
while(stack.size !== 0) {
    console.log(stack.pop());
}