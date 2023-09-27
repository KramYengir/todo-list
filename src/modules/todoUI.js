import { format } from "date-fns";
import Todo from "./todo.js";
import Modal from "./modal.js";
import Main from "./main.js";

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
        let formattedDate = format(new Date(todo.date), 'dd-MMM-yyyy');
        date.textContent = formattedDate;
        date.classList.add('date');
    
        //todo project
        const project = document.createElement('div');
        project.textContent = todo.project;
        project.classList.add('project');

        //buttons
        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-button');
        editBtn.addEventListener('click', ()=>{
            Modal.openEditTodoModal(todo);
        })
        
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-button');
        deleteBtn.addEventListener('click', ()=>{
            Todo.deleteTodo(todo.id);
            Main.refresh();
        })

        updatePriorityColor(todo, todoContainer);
    
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
            container.style.border = '1px solid green';
        }else if(todo.priority == 'medium'){
            container.style.border = '1px solid orange';
        }else {
            container.style.border = '1px solid red';
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