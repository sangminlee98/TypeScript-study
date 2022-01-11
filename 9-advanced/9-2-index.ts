{
    const obj1 = {
        name: 'ellie'
    }
    console.log(obj1.name);
    console.log(obj1['name']);

    type Animal = {
        name: string;
        age: number;
        gender: 'male' | 'female';
    }

    type Name = Animal['name']; // Name 타입은 string타입으로 할당
    const text: Name = '1'; // 문자열만 가능

    type Gender = Animal['gender']; // Gender 타입은 'male' | 'female'
    
    type Keys = keyof Animal; // Keys 타입은 'name' | 'age' | 'gender'
    const key: Keys = 'name';

    type Person = {
        name: string;
        gender: Animal['gender'];
    };

    const person: Person = {
        name: 'ellie',
        gender: 'male',
    };

}