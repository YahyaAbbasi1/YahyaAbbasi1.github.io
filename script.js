// Add this to your script section
// Typewriter Effect
const typewriter = new Typewriter('#typewriter', {
  loop: false,
  delay: 50,
  deleteSpeed: 30,
});

typewriter
  .typeString('Transforming Ideas')
  .pauseFor(500)
  .typeString('<br>Into <span class="text-gradient">Digital Experiences</span>')
  .start();

// Custom cursor
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .tech-item, .project-card').forEach(item => {
  item.addEventListener('mouseenter', () => {
    cursor.classList.add('cursor-hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-hover');
  });
});