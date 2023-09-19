const Main = (()=>{

    const mainContainer = document.querySelector('main');

    //load a single element into the main area
    const loadContent = (content)=>{
        mainContainer.appendChild(content);
    }

    const loadFromArray = (array)=>{
        clearContent();
        array.forEach(element => {
            mainContainer.appendChild(element);
        });
    }

    //clear all content 
    const clearContent = ()=>{
        while (mainContainer.firstChild) {
            mainContainer.removeChild(mainContainer.firstChild);
        }
    }

    return{
        loadContent,
        loadFromArray,
        clearContent,
    }

})();

export default Main;