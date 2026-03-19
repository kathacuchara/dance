/* ============================================
   CAROUSEL FUNCTIONALITY
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  const carousels = document.querySelectorAll('.carousel');
  const navButtons = document.querySelectorAll('.carousel-nav');

  navButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      const carousel = carousels[index];
      const isNext = this.classList.contains('next');
      
      if (isNext) {
        carousel.scrollLeft += 350; // Scroll right
      } else {
        carousel.scrollLeft -= 350; // Scroll left
      }
    });
  });

  // Allow smooth scrolling behavior
  const style = document.createElement('style');
  style.textContent = `
    .carousel {
      scroll-behavior: smooth;
    }
  `;
  document.head.appendChild(style);
});

/* ============================================
   SMOOTH LINKING FOR NAVIGATION
   ============================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
