import { add, isWithinInterval } from "date-fns";

const Todo = (()=>{

    //NOTE: Todo dates are stored yyyy-mm-dd but are
    //displayed, using date-fns, as dd-MMM-yyyy

    let sampleTodoList = [];
    let todoList = [];

    //check localstorage first
    if(localStorage.getItem('todoList')){
        todoList = JSON.parse(localStorage.getItem('todoList'));
    }

    if(localStorage.getItem('sampleTodoList')){
        sampleTodoList = JSON.parse(localStorage.getItem('sampleTodoList'));
    }


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

        if(localStorage.getItem('todoList')){
            todoList = JSON.parse(localStorage.getItem('todoList'));
        }

        todoList.push(newTodo);

        localStorage.setItem('todoList', JSON.stringify(todoList));
        console.log(newTodo);

        return newTodo;
    }

    const deleteTodo = (id)=>{
        const index = todoList.findIndex((todo) => todo.id === id);
        if (index !== -1) {
          todoList.splice(index, 1);
        }
        localStorage.setItem('todoList', JSON.stringify(todoList));

    }

    const toggleCompleted = (id)=>{
        const todo = todoList.find((todo) => todo.id === id);
        if (todo) {
          todo.completed = !todo.completed;
        }
        localStorage.setItem('todoList', JSON.stringify(todoList));

    }

    const editTodo = (id, updatedTask, updatedDate, updatedProject, updatedPriority) =>{
        const todo = todoList.find((todo) => todo.id === id);
        if (todo) {
            todo.task = updatedTask;
            todo.date = updatedDate;
            todo.project = updatedProject;
            todo.priority = updatedPriority;
          }

        localStorage.setItem('todoList', JSON.stringify(todoList));
    }

    const loadSampleTodos = ()=>{
        sampleTodoList = [
            createTodo('Buy tickets to Jamaica', getRandomDate(), 'Travel', 'medium'),
            createTodo('Eat a tin a beans', getRandomDate(), 'Food', 'high'),
            createTodo('Carry a cool walk', getRandomDate(), 'Health', 'high'),
            createTodo('Lick my big toe', getRandomDate(), 'Exercise', 'medium'),
            createTodo('Exercise my nose', getRandomDate(), 'Exercise', 'low'),
            createTodo('Get a haircut', getRandomDate(), 'Exercise', 'low'),
            createTodo('Do a push-up', getRandomDate(), 'Exercise', 'medium'),
            createTodo('Say hello to someone', getRandomDate(), 'Health', 'low'),
            createTodo('Eat some lettuce', getRandomDate(), 'Food', 'high'),
            createTodo('Rent a horse', getRandomDate(), 'Travel', 'medium'),
            createTodo('Boil some cheese', getRandomDate(), 'Food', 'medium'),
            createTodo('Hire a hitman...', getRandomDate(), 'Top Secret', 'high'),
            createTodo('Research train wheels', getRandomDate(), 'Travel', 'medium'),
    
        ];

        localStorage.setItem('sampleTodoList', JSON.stringify(sampleTodoList));
    }

    const removeSampleTodos = ()=>{
        sampleTodoList.forEach(todo =>{
            deleteTodo(todo.id)
        })
        localStorage.setItem('todoList', JSON.stringify(todoList));
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

    const getRandomDate = ()=>{
        const currentDate = new Date(new Date().toJSON().slice(0, 10));
        const randomNum = Math.floor(Math.random() * 20)
        let randomDate = add(currentDate, {days: randomNum});
        randomDate = new Date(randomDate.toJSON().slice(0, 10));

        return randomDate;
    }

    const removeProject = (projectName)=>{
        todoList.forEach(todo=>{
            if(todo.project === projectName){
                todo.project = '';
            }
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
        toggleCompleted,
        loadSampleTodos,
        removeProject,
        removeSampleTodos,
    }

})();

export default Todo;