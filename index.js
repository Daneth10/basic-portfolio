// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  
  // Carousel Navigation
  let currentIndex = 0;
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  
  document.getElementById('next').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
  });
  
  document.getElementById('prev').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
  });
  
  function updateCarousel() {
    items.forEach((item, index) => {
      item.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
  }
  
  // Back to Top Button
  const backToTopButton = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  
  backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Form Validation
  const form = document.getElementById('contact-form');
  const formResponse = document.getElementById('form-response');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (name && email && message) {
      formResponse.textContent = "Thank you for your message!";
      form.reset();
    } else {
      formResponse.textContent = "Please fill in all fields.";
      formResponse.style.color = "red";
    }
  });
  