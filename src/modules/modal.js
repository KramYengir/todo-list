const Modal = (()=>{

    let isNewTodo = false;
    let editTodoId;

    const modalContainer = document.getElementById('modal-container');

    //get form
    const form = document.getElementById('form');
    
    //get each input field
    const taskInput = document.getElementById('task');
    const dateInput = document.getElementById('date');
    const priorityInput = document.getElementById('priority');

    //get buttons
    const newTodoBtn = document.getElementById('new-todo-btn');
    const confirmBtn = document.getElementById('confirm-btn');
    const cancelBtn = document.getElementById('cancel-btn');

    //not sure if i need this...
    const newTodo = ()=>{
         
          
    }

    const editTodoModal = (todo)=>{
        openModal();
        //set fields
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
    }

    const openModal = ()=>{
        modalContainer.style.display = 'flex';
    }
    
    newTodoBtn.addEventListener('click', ()=>{
        openModal();
    });

    confirmBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        ///check fields
        //check isNewTodo then newTodo or editTodo
        closeModal();   
    });
    
    cancelBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        closeModal();
    });


    return{
        editTodoModal,
        openModal,
    }
})();

export default Modal;