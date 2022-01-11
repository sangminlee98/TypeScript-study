{
    type Check<T> = T extends string? boolean : number;
    type Type = Check<undefined>; // -> number 타입

    type TypeName<T> = T extends string
    ? 'string'
    : T extends number
    ? 'number'
    : T extends boolean
    ? 'boolean'
    : T extends undefined
    ? 'undefined'
    : T extends Function
    ? 'function'
    : 'object';

    type T0 = TypeName<string> // 'string'
    type T1 = TypeName<'hi'> // 'string'
    type T2 = TypeName<() => void> // 'function'
}