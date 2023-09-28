import Todo from "./todo";
import TodoUI from "./todoUI";

const Main = (()=>{

    const mainContainer = document.querySelector('main');

    const noTodosMsg = document.createElement('div');
    noTodosMsg.textContent = 'No Todos To Display :(';
    noTodosMsg.id = 'no-todos-msg';

    //load a single element into the main area
    const loadContent = (content)=>{
        mainContainer.appendChild(content);
    }

    const loadFromArray = (array)=>{
        clearContent();
        array.forEach(element => {
            mainContainer.appendChild(element);
        });
    }

    const loadTodayTodos = ()=>{
        const todos = Todo.getTodaysTodos();
        const todoElements = TodoUI.getArrayOfTodoElements(todos);

        if(todoElements.length != 0){
            loadFromArray(todoElements);
        }
        else dislpayNoTodosMsg();
    }

    const loadWeekTodos = ()=>{
        const todos = Todo.getWeeksTodos();
        const todoElements = TodoUI.getArrayOfTodoElements(todos);

        if(todoElements.length != 0){
            loadFromArray(todoElements);
            console.log(todos);
        }
        else dislpayNoTodosMsg();
    }

    const loadAllTodos = ()=>{
        const todos = Todo.getAllTodos();
        const todoElements = TodoUI.getArrayOfTodoElements(todos);

        if(todoElements.length != 0){
            loadFromArray(todoElements);
            console.log(todos);
        }
        else dislpayNoTodosMsg();
    }

    const loadProjectTodos = (name)=>{
        const todos = Todo.getProjectTodos(name);
        const todoElements = TodoUI.getArrayOfTodoElements(todos);

        if(todoElements.length != 0){
            loadFromArray(todoElements);
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

    return{
        loadTodayTodos,
        loadWeekTodos,
        loadAllTodos,
        loadProjectTodos,
        clearContent,
        refresh,
        loadSamples,
    }

})();

export default Main;