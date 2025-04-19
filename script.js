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
const contactButn = document.getElementById("contactBtn");
const ContactImg = document.getElementById("contactIcon");

contactButn.addEventListener("mouseenter", () => {
    ContactImg.src = "css/call-yellow.png";
});

contactButn.addEventListener("mouseleave", () => {
    ContactImg.src = "css/call-dark.png";
});
const githubBtn = document.getElementById("github");
const githubImage = document.getElementById("githubImg");

githubBtn.addEventListener("mouseenter", () => {
    githubImage.src = "css/github-yellow.png";
});

githubBtn.addEventListener("mouseleave", () => {
    githubImage.src = "css/github-dark.png";
});

const npmBtn = document.getElementById("npm");
const npmImage = document.getElementById("npmImg");

npmBtn.addEventListener("mouseenter", () => {
    npmImage.src = "css/npm-yellow.png";
});

npmBtn.addEventListener("mouseleave", () => {
    npmImage.src = "css/npm-dark.png";
});

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
  