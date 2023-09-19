const Main = (()=>{

    const mainContainer = document.querySelector('main');

    //load content into the main area
    const loadContent = (content)=>{
        clearContent();
        mainContainer.appendChild(content);
    }

    //clear all content before loading new content
    const clearContent = ()=>{
        while (mainContainer.firstChild) {
            mainContainer.removeChild(mainContainer.firstChild);
        }
    }

    return{
        loadContent
    }

})();

export default Main;