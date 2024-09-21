const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle the active class to show/hide menu
hamburger.addEventListener('click', () => {
    console.log("Clicked")
    navLinks.classList.toggle('active');
});
