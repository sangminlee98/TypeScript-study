
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
    
    class CoffeeMachine implements ICoffeeMachine, Machine {
        private static BEANS_GRAM_PER_SHOT = 7;
        private coffeeBeans: number = 0;
        constructor(coffeeBeans: number, private milk: IMilkFrother, private sugar: ISugarProvider) {
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
        private extract(shots: number): CoffeeCup {
            return {
                shots,
                hasMilk: false,
            };
        }
        makeCoffee(shots:number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            const coffee = this.extract(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded);
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

    interface IMilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup;   
    };
    interface ISugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup;
    }

    class CheapMilkSteamer implements IMilkFrother {
        private steamMilk(): void {
            console.log('Steaming some milk...');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }

    class FancyMilkSteamer implements IMilkFrother {
        private steamMilk(): void {
            console.log('Fancy Steaming some milk...');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }
    
    class ColdMilkSteamer implements IMilkFrother {
        private steamMilk(): void {
            console.log('Cold Steaming some milk...');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }

    class NoMilk implements IMilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }

    class SugarMixer implements ISugarProvider {
        private getSuger() {
            console.log('Getting some sugar from jar...');
            return true;
        }
        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSuger();
            return {
                ...cup,
                hasSugar: sugar,
            }
        }
    }

    class FancySugarMixer implements ISugarProvider {
        private getSuger() {
            console.log('Getting some sugar from Fancy jar...');
            return true;
        }
        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSuger();
            return {
                ...cup,
                hasSugar: sugar,
            }
        }
    }

    class NoSugar implements ISugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }
    

    const cheapMilkMachine = new CheapMilkSteamer();
    const fancyMilkMachine = new FancyMilkSteamer();
    const coldMilkMachine = new ColdMilkSteamer();
    const noMilk = new NoMilk();
    const sugar = new SugarMixer();
    const fancySugar = new FancySugarMixer();
    const noSugar = new NoSugar();

    const sweetMachine = new CoffeeMachine(12, noMilk, sugar);
    const fancySweetMachine = new CoffeeMachine(12, noMilk, fancySugar);

    const latteMachine = new CoffeeMachine(12,cheapMilkMachine,noSugar);
    const fancyLatteMachine = new CoffeeMachine(12,fancyMilkMachine,noSugar);
    const coldLatteMachine = new CoffeeMachine(12,coldMilkMachine,noSugar);

    const sweetLatteMachine = new CoffeeMachine(12,fancyMilkMachine, fancySugar);
    

    
}   
