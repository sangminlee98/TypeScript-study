{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
        }   
    
    class CoffeeMachine {
        private static BEANS_GRAM_PER_SHOT = 7;
        private coffeeBeans: number = 0;
        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        };
        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }
        makeCoffee(shots:number): CoffeeCup {
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT ) {
                throw new Error('Not enough coffee beans');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
            return {
                shots,
                hasMilk: false,
            };
        };
        fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        };
    }

    const machine = CoffeeMachine.makeMachine(14);
    const cup1 = machine.makeCoffee(2);
    console.log(cup1);
    machine.fillCoffeeBeans(20);
    const cup2 = machine.makeCoffee(2);
    console.log(cup2);

    class User {
        get fullName():string {
            return `${this.firstName} ${this.lastName}`;
        }
        set setFirstName(firstName: string) {
            this.firstName = firstName;
        } 
        set setLastName(lastName: string) {
            this.lastName = lastName;
        }
        constructor(private firstName: string, private lastName: string) {
        }
    }
    const user = new User('이','상민');
    console.log(user.fullName);
    user.setFirstName = '김';
    console.log(user.fullName);
}