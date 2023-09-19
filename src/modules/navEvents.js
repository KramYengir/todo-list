import Main from './main.js';
import TodoLogic from './todo.js';
import TodoBuilder from './todoUI.js'

const date = new Date();

const Nav = (()=>{

    //get the links in the nav
    const todayLink = document.getElementById('today-link');
    const weekLink = document.getElementById('week-link');
    const allLink = document.getElementById('all-link');
    const projectsLink = document.getElementById('projects-link');

    //put links into an array
    const links = [todayLink, weekLink, allLink, projectsLink];

    todayLink.addEventListener('click', (e)=>{
        toggleActiveLinks(e.target);
    })

    weekLink.addEventListener('click', (e)=>{
        toggleActiveLinks(e.target);
    })

    allLink.addEventListener('click', (e)=>{
        toggleActiveLinks(e.target);
        
        const todos = TodoLogic.getAllTodos();
        const todoElements = TodoBuilder.getArrayOfTodoElements(todos);

        if(todoElements.length != 0){
            Main.loadFromArray(todoElements);
            console.log(todos);
        }
        else alert('No todos');

    })

    projectsLink.addEventListener('click', (e)=>{
        toggleActiveLinks(e.target);

    })

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