const Todo = (()=>{

    const todoList = [];

    const createTodo = (task, date, priority)=>{
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

    const editTodo = (id, updatedTask, updatedDate, updatedPriority) =>{
        const todo = todoList.find((todo) => todo.id === id);
        if (todo) {
            todo.task = updatedTask;
            todo.date = updatedDate;
            todo,priority = updatedPriority;
          }
    }

    const getAllTodos = ()=>{
        //for testing
        if(todoList.length == 0){
            const newTodo = createTodo('go shopping', '12/09', 'important')
            todoList.push(newTodo);
        }
        //
        return todoList;
    }

    return {
        createTodo,
        deleteTodo,
        toggleCompleted,
        getAllTodos,
        editTodo,
    }

})();

export default Todo;