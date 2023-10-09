import { format } from "date-fns";
import Todo from "./todo.js";
import Modal from "./modal.js";
import Main from "./main.js";

const TodoUI = (()=>{

    const EDIT_ICON = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-200h56l345-345-56-56-345 345v56Zm572-403L602-771l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829-660l-57 57Zm-58 59L290-120H120v-170l424-424 170 170Zm-141-29-28-28 56 56-28-28Z"/></svg>`;

    const buildTodo = (todo)=>{
        
        const todoContainer = document.createElement('div');
        todoContainer.classList.add('todo-container');
        todoContainer.dataset.date = todo.date;
    
        //checkbox to mark completed
        const checkBox = document.createElement('input');
        checkBox.type = "checkbox";
        checkBox.name = "completed-checkbox";
        checkBox.checked = todo.completed;
        checkBox.classList.add('checkbox');
        checkBox.addEventListener('change', ()=>{
            handleCheckbox(todo, todoContainer, taskName);
            updateCompletedEffect(todo, todoContainer, taskName);
        })
    
        //todo name
        const taskName = document.createElement('div');
        taskName.textContent = todo.task;
        taskName.classList.add('task');
    
        //todo date
        const date = document.createElement('div');
        let formattedDate = format(new Date(todo.date), 'dd-MMM-yyyy');
        date.textContent = formattedDate;
        date.classList.add('date');
    
        //todo project
        const project = document.createElement('div');
        project.textContent = todo.project == 'none' ? '' : todo.project;
        project.classList.add('project');

        //buttons
        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.innerHTML = EDIT_ICON;
        editBtn.addEventListener('click', ()=>{
            Modal.openEditTodoModal(todo);
        })
        
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'X';
        deleteBtn.addEventListener('click', ()=>{
            Todo.deleteTodo(todo.id);
            Main.refresh();
        })

        updatePriorityColor(todo, todoContainer);
        updateCompletedEffect(todo, todoContainer, taskName);
    
        todoContainer.appendChild(checkBox);
        todoContainer.appendChild(taskName);
        todoContainer.appendChild(date);
        todoContainer.appendChild(project);
        todoContainer.appendChild(editBtn);
        todoContainer.appendChild(deleteBtn);

    
        return todoContainer;
    
    }

    const updatePriorityColor = (todo, container)=>{
        if(todo.priority == 'low'){
            container.style.border = '3px solid green';
        }else if(todo.priority == 'medium'){
            container.style.border = '3px solid orange';
        }else {
            container.style.border = '3px solid red';
        }
    }

    const handleCheckbox = (todo)=>{
        Todo.toggleCompleted(todo.id);
    }

    const updateCompletedEffect = (todo, container, task)=>{
       if(todo.completed){
        container.classList.add('completed');
        task.classList.add('completed');
       }else{
        container.classList.remove('completed');
        task.classList.remove('completed');
       }
    }

    const getArrayOfTodoElements = (todos)=>{
        const arrayOfElements = [];
        let currentDay = null;

        todos.forEach(todo => {
            arrayOfElements.push(buildTodo(todo));
        });
        return arrayOfElements
    }

    return{
        buildTodo,
        getArrayOfTodoElements,
    }
})();


export default TodoUI;