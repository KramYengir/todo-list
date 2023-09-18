const Todo = (()=>{

    const todoList = [];

    const createTodo = (id, task, date, priority, completed)=>{
        const newTodo = {
            id: Date.now(),
            task,
            date,
            priority,
            completed: false,
        };
        todoList.push(newTodo);

        return newTodo;
    }

    const deleteTodo = (id)=>{
        const index = todoList.findIndex((todo) => todo.id === id);
        if (index !== -1) {
          todos.splice(index, 1);
        }
    }

    const toggleCompleted = (id)=>{
        const todo = todoList.find((todo) => todo.id === id);
        if (todo) {
          todo.completed = !todo.completed;
        }
    }

    const getAllTodos = ()=>{
        return todoList;
    }

    return {
        createTodo,
        deleteTodo,
        toggleCompleted,
        getAllTodos,
    }

})();

export default Todo;