import { isBefore } from "date-fns";
import Main from "./main";
import Todo from "./todo";

const Modal = (()=>{

    let isNewTodo = false;
    let editTodoId;
    let areErrors = false;

    const MAX_INPUT = 20;

    //divs for error msg display
    let taskErrorMsg = document.getElementById('task-error-msg');
    let dateErrorMsg = document.getElementById('date-error-msg');

    const modalContainer = document.getElementById('modal-container');

    //get form
    const form = document.getElementById('form');
    
    //get each input field
    const taskInput = document.getElementById('task');
    const dateInput = document.getElementById('date');
    const projectInput = document.getElementById('project');
    const priorityInput = document.getElementById('priority');

    //get buttons
    const confirmBtn = document.getElementById('confirm-btn');
    const cancelBtn = document.getElementById('cancel-btn');


    const setIsNewTodo = (value)=>{
        isNewTodo = value; 
    }
    
    const openEditTodoModal = (todo)=>{
        openModal();
        fillFormFields(todo);
        editTodoId = todo.id;
    }

    const fillFormFields = (todo)=>{
        taskInput.value = todo.task;
        let date = new Date(todo.date).toJSON().slice(0, 10);
        dateInput.value = date;
        projectInput.value = todo.project === '' ? 'none' : todo.project;
    }

    const resetFields = ()=>{
        taskInput.value = '';
        dateInput.value = '';
        projectInput.value = 'none';
        priorityInput.value = 'low';
    }

    const closeModal = ()=>{
        modalContainer.style.display = 'none';
        isNewTodo = false;
        resetFields();
        Main.refresh();
    }

    const openModal = ()=>{
        modalContainer.style.display = 'flex';
    }

    //project integration
    const addProjectOption = (projectName)=>{
        const option = document.createElement("option");
        option.text = projectName;
        option.value = projectName;
        projectInput.add(option);
    }

    const removeProjectOption = (projectName)=>{
        let options = [...projectInput.querySelectorAll('option')]
        options.forEach((option, i)=>{
            if(option.value === projectName){
                option.remove();
            }
        })
    }

    ///////////////
    ///validation//
    //////////////

    const valiateTaskInput = ()=>{
        if(taskInput.value === ''){
            taskErrorMsg.textContent = 'Todo must have a name...';
            taskInput.classList.add('error');
            areErrors = true;
        }
        else{
            taskErrorMsg.textContent = '';
            taskInput.classList.remove('error');
            areErrors = false;
        }

    }
    const valiateDateInput = ()=>{
        let result = isBefore(new Date(dateInput.value), new Date());

        if(result){
            dateInput.classList.add('error');
            dateErrorMsg.textContent = "If only we could go back in time...";
            areErrors = true;
        }
        else{
            dateInput.classList.remove('error');
            dateErrorMsg.textContent = "";
            areErrors = false;

        }

        if(dateInput.value == ''){
            dateInput.classList.add('error');
            dateErrorMsg.textContent = "What is your deadline?";
            areErrors = true;
        }
        else{
            dateInput.classList.remove('error');
            dateErrorMsg.textContent = "";
            areErrors = false;
        }
    }




    ////////////////
    //eventlisteners
    ////////////////

    taskInput.addEventListener('keyup', ()=>{
        valiateTaskInput();
    })

    dateInput.addEventListener('change', ()=>{
        valiateDateInput();

    })


    confirmBtn.addEventListener('click', (e)=>{
        e.preventDefault();

        ///check fields
        valiateTaskInput();
        valiateDateInput();
        if(areErrors){
            return;
        }

        //check isNewTodo then newTodo or editTodo
        if(isNewTodo){
            Todo.createTodo(taskInput.value, dateInput.value, projectInput.value,
                priorityInput.value);
            console.log('createing new todo');
        }
        else{
            Todo.editTodo(editTodoId, taskInput.value, dateInput.value, 
                projectInput.value, priorityInput.value);
                console.log('editing todo');
        }

        closeModal();   
    });
    
    cancelBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        closeModal();
    });


    return{
        setIsNewTodo,
        openEditTodoModal,
        openModal,
        addProjectOption,
        removeProjectOption,
    }
})();

export default Modal;