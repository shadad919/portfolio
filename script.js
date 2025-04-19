const contactBtn = document.getElementById('contactBtn');
const modal = document.getElementById('contactFormModal');
const closeModalBtn = document.getElementById('closeModalBtn');

// Open modal
contactBtn.onclick = function () {
  modal.style.display = 'block';
};

// Close modal
closeModalBtn.onclick = function () {
  modal.style.display = 'none';
};

// Close modal if clicked outside
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    emailjs.sendForm('service_82bcwvc', 'template_m3j7h3r', this) // Replace with your real template ID
      .then(() => {
        alert('Message sent successfully!');
        document.querySelector('form').reset();
      }, (error) => {
        alert('Failed to send message: ' + error.text);
      });
  });
  