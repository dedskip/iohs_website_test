// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      appearOnScroll.unobserve(entry.target); // animate once
    }
  });
}, {
  threshold: 0.2
});

// Hamburger menu toggle
const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});



faders.forEach(el => appearOnScroll.observe(el));


// Placeholder JS file
console.log("Welcome to Inside Out Home Solutions!");
