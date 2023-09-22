const Todo = (()=>{

    const todoList = [];

    const createTodo = (task, date, priority)=>{
        const generateId = () => `${performance.now()}${Math.random()
            .toString().slice(5)}`.replace('.','')
        
            const newTodo = {
            id: generateId(),
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
            todo.priority = updatedPriority;
          }
    }

    const getAllTodos = ()=>{
        //for testing
        if(todoList.length == 0){
            const newTodo1 = createTodo('go shopping', '2023-4-11', 'important')
        }
        //
        return todoList;
    }

    const getTodaysTodos = ()=>{

    }

    const getWeeksTodos = ()=>{
        
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