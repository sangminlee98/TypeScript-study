{
    {
        type CoffeeCup = {
            shots: number;
            hasMilk?: boolean;
            hasSugar?: boolean;
            }
        interface ICoffeeMachine {
            makeCoffee(shots: number, hasSugar?: boolean): CoffeeCup;
        }
        interface Machine {
            powerOn():void;
            powerOff(): void;
        }
        
        abstract class CoffeeMachine implements ICoffeeMachine, Machine {
            private static BEANS_GRAM_PER_SHOT = 7;
            private coffeeBeans: number = 0;
            constructor(coffeeBeans: number) {
                this.coffeeBeans = coffeeBeans;
                this.powerOn();
            };

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
            protected abstract extract(shots: number): CoffeeCup;
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
            powerOn(): void {
                console.log('latte machine power on...');
            }
            powerOff(): void {
                console.log('latte machine power off...');
            }
            protected extract(shots: number): CoffeeCup {
                this.steamMilk();
                return {
                    shots,
                    hasMilk: true,
                }
            }
        }

        class SweetCoffeeMachine extends CoffeeMachine {
            protected extract(shots: number): CoffeeCup {
                return {
                    shots,
                    hasSugar: true,
                }
            }
        }
    
        const machines: ICoffeeMachine[] = [
            new CaffeeLatteMachine(16),
            new SweetCoffeeMachine(16),
            new CaffeeLatteMachine(16),
            new SweetCoffeeMachine(16),
        ];
        machines.forEach(machine => {
            console.log('-------------')
            machine.makeCoffee(1);
        })
    }   
}