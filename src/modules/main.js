import Todo from "./todo";
import TodoUI from "./todoUI";

const Main = (()=>{

    //create sort button which we'll
    //always append before the todos
    const sortContainer = document.createElement('div');
    sortContainer.id = 'sort-container';
    let sortBtn = document.createElement('button');
    sortBtn.id = 'sort-btn';
    sortBtn.textContent = 'Due Date';
    sortBtn.addEventListener('click', ()=>{
        sortTodos();
    })
    sortContainer.appendChild(sortBtn);

    const mainContainer = document.querySelector('main');

    const noTodosMsg = document.createElement('div');
    noTodosMsg.textContent = 'No Todos To Display :(';
    noTodosMsg.id = 'no-todos-msg';

    //load a single element into the main area
    const loadContent = (content)=>{
        mainContainer.appendChild(content);
    }

    const loadPremadeElements = (array)=>{
        clearContent();
        mainContainer.appendChild(sortContainer);
        array.forEach(element => {
            mainContainer.appendChild(element);
        });
    }

    const loadTodayTodos = ()=>{
        const todos = Todo.getTodaysTodos();
        const todoElements = TodoUI.getArrayOfTodoElements(todos);

        if(todoElements.length != 0){
            loadPremadeElements(todoElements);
        }
        else dislpayNoTodosMsg();
    }

    const loadWeekTodos = ()=>{
        const todos = Todo.getWeeksTodos();
        const todoElements = TodoUI.getArrayOfTodoElements(todos);


        if(todoElements.length != 0){
            loadPremadeElements(prepareWeekDisplay(todoElements));
        }
        else dislpayNoTodosMsg();
    }

    const prepareWeekDisplay = (todoElements)=>{
        let currentDay = null; // Initialize the current day
        let sortedByDays = [];

        todoElements.forEach(el => {
            const dueDate = new Date(el.dataset.date);
            const day = dueDate.toLocaleDateString('en-US', { weekday: 'long' });

            // Display the day when it changes
            if (day !== currentDay) {
                const dayContainer = document.createElement('div');
                dayContainer.classList.add('day-container');
                const dayHeader = document.createElement('h2');
                dayHeader.textContent = day;
                dayHeader.classList.add('day-header');

                dayContainer.appendChild(dayHeader);
                sortedByDays.push(dayContainer);
                currentDay = day;
            }
            sortedByDays.push(el);

        });

        return sortedByDays;
    }

    const loadAllTodos = ()=>{
        const todos = Todo.getAllTodos();
        const todoElements = TodoUI.getArrayOfTodoElements(todos);

        if(todoElements.length != 0){
            loadPremadeElements(todoElements);
        }
        else dislpayNoTodosMsg();
    }

    const loadProjectTodos = (name)=>{
        const todos = Todo.getProjectTodos(name);
        const todoElements = TodoUI.getArrayOfTodoElements(todos);

        if(todoElements.length != 0){
            loadPremadeElements(todoElements);
            console.log(todos);
        }
        else dislpayNoTodosMsg();
    }

    const refresh = ()=>{
      let activeTab = getActiveTab();

      switch (activeTab){
        case 'today-link':
            loadTodayTodos();
            break;
        case 'week-link':
            loadWeekTodos();
            break;
        case 'all-link':
            loadAllTodos();
            break;
        default:
            loadProjectTodos(activeTab);
            console.log('activeTab= '+activeTab)
      }
    }

    const getActiveTab = ()=>{
        const links = [...document.querySelector('nav').querySelectorAll('a')];
        let activeTab;

        links.forEach(el =>{
            if(el.classList.contains('active')){
                el.id === '' ? activeTab = el.parentNode.id : activeTab =el.id;
            }
        })

        return activeTab;
    }

    const dislpayNoTodosMsg = ()=>{
        clearContent();
        loadContent(noTodosMsg);
    }

    //clear all content 
    const clearContent = ()=>{
        while (mainContainer.firstChild) {
            mainContainer.removeChild(mainContainer.firstChild);
        }
    }

    const loadSamples = ()=>{
        Todo.loadSampleTodos();
        refresh();
    }

    const removeSamples = ()=>{
        Todo.removeSampleTodos();
        refresh();
    }

    const sortTodos = ()=>{
        Todo.sortByDate();
        Todo.toggleIsDesc();
        refresh();

        if(Todo.getIsDesc()){
            sortBtn.textContent = 'Due Date ↑↑';
            //console.log('Todo isDesc is true: '+Todo.getIsDesc());
        }else{
            sortBtn.textContent = 'Due Date ↓↓';
            //console.log('Todo isDesc is false: '+Todo.getIsDesc());

        }
    }

    return{
        loadTodayTodos,
        loadWeekTodos,
        loadAllTodos,
        loadProjectTodos,
        clearContent,
        refresh,
        loadSamples,
        removeSamples,
    }

})();

export default Main;