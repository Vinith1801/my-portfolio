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

function prevSlide(button) {
    const carouselInner = button.parentElement.querySelector('.carousel-inner');
    const firstChild = carouselInner.firstElementChild;
    carouselInner.appendChild(firstChild);
    updateCarouselPosition(carouselInner);
}

function nextSlide(button) {
    const carouselInner = button.parentElement.querySelector('.carousel-inner');
    const lastChild = carouselInner.lastElementChild;
    carouselInner.insertBefore(lastChild, carouselInner.firstElementChild);
    updateCarouselPosition(carouselInner);
}

function updateCarouselPosition(carouselInner) {
    const width = carouselInner.clientWidth;
    carouselInner.style.transform = `translateX(-${width}px)`;
}
