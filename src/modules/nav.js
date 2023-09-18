import main from './main.js';
import pinkBox from './pinkBox.js';
import blueBox from './blueBox.js';

const manageClicks = (()=>{

    //get the links in the nav
    const todayLink = document.getElementById('today-link');
    const weekLink = document.getElementById('week-link');
    const allLink = document.getElementById('all-link');
    const projectsLink = document.getElementById('projects-link');

    todayLink.addEventListener('click', ()=>{
        main.loadContent(pinkBox);
        console.log('pinkBox');
    })

    weekLink.addEventListener('click', ()=>{
        main.loadContent(blueBox);
    })
    
})();

export default manageClicks;