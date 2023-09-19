import Todo from "./todo.js";

const TodoUI = (()=>{

    const buildTodo = (todo)=>{
        
        const todoContainer = document.createElement('div');
        todoContainer.classList.add('todo-container');
    
        //checkbox to mark completed
        const checkBox = document.createElement('input');
        checkBox.type = "checkbox";
        checkBox.name = "completed-checkbox";
        checkBox.value = "false";
        checkBox.classList.add('checkbox');
    
        //todo name
        const taskName = document.createElement('div');
        taskName.textContent = todo.task;
        taskName.classList.add('task');
    
        //todo date
        const date = document.createElement('div');
        date.textContent = todo.date;
        date.classList.add('date');
    
        //todo priority
        const priority = document.createElement('div');
        priority.textContent = todo.priority;
        priority.classList.add('priority');
    
        todoContainer.appendChild(checkBox);
        todoContainer.appendChild(taskName);
        todoContainer.appendChild(date);
        todoContainer.appendChild(priority);
    
        return todoContainer;
    
    }

    const getArrayOfTodoElements = (todos)=>{
        const arrayOfElements = [];

        todos.forEach(todo => {
            arrayOfElements.push(buildTodo(todo));
        });
        console.log(arrayOfElements);
        return arrayOfElements
    }

    return{
        buildTodo,
        getArrayOfTodoElements,
    }
})();


export default TodoUI;