document.querySelector(".menu_open").addEventListener("click" ,sideNavBar);
document.querySelector(".menu_close").addEventListener("click" ,sideNavBar);
const header = document.querySelector(".header");
const body = document.querySelector("body");

function sideNavBar() {
    document.querySelector(".sidebar").classList.toggle("active");
}

body.addEventListener("scroll",function () {
    if (document.body.scrollTop >= 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }  
})