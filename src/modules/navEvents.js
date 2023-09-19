import main from './main.js';
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
        console.log('today link clicked');
        toggleActiveLinks(e.target);
    })

    weekLink.addEventListener('click', (e)=>{
        console.log('week link clicked');
        toggleActiveLinks(e.target);
    })

    allLink.addEventListener('click', (e)=>{
        console.log('all link clicked');
        toggleActiveLinks(e.target);
    })

    projectsLink.addEventListener('click', (e)=>{
        console.log('projects link clicked');
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