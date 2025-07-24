// // Typing Animation
// const typingText = document.querySelector('.typing-text');
// const phrases = ['Frontend Developer', 'UI Enthusiast', 'Problem Solver'];
// let phraseIndex = 0;
// let charIndex = 0;
// let isDeleting = false;

// function type() {
//   const currentPhrase = phrases[phraseIndex];
  
//   if (isDeleting) {
//     typingText.textContent = currentPhrase.substring(0, charIndex - 1);
//     charIndex--;
//   } else {
//     typingText.textContent = currentPhrase.substring(0, charIndex + 1);
//     charIndex++;
//   }

//   if (!isDeleting && charIndex === currentPhrase.length) {
//     isDeleting = true;
//     setTimeout(type, 1000);
//   } else if (isDeleting && charIndex === 0) {
//     isDeleting = false;
//     phraseIndex = (phraseIndex + 1) % phrases.length;
//     setTimeout(type, 500);
//   } else {
//     setTimeout(type, 100);
//   }
// }

// // Start typing animation
// type();

// // Mobile Navigation Toggle
// const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('nav ul');

// hamburger.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
//   hamburger.classList.toggle('active');
// });

// // Smooth Scrolling for Navigation Links
// document.querySelectorAll('nav a').forEach(anchor => {
//   anchor.addEventListener('click', function(e) {
//     e.preventDefault();
//     const targetId = this.getAttribute('href');
//     const targetSection = document.querySelector(targetId);
    
//     window.scrollTo({
//       top: targetSection.offsetTop - 70,
//       behavior: 'smooth'
//     });

//     // Close mobile menu after clicking
//     if (navLinks.classList.contains('active')) {
//       navLinks.classList.remove('active');
//       hamburger.classList.remove('active');
//     }
//   });
// });

// // Sticky Navigation on Scroll
// window.addEventListener('scroll', () => {
//   const navbar = document.getElementById('navbar');
//   if (window.scrollY > 100) {
//     navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.95)';
//   } else {
//     navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.9)';
//   }
// });