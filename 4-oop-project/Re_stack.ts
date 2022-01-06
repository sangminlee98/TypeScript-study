{
    interface IStack {
    readonly size: number;
    push(data: string): void;
    pop(): string;
    }

    type Nodee = {
        readonly data: string;
        readonly preNodee?: Nodee;
    }

    class Stack implements IStack {
        private _size: number = 0;
        private head?: Nodee;
        get size() {
            return this._size;
        }
        push(data: string): void {
            const node: Nodee = {data, preNodee: this.head};
            this.head = node;
            this._size++;
        }
        pop(): string {
            if(this.head == null) {
                throw new Error('stack is empty');
            } else {
                const node = this.head;
                this.head = node.preNodee;
                this._size--;
                return node.data;
            }
        }
    }

    const stack = new Stack();
    stack.push('가');
    stack.push('나');
    stack.push('다');
    console.log(stack.size);
    while(stack.size>0) {
        console.log(stack.pop());
    }
    console.log(stack.size);
}