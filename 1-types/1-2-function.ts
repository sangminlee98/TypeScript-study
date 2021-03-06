{
    // JavaScript π©
    function jsAdd(num1, num2) {
        return num1 + num2;
    }
    console.log(jsAdd('hello',2))

    // TypeScript β¨
    function tsAdd(num1: number, num2: number): number {
        return num1 + num2;
    }
    console.log(tsAdd(1,2));

    // JavaScript π©
    function jsFetchNum(id) {
        // code ...
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    // TypeScript β¨
    function tsFetchNum(id: string): Promise<number> {
        // code ...
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    // JavaScript β¨ => TypeScript

    // Optional parameter
    function printName(firstName: string, lastName?: string) { // lastNameμ μΈμλ‘ λ°μλλκ³ , μλ°μλ λλ€. Optional parameter
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