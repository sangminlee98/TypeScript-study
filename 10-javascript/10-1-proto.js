// 자바스크립트는 타입스크립트처럼 인터페이스나 제네릭같은 아이들이 없지만
// Prototype을 이용해 상속을 구현할 수 있다.
// Prototype은 자바스크립트에서 객체지향 프로그래밍, 상속을 하기 위해서 쓰입니다.
// 그리고 코드를 재사용하기 위해 만들어졌다.

const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(array);
console.clear();

function CoffeeMachine(beans) {
    this.beans = beans;
    // Instance member level
    // this.makeCoffee = shots => {
    //     console.log('making...');
    // }
}

// Prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
    console.log('making...');
}

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
    this.milk = milk;
}
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);
const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee();