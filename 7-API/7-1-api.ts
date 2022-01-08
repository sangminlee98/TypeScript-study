class Animal {}
class Cat extends Animal {
    isCat:boolean = true;
}
class Dog extends Animal {
    isDog:boolean = true;
}

function isCat(animal:Animal): animal is Cat {
    return (animal as Cat).isCat !== undefined;
}
const animals: Animal[] = [new Cat(), new Cat(), new Dog()];
const result = animals.every<Cat>(isCat);
console.log(result);