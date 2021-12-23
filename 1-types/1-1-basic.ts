{
    /*
    * JavaScript
    * Primitive: number, string, boolean, bigint, symbol, null, undefined
    * Object: function, array....
    */

    // nubmer
    const num:number = -6;

    // string
    const str:string = 'hello';

    // boolean
    const boal:boolean = true;

    // undefined
    let name:undefined; // 💩
    let age: number | undefined // number 또는 undefined
    age = undefined;
    age = 1; 
    function find(): number | undefined {
        return undefined;
    } // number나 undefined를 반환

    // null
    let person: null; // 💩
    person = null;
    let person2: string | null; // null보단 보편적으로 undefined를 많이 씀

    // unknown 💩
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any 💩
    let anything: any = 0;
    anything = 'hello';

    // void
    function print(): void {
        console.log('hello');
        return;
    }
    let unusable: void = undefined // 💩

    // never
    function throwError(message: string): never {
        // message -> server (log)
        throw new Error(message);
        while(true) {}
    }
    let neverEnding: never; // 💩

    // object
    let obj: object = [1, 4]; // 💩
    function acceptSomeObject(obj: object) {}
    acceptSomeObject({name: 'ellie' });
    acceptSomeObject({animal: 'dog' });
}