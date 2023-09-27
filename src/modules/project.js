import Main from "./main";
import Modal from "./modal";
import Nav from "./navEvents";

const Project = (()=>{

    const projectsContainer = document.getElementById('project-links-display');

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

        tab.remove();

    }


    return{
        addNewProjectTab,
    }

})();

export default Project;