const Main = (()=>{

    const mainContainer = document.querySelector('main');

    const loadContent = (content)=>{
        clearContent();
        mainContainer.appendChild(content);
    }

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