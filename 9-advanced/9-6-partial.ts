{
    type ToDo = {
        title: string;
        description: string;
        label: string;
        priority: 'high' | 'low';
    };

    function updateTodo(todo: ToDo, updatedPart: Partial<ToDo>): ToDo {
        return {
            ...todo,
            ...updatedPart,
        };
    };

    const todo: ToDo = {
        title: 'first title',
        description: 'first description',
        label: 'first label',
        priority: 'high',
    };
    const todo1 = updateTodo(todo, {description: 'second description'});
    console.log(todo1);

    const todo2 = updateTodo(todo1, {label: 'third label', priority: 'low'});
    console.log(todo2);
}