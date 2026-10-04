const navLink = document.querySelector('.menu-tab');
const menuToggle = document.querySelector('.menu-toggle');
const allLinks = document.querySelectorAll('.menu-tab a'); 

menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    if(navLink){
        navLink.classList.toggle('active');
    }
});

allLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLink.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (!navLink.contains(e.target) && !menuToggle.contains(e.target)) {
        navLink.classList.remove('active');
    }
});