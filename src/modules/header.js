import image from '../resources/logo.svg';

const Header = (()=>{

    const img  = document.getElementById('logo-image');
    img.src = image;
})();

export default Header;