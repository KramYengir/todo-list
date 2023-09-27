import Main from "./main";
import Todo from "./todo";

const Modal = (()=>{

    let isNewTodo = false;
    let editTodoId;

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
        dateInput.value = todo.date;
    }

    const resetFields = ()=>{
        taskInput.value = '';
        dateInput.value = '';
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


    ////////////////
    //eventlisteners
    ////////////////

    confirmBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        ///check fields
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

        console.log(isNewTodo);

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
    }
})();

export default Modal;