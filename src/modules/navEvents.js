import Main from './main.js';
import Todo from './todo.js';
import TodoUI from './todoUI.js'
import Modal from './modal.js';

const date = new Date();

const Nav = (()=>{

    //get the links in the nav
    const todayLink = document.getElementById('today-link');
    const weekLink = document.getElementById('week-link');
    const allLink = document.getElementById('all-link');
    const projectsLink = document.getElementById('projects-link');
    const newTodoBtn = document.getElementById('new-todo-btn');

    //put links into an array
    const links = [todayLink, weekLink, allLink, projectsLink];

    todayLink.addEventListener('click', (e)=>{
        toggleActiveLinks(e.target);

        const todos = Todo.getTodaysTodos();
        const todoElements = TodoUI.getArrayOfTodoElements(todos);

        if(todoElements.length != 0){
            Main.loadFromArray(todoElements);
            console.log(todos);
        }
        else alert('No todos');
    })

    weekLink.addEventListener('click', (e)=>{
        const todos = Todo.getWeeksTodos();
        const todoElements = TodoUI.getArrayOfTodoElements(todos);

        if(todoElements.length != 0){
            Main.loadFromArray(todoElements);
            console.log(todos);
        }
        else alert('No todos');
    })

    allLink.addEventListener('click', (e)=>{
        toggleActiveLinks(e.target);
        
        const todos = Todo.getAllTodos();
        const todoElements = TodoUI.getArrayOfTodoElements(todos);

        if(todoElements.length != 0){
            Main.loadFromArray(todoElements);
            console.log(todos);
        }
        else alert('No todos');

    })

    projectsLink.addEventListener('click', (e)=>{
        toggleActiveLinks(e.target);

    })

    newTodoBtn.addEventListener('click', ()=>{
        Modal.openModal();
        Modal.setIsNewTodo(true);
        console.log(Modal.isNewTodo);
    });


    //toggle 'active' class on all links
    const toggleActiveLinks = (clickedLink)=>{
        links.forEach(link =>{
            if(link != clickedLink){
                link.classList.remove('active');

            }
            else{
                link.classList.add('active');
            }
        })
    }
    
})();

export default Nav;