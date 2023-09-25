const Todo = (()=>{

    //NOTE: Todo dates are stored yyyy-mm-dd but are
    //displayed, using date-fns, as dd-MMM-yyyy

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

        console.log(newTodo);

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
        const currentDate = new Date().toJSON().slice(0, 10);
        console.log(currentDate);
        const todaysTodos = 
            todoList.filter(todo =>{
                if(todo.date === currentDate)
                return todo});
        console.log(todaysTodos);

        return todaysTodos;
    }

    const getWeeksTodos = ()=>{
        
    }

    return {
        createTodo,
        deleteTodo,
        toggleCompleted,
        getTodaysTodos,
        getAllTodos,
        editTodo,
    }

})();

export default Todo;