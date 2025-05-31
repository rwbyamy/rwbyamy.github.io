  // Toggle mobile menu
 const toggleBtn = document.getElementById('togglebtn');
const navLinks = document.getElementById('navlinks');
const menuIcon = document.getElementById('menu-icon');
const navItems = document.querySelectorAll('.navlinks a'); // Get all nav links

toggleBtn.addEventListener('click', function () {
    navLinks.classList.toggle('open');
    if (navLinks.classList.contains('open')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    } else {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }
});

// 👇 Close menu when any nav link is clicked
navItems.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        }
    });
});

  // Typed text animation

new Typed(".input", {
    strings: ["Full-stack Developer", "Graphic Designer", "IT Solutions Specialist"],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
});

  // Contact form submission with reset
  const contactForm = document.querySelector('.contact-form');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Stop default form behavior

    const formData = new FormData(contactForm);
    const action = contactForm.getAttribute('action');

    fetch(action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        contactForm.reset(); // Clear form fields
      } else {
        alert('Oops! Something went wrong.');
      }
    }).catch(error => {
      alert('There was a problem sending your message.');
    });
  });

