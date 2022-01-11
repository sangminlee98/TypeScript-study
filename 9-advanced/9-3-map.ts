{
    type Video = {
        title: string;
        author: string;
        description: string;
    };
    
    type Optional<T> = {
        [P in keyof T]?: T[P]; // for...in
    }
    type ReadOnly<T> = {
        readonly [P in keyof T]: T[P];
    }
    type VideoOptional = Optional<Video>
    const videoOp: VideoOptional = {
        title: 'hello',
    }
    type Animal = {
        name: string;
        age: number;
    };
    const animal: Optional<Animal> = {
        age: 10,
    }
    
    type Student = {
        class: string;
        id: number;
    };

    const student: ReadOnly<Student> = {
        class: 'A',
        id: 1,
    }
    // student.class = 'B' => ❌

    type Nullable<T> = {
        [P in keyof T]: T[P] | null
    };

    const student2: Nullable<Student> = {
        class: 'C',
        id: null,
    };

    type Proxy<T> = {
        get(): T;
        set(value: T): void;
    };

    type Proxify<T> = {
        [P in keyof T]: Proxy<T>;
    };

    

}