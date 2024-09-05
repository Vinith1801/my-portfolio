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

// Vertical Tab functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        tabBtns.forEach((b) => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        // Hide all tab contents
        tabContents.forEach((content) => content.classList.remove('active'));

        // Show the corresponding tab content
        const activeTab = document.getElementById(btn.getAttribute('data-tab'));
        activeTab.classList.add('active');
    });
});
