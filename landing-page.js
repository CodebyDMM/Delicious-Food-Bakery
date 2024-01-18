const header = document.getElementById("header");
const logo = document.getElementById("logo");
const mainMargin = document.querySelector(".landing-main");

const scroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 10) {
        header.classList.add("shrunk-header")
        logo.classList.add("shrunk-logo");
        mainMargin.style.marginTop = '125px'; 
    } else {
       
    }
}

window.addEventListener('scroll', scroll);
