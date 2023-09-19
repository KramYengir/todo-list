

const todoItem = (todo)=>{
    
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-container');

    //checkbox to mark completed
    const checkBox = document.createElement('checkbox');

    //todo name
    const taskName = document.createElement('div');
    taskName.textContent = todo.task;

    //todo date
    const date = document.createElement('div');
    date.textContent = todo.date;

    //todo priority
    const priority = document.createElement('div');
    priority.textContent = todo.priority;

    todoContainer.appendChild(checkBox);
    todoContainer.appendChild(taskName);
    todoContainer.appendChild(date);
    todoContainer.appendChild(priority);

    return todoContainer;

}

export default todoItem;