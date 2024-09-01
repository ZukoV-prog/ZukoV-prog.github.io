// Sticky Navigation
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });
  
  // Smooth Scrolling
  document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
     /* document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  }); */    /* REMEMBER TO UN-COMMENT */
  
  // Highlight Active Section
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navigation a');
  
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 50;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });
  
   // JavaScript for Listing section 
  let currentIndex = 0;
const listings = document.querySelectorAll('.listing');
const totalListings = listings.length;

function showListing(index) {
  listings.forEach((listing, i) => {
    listing.style.display = i === index ? 'block' : 'none';
  });
}

function nextListing() {
  currentIndex = (currentIndex + 1) % totalListings;
  showListing(currentIndex);
}

setInterval(nextListing, 5000); // Change listing every 5 seconds
showListing(currentIndex);

 // JavaScript for Footer section
 document.querySelectorAll('.social-icons a').forEach(icon => {
  icon.addEventListener('click', function(e) {
    e.preventDefault();
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600); // Remove ripple after animation
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const lazyImages = document.querySelectorAll('.listing img');

  const lazyLoad = function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src; // Use a data-src attribute for the real image URL
        observer.unobserve(img);
      }
    });
  };

  const observer = new IntersectionObserver(lazyLoad, {
    rootMargin: "0px 0px 50px 0px"
  });

  lazyImages.forEach(img => {
    observer.observe(img);
  });
});
