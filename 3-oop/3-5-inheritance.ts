{
    {
        type CoffeeCup = {
            shots: number;
            hasMilk: boolean;
            }   
        interface ICoffeeMachine {
            makeCoffee(shots: number): CoffeeCup;
        }
        interface Machine {
            powerOn():void;
            powerOff(): void;
        }
        
        class CoffeeMachine implements ICoffeeMachine, Machine {
            private static BEANS_GRAM_PER_SHOT = 7;
            private coffeeBeans: number = 0;
            constructor(coffeeBeans: number) {
                this.coffeeBeans = coffeeBeans;
                this.powerOn();
            };
            static makeMachine(coffeeBeans: number): CoffeeMachine {
                return new CoffeeMachine(coffeeBeans);
            }
            private grindBeans(shots: number) {
                if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT ) {
                    throw new Error('Not enough coffee beans');
                }
                this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
                console.log(`Pulling ${shots} shots...`);
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
            powerOn(): void {
                console.log('coffee machine power on...');
            }
            powerOff(): void {
                console.log('coffee machine power off...');
            }
        }
        class CaffeeLatteMachine extends CoffeeMachine {
            private steamMilk():void {
                console.log('Steaming some milk...');
            }
            makeCoffee(shots: number): CoffeeCup {
                const coffee = super.makeCoffee(shots);
                this.steamMilk();
                return {
                    ...coffee,
                    hasMilk: true,
                };
            }
            powerOn(): void {
                console.log('latte machine power on...');
            }
            powerOff(): void {
                console.log('latte machine power off...');
            }
        }
    
        const machine = new CoffeeMachine(23);
        const latteMachine = new CaffeeLatteMachine(23);
        const coffee = latteMachine.makeCoffee(1);
        console.log(coffee);
    }   
}