
let nav = document.getElementById('logo-nav');

function changeBackground () {
    if (window.scrollY > 0) {
        nav.style.backgroundColor = "black";
    } else {
        nav.style.backgroundColor = 'unset';
    }
    
    console.log(nav.style.backgroundColor);
}
   
// changing nav background to black when page scrolled
window.onscroll = changeBackground; 


