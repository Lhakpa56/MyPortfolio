/*=============== Active Link =============== */

/*=============== Mixitup Filter =============== */
var mixer = mixitup(containerEl, {
  selectors: {
    target: '.blog__item'
  },
  animation: {
    duration: 300
  }
});

/*=============== Navbar section =============== */
const navLinks = document.querySelectorAll('.nav__link');
  const sections = document.querySelectorAll('.main-section');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Hide all sections
      sections.forEach(sec => sec.classList.remove('active'));

      // Show selected section
      const target = link.getAttribute('data-target');
      document.getElementById(target).classList.add('active');
    });
  });

  // Optional JS if you're not using <a href="#contact">
document.querySelector('.contact__scroll').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelectorAll('.main-section').forEach(s => s.classList.remove('active'));
  document.getElementById('contact').classList.add('active');

  document.querySelectorAll('.nav__link').forEach(l => l.classList.remove('active'));
  document.querySelector('[data-target="contact"]').classList.add('active');
});


/*=============== EmailJS Contact Form =============== */
(function(){
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
  })();

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
      .then(function() {
        alert('Message sent successfully! Thank you for contacting me.');
        document.getElementById('contact-form').reset();
      }, function(error) {
        alert('Oops... something went wrong. Please try again.');
        console.error('EmailJS error:', error);
      });
  });

  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('show-menu');
    });
  }
