import Main from "./main";
import Modal from "./modal";
import Nav from "./navEvents";
import Todo from "./todo";

const Project = (()=>{

    const MAX_PROJECTS = 10;

    const projectsContainer = document.getElementById('project-links-display');
    
    const projectInput = document.getElementById('project-input');
    projectInput.addEventListener('keyup', (e)=>{
        validateInput(e.target.value);
    })
    projectInput.addEventListener('click', (e)=>{
        validateInput(e.target.value);
    })
    
    let links = [];

    const errorMsg = document.getElementById('project-error-msg');
    let areErrors = false;

    const MAX_NAME_LENGTH = 20;


    const createTabElement = (name)=>{
        const linkEl = document.createElement('li');
        linkEl.classList.add('project-link');
        linkEl.id = name;
        
        const anchorEl = document.createElement('a');
        anchorEl.href = '#';
        anchorEl.textContent = name;
        anchorEl.addEventListener('click', (e)=>{
            handleClick(e.target);
        })

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'x';
        deleteBtn.classList.add('delete-project-btn');
        deleteBtn.addEventListener('click', ()=>{
            removeTab(linkEl);
        });

        linkEl.appendChild(anchorEl);
        linkEl.appendChild(deleteBtn);

        links.push(linkEl);

        return linkEl;

    }

    const handleClick = (clickedLink)=>{
        Main.loadProjectTodos(clickedLink.parentNode.id);
        Nav.toggleActiveLinks(clickedLink);
    }

    const addNewProjectTab = (projectName)=>{
       
        if(areErrors) return;
        if(checkForDuplicate(projectName)) return;

        const tabEl = createTabElement(projectName);
        projectsContainer.insertBefore(tabEl, projectsContainer.childNodes[0]);
        Modal.addProjectOption(projectName);
    }

    const removeTab = (tab)=>{
        let index = links.findIndex((link) => link.id === tab.id);
        
        //update the links array
        if (index !== -1) {
          links.splice(index, 1);
        }

        Todo.removeProject(tab.id);
        tab.remove();
        Modal.removeProjectOption(tab.id);
        Main.refresh();

    }

    const validateInput = (projectName)=>{

        if(links.length >= MAX_PROJECTS){
            errorMsg.textContent = 'Too many projects...';
            projectInput.classList.add('error');
            areErrors = true;
        }else if(checkForDuplicate(projectName)){
            errorMsg.textContent = 'Already exists...';
            projectInput.classList.add('error');
            areErrors = true;
        }
        else if(projectInput.value == ''){
            errorMsg.textContent = 'Must have a name...';
            projectInput.classList.add('error');
            //areErrors = true;
        }
        else{
            errorMsg.textContent = '';
            projectInput.classList.remove('error');
            areErrors = false;
        }
    }

    const checkForDuplicate = (projectName)=>{
        let isDuplicate = false;

        links.forEach(link=>{
            if(link.id.toLowerCase() === projectName.toLowerCase()){
                isDuplicate = true;
                return;
            }
        })

        return isDuplicate;
    }

    const addSampleProjectTabs = ()=>{
        addNewProjectTab('Travel');
        addNewProjectTab('Health');
        addNewProjectTab('Food');
        addNewProjectTab('Top Secret');
        addNewProjectTab('Exercise');
    }




    return{
        addNewProjectTab,
        addSampleProjectTabs,
    }

})();

export default Project;