{
    /**
     * Type Inference
     */
    let text = 'hello'; // 타입스크립트가 text는 문자열 변수라는 것을 추론
    function print(message = 'hello') {
        console.log(message);
    } // 매개변수 message에 타입을 명시하지 않으면 any타입으로 적용. 💩
    // default parameter로 적용하면 message가 문자열 변수라는 것을 추론 가능
    print('hi');
    
    function add(x: number, y: number) {
        return x + y;
    } // return되는 값이 숫자라는 것을 추론
    const result = add(1, 2); // add함수가 숫자를 return하므로 result변수가 숫자형 변수라는 것을 추론
    
    

}