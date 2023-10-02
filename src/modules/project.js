import Main from "./main";
import Modal from "./modal";
import Nav from "./navEvents";
import Todo from "./todo";

const Project = (()=>{

    const projectsContainer = document.getElementById('project-links-display');
    const projectInput = document.getElementById('project-input');
    projectInput.addEventListener('keyup', ()=>{
        validateInput();
    })
    const errorMsg = document.getElementById('project-error-msg');

    const MAX_NAME_LENGTH = 20;
    let areErrors = true;

    let links = [];

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
        validateInput();
        if(areErrors) return;

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

    const validateInput = ()=>{

        if(checkForDuplicate()){
            errorMsg.textContent = 'Already exists...';
            projectInput.classList.add('error');
            areErrors = true;
        }
        else if(projectInput.value == ''){
            errorMsg.textContent = 'Must have a name...';
            projectInput.classList.add('error');
            areErrors = true;
        }
        else if(projectInput.value.length >= MAX_NAME_LENGTH){
            errorMsg.textContent = 'Too long...';
            projectInput.classList.add('error');
            areErrors = true;
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
            if(link.id === projectName){
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