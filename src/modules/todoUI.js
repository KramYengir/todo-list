import Todo from "./todo.js";
import Modal from "./modal.js";

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

        if(todo.priority == 'important'){
            todoContainer.style.border = '1px solid red';
        }

        //buttons
        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-button');
        editBtn.addEventListener('click', ()=>{
            Modal.openEditTodoModal(todo);
            console.log(todo.id);
        })
        
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-button');
    
        todoContainer.appendChild(checkBox);
        todoContainer.appendChild(taskName);
        todoContainer.appendChild(date);
        todoContainer.appendChild(priority);
        todoContainer.appendChild(editBtn);
        todoContainer.appendChild(deleteBtn);
    
        return todoContainer;
    
    }

    const updatePriorityColor = (todo, container)=>{
        if(todo.priority == 'important'){
            container.stye.border = '1px solid red';
        }
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