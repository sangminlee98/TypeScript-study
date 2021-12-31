{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
        }   
    interface ICoffeeMachine {
        makeCoffee(shots: number): CoffeeCup;
    }
    interface ICommercialCoffeeMachine {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    }
    class CoffeeMachine implements ICoffeeMachine, ICommercialCoffeeMachine {
        private static BEANS_GRAM_PER_SHOT = 7;
        private coffeeBeans: number = 0;
        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        };
        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }
        private grindBeans(shots: number) {
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT ) {
                throw new Error('Not enough coffee beans');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
        }
        private preheat(): void {
            console.log('heating up...');
        }
        private extract(shots: number): CoffeeCup {
            return {
                shots,
                hasMilk: false,
            };
        }
        makeCoffee(shots:number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
        fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        };
        clean() {
            console.log('cleaning the machine...');
        }
    }

    class AmateurUser {
        constructor(private machine: ICoffeeMachine) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        }
    }


    class ProBarista {
        constructor(private machine: ICommercialCoffeeMachine) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
        }
    }

    const machine: CoffeeMachine = CoffeeMachine.makeMachine(14);
    const amateur = new AmateurUser(machine);
    const pro = new ProBarista(machine);

    amateur.makeCoffee();
    pro.makeCoffee();
}