interface IStack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
}

type Nodee<T> = {
    readonly data: T;
    readonly prevNode?: Nodee<T>;
}

class Stack<T> implements IStack<T> {
    private _size: number = 0;
    private head?: Nodee<T>;
    get size() {
        return this._size;
    }
    push(value: T): void {
        const node: Nodee<T> = {data: value, prevNode: this.head};
        this.head = node;
        this._size++;
    }
    pop(): T {
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

const stringStack = new Stack<string>();
const numberStack = new Stack<number>();

stringStack.push('가');
stringStack.push('나');
stringStack.push('다');
stringStack.push('라');
console.log(stringStack.size);
while(stringStack.size>0) {
    console.log(stringStack.pop());
}

numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
numberStack.push(4);
console.log(numberStack.size);
while(numberStack.size>0) {
    console.log(numberStack.pop());
}