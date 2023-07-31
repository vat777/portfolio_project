
let nav = document.getElementById("logo-nav");

function changeBackground () {
    if (window.scrollY > 0) {
        nav.style.background = "#000";
    } else {
        nav.style.background = "";
    } 
 
}
   
// changing nav background to black when page scrolled
window.onscroll = changeBackground; 

let navIcon = document.getElementById("nav-icon");
let mobileNavContainer = document.getElementById("mobile-nav-container");

function changeNavIcon () {
    if (navIcon.innerHTML === '<i class="fa-solid fa-x white"></i>') {
        navIcon.innerHTML = '<i class="fa-solid fa-bars white"></i>';
        mobileNavContainer.style.opacity = 0;
        mobileNavContainer.style.top = "-150px";
        navIcon.style.transform = "rotate(0deg)";
    } else {
        

        navIcon.innerHTML = '<i class="fa-solid fa-x white"></i>';
        mobileNavContainer.style.top = "80px";
        mobileNavContainer.style.opacity = 1;
        navIcon.style.transform = "rotate(-180deg)";
    }
    
    
}

navIcon.onclick = changeNavIcon;
// mobileNavContainer.onmouseout = changeNavIcon;