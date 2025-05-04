const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();
  emailjs
    .sendForm(
      'service_r15g18f',
      'template_yfggzqc',
      '#contact-form',
      'rV1X8EmR1hz5apK1q'
    )
    .then(
      () => {
        contactMessage.textContent = 'Message sent Successfullly';
        setTimeout(() => {
          contactMessage.textContent = '';
        }, 5000);
        contactForm.reset();
      },
      () => {
        contactMessage.textContent = 'Message not send ';
      }
    );
};

contactForm.addEventListener('submit', sendEmail);
// console.log(contactForm);

// scrollup
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
  this.scrollY >= 350
    ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

//scroll section active link

const sections = document.querySelectorAll('section[id');

const scrollActive = () => {
  const scrollDown = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector(
        '.nav_list a[href*=' + sectionId + ']'
      );
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};
window.addEventListener('scroll', scrollActive);
