// contact.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple validation check
    if (!form.name.value.trim()) {
      showMessage('Please enter your name.', true);
      return;
    }
    if (!validateEmail(form.email.value.trim())) {
      showMessage('Please enter a valid email address.', true);
      return;
    }
    if (!form.message.value.trim()) {
      showMessage('Please enter your message.', true);
      return;
    }

    // Simulate sending message
    showMessage('Sending message...', false);
    setTimeout(() => {
      form.reset();
      showMessage('Message sent successfully! Thank you.', false);
    }, 1500);
  });

  function showMessage(message, isError) {
    formMessage.textContent = message;
    formMessage.style.color = isError ? '#ff6b6b' : '#00ffc8';
  }

  function validateEmail(email) {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});