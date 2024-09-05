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

// Tab functionality for About Section
const tabLinks = document.querySelectorAll('.tab-links li');
const tabs = document.querySelectorAll('.tab');

tabLinks.forEach((tabLink) => {
    tabLink.addEventListener('click', () => {
        // Remove active class from all tab links
        tabLinks.forEach((link) => link.classList.remove('active'));
        // Add active class to the clicked tab link
        tabLink.classList.add('active');

        // Hide all tab contents
        tabs.forEach((tab) => tab.classList.remove('active'));

        // Show the corresponding tab content
        const activeTab = document.getElementById(tabLink.getAttribute('data-tab'));
        activeTab.classList.add('active');
    });
});
