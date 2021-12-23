{
    // JavaScript 💩
    function jsAdd(num1, num2) {
        return num1 + num2;
    }
    console.log(jsAdd('hello',2))

    // TypeScript ✨
    function tsAdd(num1: number, num2: number): number {
        return num1 + num2;
    }
    console.log(tsAdd(1,2));

    // JavaScript 💩
    function jsFetchNum(id) {
        // code ...
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    // TypeScript ✨
    function tsFetchNum(id: string): Promise<number> {
        // code ...
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    // JavaScript ✨ => TypeScript

    // Optional parameter
    function printName(firstName: string, lastName?: string) { // lastName은 인자로 받아도되고, 안받아도 된다. Optional parameter
        console.log(firstName);
        console.log(lastName);
    }
    printName('Steve', 'Jobs');
    printName('Ellie');
    printName('Anna', undefined);

    // Default parameter
    function printMessage(message: string = 'default message') {
        console.log(message);
    }
    printMessage();

    // Rest parameter
    function addNumbers(...num: number[]): number {
        let total:number = 0;
        for(const item of num) {
            total += item; 
        }
        return total;
        // return num.reduce((a, b) => a + b);
    }
    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3, 4));
    console.log(addNumbers(1, 2, 3, 4, 5, 0));
}