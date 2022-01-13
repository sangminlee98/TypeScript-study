// JavaScript에서 this는 누가 부르냐에 따라서 이 this가 달라질 수 있다.
// 호출한 문맥에 따라서 this가 동적으로 변경될 수 있다.

console.log(this); // this => window

function simpleFunc() {
    console.log(this);
}
simpleFunc(); // == window.simpleFunc() 글로벌에서 호출하는것은 window에 있는것을 호출한다는 것이므로 this => window
console.clear();

class Counter {
    count = 0;
    increase = function() {
        console.log(this);
    }
}
const counter = new Counter();
counter.increase(); // Counter 클래스에서 호출하는 것이므로 this => Counter
const caller = counter.increase;
caller(); // undefined
// 원래 increase의 this는 Counter를 가르켰지만 increase의 포인터를 const로 선언한 caller라는 변수로 할당이 되었다.
// let, const로 선언한 변수는 window에 등록되어 있지 않으므로 this는 그 어떤 오브젝트를 가리키지 않으므로 undefined이다.

class Bob {

}

const bob = new Bob();
bob.run = counter.increase;
bob.run(); // 원래 increase함수의 this는 Counter를 가리켰지만, increase의 포인터가 Bob클래스의 run 함수를 가리키도록 할당했다.
// 그러므로 this는 Bob 클래스를 가리킨다. this => Bob

// 자바스크립트는 함수를 다른곳으로 할당하는 순간 this 라는 정보를 잃어버릴 수 있기 때문에 오브젝트와 이 함수의 관계(this)를 바인딩 해줘야한다.
// ex) const caller = counter.increase.bind(counter); >> caller에 increase를 할당하는데 this를 counter를 가리키도록 바인딩

// ⭐️⭐️⭐️ 바인딩을 하지 않아도 Arrow Function을 사용하면 바인딩이 된다! ⭐️⭐️⭐️