{
    type PositionType = {
        x: number;
        y: number;
    };
    interface PositionInterface {
        x: number;
        y: number;
    }

    // object ★ 둘 다 사용 가능
    const obj1: PositionType = {
        x: 1,
        y: 1,
    };
    const obj2: PositionInterface = {
        x: 1,
        y: 1,
        z: 1,
    };

    // class ★ 둘 다 사용 가능
    class Pos1 implements PositionType {
        x: number;
        y: number;
    };
    class Pos2 implements PositionInterface {
        x: number;
        y: number;
        z: number;
    }

    // Extends
    interface ZPositionInterface extends PositionInterface {
        w: number;
    };
    type ZPositionType = PositionType & {z: number};

    // only interface can be merged.
    interface PositionInterface {
        z: number;
    }
    // PositionInterface => x:number, y:number, z:number
    // type PositionType = {} -> 타입은 합칠 수 없음

    // Type aliases can use computed properties
    type Person = {
        name: string,
        age: number,
    };
    type Name = Person['name']; // Name => string 타입

    type Numbertype = number;
    type Direction = 'left' | 'right';

}