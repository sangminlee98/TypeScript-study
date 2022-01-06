{
    function checkNotNullBad(arg: number | null): number {
        if(arg == null) {
            throw new Error('not valid number!');
        } else {
            return arg;
        }
    }

    function checkNotNullAnyBad(arg: any | null): any {
        if(arg == null) {
            throw new Error('not valid number!');
        } else {
            return arg;
        }
    }

    function checkNotNull<T>(arg: T | null): T {
        if(arg == null) {
            throw new Error('value is null!');
        } else {
            return arg;
        }
    }
    const number = checkNotNull(123);
    const str = checkNotNull('hello');
    const boolean: boolean = checkNotNull(true);
    const nulle = checkNotNull(null);
    console.log(number);
    console.log(str);
    console.log(boolean);
    console.log(nulle);

}