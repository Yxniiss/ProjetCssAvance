document.addEventListener('DOMContentLoaded', () => {
  // Scroll fluide
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Carrousel automatique
  const images = document.querySelectorAll('.carousel img');
  let currentIndex = 0;

  function showSlide(index) {
    images.forEach((img, i) => {
      img.style.display = i === index ? 'block' : 'none';
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  }

  if (images.length > 0) {
    showSlide(currentIndex);
    setInterval(nextSlide, 3000);
  }

  // Texte animé
  const mot = ["Etudiant", "Developpeur web", "Pasionné de code", "Developpeur fullstack"];
  let index = 0;
  const element = document.getElementById("mot");
  const cursor = document.getElementById("cursor");

  let typingInterval;
  let currentWord = "";
  let currentCharIndex = 0;

  function commencerTypingAnimation() {
    currentWord = mot[index];
    currentCharIndex = 0;
    element.textContent = '';

    typingInterval = setInterval(() => {
      element.textContent += currentWord.charAt(currentCharIndex);
      currentCharIndex++;

      if (currentCharIndex === currentWord.length) {
        clearInterval(typingInterval);
        setTimeout(changerMot, 1000);
      }
    }, 150);
  }

  function changerMot() {
    element.textContent = mot[index];
    index++;
    if (index === mot.length) {
      index = 0;
    }
    commencerTypingAnimation();
  }
  commencerTypingAnimation();

  // Chargement du body
  window.addEventListener('load', function () {
    document.body.classList.add('loaded');
  });

  // Login modal + chargement
  const modal = document.getElementById("loginModal");
  const btn = document.getElementById("openModal");
  const span = document.querySelector(".close");
  const emailField = document.getElementById("email");
  const passwordField = document.getElementById("password");
  const loginForm = document.getElementById("loginForm");
  const loadingScreen = document.getElementById("loadingScreen");

  btn.onclick = function () {
    modal.style.display = "block";
    typeWriter(emailField, "user@example.com", () => {
      typeWriter(passwordField, "monmotdepasse");
    });
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  function typeWriter(element, text, callback) {
    let i = 0;
    element.value = "";
    const speed = 50;
    const interval = setInterval(() => {
      element.value += text.charAt(i);
      i++;
      if (i === text.length) {
        clearInterval(interval);
        if (callback) callback();
      }
    }, speed);
  }

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    modal.style.display = "none";
    loadingScreen.style.display = "flex";

    setTimeout(() => {
      window.location.href = "/home.html";
    }, 5000);
  });
});
