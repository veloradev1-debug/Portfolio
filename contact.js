document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // التحقق من صحة الحقول
    if (!form.name.value.trim()) {
      return showMessage('Please enter your name.', true);
    }
    if (!validateEmail(form.email.value.trim())) {
      return showMessage('Please enter a valid email address.', true);
    }
    if (!form.message.value.trim()) {
      return showMessage('Please enter your message.', true);
    }

    // عرض رسالة مؤقتة
    showMessage('Sending message...', false);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        form.reset();
        showMessage('✅ Message sent successfully! Thank you.', false);
      } else {
        showMessage('❌ Failed to send message. Please try again.', true);
      }
    } catch (error) {
      showMessage('⚠️ Network error. Please try again later.', true);
    }
  });

  function showMessage(message, isError) {
    formMessage.textContent = message;
    formMessage.style.color = isError ? '#ff6b6b' : '#00ffc8';
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});
