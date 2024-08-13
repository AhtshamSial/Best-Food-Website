const navbarCollapse = document.querySelector(".navbar-toggler");
const heroSection = document.querySelector(".bsb-hero-2");

navbarCollapse.addEventListener('click' , () => {
    if(heroSection.classList[2] === undefined){
        heroSection.classList.add("m-top-320");
    } else {
        heroSection.classList.remove("m-top-320");
    }


})