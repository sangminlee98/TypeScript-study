{
    /**
     * Type Assertions ๐ฉ
     */
    function jsStrFunc(): any {
        return 2;
    }
    const result = jsStrFunc();
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); // ๐ฑ

    // Type Assertion์ ์ ๋ง์ ๋ง ์ฅ๋ดํ๋ ๊ฒฝ์ฐ๊ฐ ์๋๋ผ๋ฉด ์ฐ์ง ์๋ ๊ฒ์ด ์ข๋ค!

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    const numbers = findNumbers();
    numbers!.push(2); // ๐ฑ !๋ ๋ด๊ฐ numbers๊ฐ ๋ฐฐ์ด์ด๋ผ๋ ๊ฒ์ ํ์ ํ๊ธฐ ๋๋ฌธ์ ์ฌ์ฉ (optional parameter๋์ ๋ฐ๋!)

    const button = document.querySelector('class')!; // button์ด ์ ๋ง ์กด์ฌํ๋ค๊ณ  ํ์ ํ ๋ !
}