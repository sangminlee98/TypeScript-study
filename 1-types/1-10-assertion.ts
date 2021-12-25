{
    /**
     * Type Assertions 💩
     */
    function jsStrFunc(): any {
        return 2;
    }
    const result = jsStrFunc();
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); // 😱

    // Type Assertion은 정말정말 장담하는 경우가 아니라면 쓰지 않는 것이 좋다!

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    const numbers = findNumbers();
    numbers!.push(2); // 😱 !는 내가 numbers가 배열이라는 것을 확신하기 때문에 사용 (optional parameter랑은 반대!)

    const button = document.querySelector('class')!; // button이 정말 존재한다고 확신할때 !
}