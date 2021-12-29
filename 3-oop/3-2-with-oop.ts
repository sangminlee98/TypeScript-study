type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
}

class CoffeeMachine {
    static BEANS_GRAM_PER_SHOT = 7;
    coffeeBeans: number = 0;
    constructor(coffeeBeans: number) {
        this.coffeeBeans = coffeeBeans;
    };
    makeCoffee(shots:number): CoffeeCup {
        if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT ) {
            throw new Error('Not enough coffee beans');
        }
        this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
        return {
            shots,
            hasMilk: false,
        };
    }
}

const machine = new CoffeeMachine(14);
const cup = machine.makeCoffee(2);
console.log(cup);