// JavaScript to handle the toggle functionality for multiple collapsibles with smooth scrolling animation
const collapsibleBtns = document.querySelectorAll('.collapsible-btn');

collapsibleBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const parent = this.parentElement;
    const isActive = parent.classList.contains('active');

    // Close other active sections
    document.querySelectorAll('.collapsible').forEach(elem => {
      if (elem !== parent && elem.classList.contains('active')) {
        elem.classList.remove('active');
        const content = elem.querySelector('.content');
        content.style.display = 'none';
      }
    });

    if (!isActive) {
      parent.classList.add('active');
      const content = parent.querySelector('.content');
      content.style.display = 'block';
      // Smooth scroll to the clicked section
      content.scrollIntoView({ behavior: 'smooth' });
    } else {
      parent.classList.remove('active');
      const content = parent.querySelector('.content');
      content.style.display = 'none';
    }
  });
});

