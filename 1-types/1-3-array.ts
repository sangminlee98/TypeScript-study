{
    // Array
    const fruit: string[] = ['tomato', 'banana'];
    const scores: Array<number> = [1, 3, 4];
    function printArray(fruits: readonly string[]) {} // string[]방식은 readonly 사용 가능

    // Tuple -> interface, type alias, class
    let student: [string, number];
    student = ['name', 123];
    student[0]; // name
    student[1]; // 123
    const [name, age] = student;
    
}