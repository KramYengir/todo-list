import { add, isWithinInterval } from "date-fns";

const Todo = (()=>{

    //NOTE: Todo dates are stored yyyy-mm-dd but are
    //displayed, using date-fns, as dd-MMM-yyyy

    const todoList = [];

    const createTodo = (task, date, project, priority)=>{
        const generateId = () => `${performance.now()}${Math.random()
            .toString().slice(5)}`.replace('.','')
        
            const newTodo = {
            id: generateId(),
            task,
            date,
            project,
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
          todoList.splice(index, 1);
        }
    }

    const toggleCompleted = (id)=>{
        const todo = todoList.find((todo) => todo.id === id);
        if (todo) {
          todo.completed = !todo.completed;
        }
    }

    const editTodo = (id, updatedTask, updatedDate, updatedProject, updatedPriority) =>{
        const todo = todoList.find((todo) => todo.id === id);
        if (todo) {
            todo.task = updatedTask;
            todo.date = updatedDate;
            todo.project = updatedProject;
            todo.priority = updatedPriority;
          }
    }

    const getAllTodos = ()=>{
        return todoList;
    }

    const getTodaysTodos = ()=>{
        const currentDate = new Date().toJSON().slice(0, 10);

        const todaysTodos = todoList.filter(todo =>{
                if(todo.date === currentDate)
                return todo
            });

        return todaysTodos;
    }

    const getWeeksTodos = ()=>{

        const weeksTodos = todoList.filter(todo =>{
            if(isWithinWeek(todo.date))
            return todo;
        })

        return weeksTodos;

    }

    const getProjectTodos = (projectName)=>{
        const projectTodos = todoList.filter(todo =>{
            if(todo.project === projectName)
            return todo;
        })

        return projectTodos;
    }

    const isWithinWeek = (date)=>{
        // if todo date is less than currentdate + 7
        const currentDate = new Date(new Date().toJSON().slice(0, 10));
        const endOfWeek = add(currentDate, {weeks: 1});

        return isWithinInterval(new Date(date), {
            start: currentDate,
            end: endOfWeek,
          })
    }

    return {
        createTodo,
        deleteTodo,
        toggleCompleted,
        getTodaysTodos,
        getWeeksTodos,
        getAllTodos,
        getProjectTodos,
        editTodo,
    }

})();

export default Todo;