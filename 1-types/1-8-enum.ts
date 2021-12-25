{
    /**
     * Enum
     */
    // JavaScript
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2,});
    const dayOfToday = DAYS_ENUM.MONDAY;

    // TypeScript
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
    enum Days {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    };
    console.log(Days.Tuesday);
    let day: Days = Days.Tuesday;
    day = 10;
    console.log(day); // enum의 문제... Type이 보장되지 않을 수 있음

    let dayOfWeek: DaysOfWeek = 'Monday'; // 되도록 enum보다는 union타입으로 대체해서 사용!
}