// Menu Toggle (Existing code)
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (menuIcon.innerHTML.includes('&#9776;')) {
        menuIcon.innerHTML = '<span class="icon">X</span>';
    } else {
        menuIcon.innerHTML = '<span class="icon">&#9776;</span>';
    }
});
