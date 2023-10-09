import Main from "./main.js";
import Modal from "./modal.js";
import Project from "./project.js";

const Nav = (() => {
  let areSamplesLoaded;

  if (localStorage.getItem("areSamplesLoaded")) {
    areSamplesLoaded = JSON.parse(localStorage.getItem("areSamplesLoaded"));
    /* if(areSamplesLoaded) Project.addSampleProjectTabs(); */
  } else {
    areSamplesLoaded = false;
  }

  //get the links in the nav
  const todayLink = document.getElementById("today-link");
  const weekLink = document.getElementById("week-link");
  const allLink = document.getElementById("all-link");
  const projectsLink = document.getElementById("projects-link");
  //input
  const projectInput = document.getElementById("project-input");
  //buttons
  const newProjectBtn = document.getElementById("new-project-btn");
  const newTodoBtn = document.getElementById("new-todo-btn");
  const loadSamplesBtn = document.getElementById("load-samples-btn");
  areSamplesLoaded
    ? (loadSamplesBtn.textContent = "Remove Sample Todos")
    : (loadSamplesBtn.textContent = "Load Sample Todos");

  //put links into an array
  const links = [todayLink, weekLink, allLink];

  todayLink.addEventListener("click", (e) => {
    toggleActiveLinks(e.target);
    Main.loadTodayTodos();
  });

  weekLink.addEventListener("click", (e) => {
    toggleActiveLinks(e.target);
    Main.loadWeekTodos();
  });

  allLink.addEventListener("click", (e) => {
    toggleActiveLinks(e.target);
    Main.loadAllTodos();
  });

  // add eventlisteners to the actual links
  // for better UX
  links.forEach((link)=>{
    link.closest('li').addEventListener('click', ()=>{
      if(link === todayLink){
        Main.loadTodayTodos();
      } else if(link === weekLink){
        Main.loadWeekTodos();
      } else{
        Main.loadAllTodos();
      }
    })
  })

  projectsLink.addEventListener("click", () => {
    toggleProjectLinks();
    projectsLink.classList.toggle("open");
  });
  
  projectInput.addEventListener("keyup", (e) => {
    if(e.key === 'Enter') manageAddProjectEvent();
  });

  newProjectBtn.addEventListener("click", () => {
    manageAddProjectEvent();
  });

  newTodoBtn.addEventListener("click", () => {
    Modal.openModal();
    Modal.setIsNewTodo(true);
    console.log(Modal.isNewTodo);
  });

  loadSamplesBtn.addEventListener("click", () => {
    areSamplesLoaded ? removeSamples() : loadSamples();
  });

  const loadSamples = () => {
    loadSamplesBtn.textContent = "Remove Sample Todos";
    Main.loadSamples();
    Project.addSampleProjectTabs();
    areSamplesLoaded = true;
    localStorage.setItem("areSamplesLoaded", "true");
  };

  const removeSamples = () => {
    loadSamplesBtn.textContent = "Load Sample Todos";
    Main.removeSamples();
    Project.removeSampleProjectTabs();
    areSamplesLoaded = false;
    localStorage.setItem("areSamplesLoaded", "false");
  };

  //toggle 'active' class on all links
  const toggleActiveLinks = (clickedLink) => {
    //get live list of links first
    const liveLinks = getCurrentLinks();

    liveLinks.forEach((link) => {
      if (link != clickedLink) {
        link.classList.remove("active");
      } else {
        link.classList.add("active");
      }
    });
  };

  const manageAddProjectEvent = ()=>{
    const name = projectInput.value;
    if (name == "") return;
    Project.addNewProjectTab(name);
    projectInput.value = "";
  }

  const getActiveTab = () => {
    let activeTab;

    links.forEach((el) => {
      if (el.classList.contains("active")) {
        activeTab = el.id;
      }
    });
    console.log("called from main: " + activeTab);

    return activeTab;
  };

  const toggleProjectLinks = () => {
    document.getElementById("project-links-display").classList.toggle("active");
  };

  const getCurrentLinks = () => {
    const getCurrentLinks = [
      ...document.querySelector("nav").querySelectorAll("a"),
    ];

    return getCurrentLinks;
  };

  return {
    getActiveTab,
    toggleActiveLinks,
  };
})();

export default Nav;
