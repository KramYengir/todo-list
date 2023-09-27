import Main from './main.js';
import Modal from './modal.js';
import Project from './project.js';


const Nav = (()=>{

    //get the links in the nav
    const todayLink = document.getElementById('today-link');
    const weekLink = document.getElementById('week-link');
    const allLink = document.getElementById('all-link');
    const projectsLink = document.getElementById('projects-link');
    //input
    const projectInput = document.getElementById('project-input')
    //buttons
    const newProjecttn = document.getElementById('new-project-btn');
    const newTodoBtn = document.getElementById('new-todo-btn');

    //put links into an array
    const links = [todayLink, weekLink, allLink, projectsLink];

    todayLink.addEventListener('click', (e)=>{
        toggleActiveLinks(e.target);
        Main.loadTodayTodos();

    })

    weekLink.addEventListener('click', (e)=>{
        toggleActiveLinks(e.target);
        Main.loadWeekTodos();
    })

    allLink.addEventListener('click', (e)=>{
        toggleActiveLinks(e.target);
        Main.loadAllTodos();
    })

    projectsLink.addEventListener('click', (e)=>{
        toggleActiveLinks(e.target);
        toggleProjectLinks();

    })

    newProjecttn.addEventListener('click', ()=>{
        const name = projectInput.value;
        Project.addNewProjectTab(name);
        projectInput.value = '';
    })

    newTodoBtn.addEventListener('click', ()=>{
        Modal.openModal();
        Modal.setIsNewTodo(true);
        console.log(Modal.isNewTodo);
    });


    //toggle 'active' class on all links
    const toggleActiveLinks = (clickedLink)=>{

        //get live list of links first
        const liveLinks = getCurrentLinks();

        liveLinks.forEach(link =>{
            if(link != clickedLink){
                link.classList.remove('active');
            }
            else{
                link.classList.add('active');
            }
        })
    }

    const getActiveTab = ()=>{
        links.forEach(el =>{
            if(el.classList.contains('active')){
            activeTab = el.id;
            }
        })
        console.log('called from main: '+activeTab);

        return activeTab;
    }

    const toggleProjectLinks = ()=>{
        document.getElementById('project-links-display')
            .classList.toggle('active');
    }

    const getCurrentLinks = ()=>{
        const getCurrentLinks = [...document.querySelector('nav').querySelectorAll('a')];

        return getCurrentLinks;
    }

    return{
        getActiveTab,
        toggleActiveLinks,
    }
    
})();

export default Nav;