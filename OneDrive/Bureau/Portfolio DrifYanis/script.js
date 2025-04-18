document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

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

  const mot = ["Etudiant", "Developpeur web", "Passionné de code", "Developpeur fullstack","21/20 minimum monsieur"];
  let index = 0;
  const element = document.getElementById("mot");
  const cursor = document.getElementById("cursor");

  let typingInterval;
  let currentWord = "";
  let currentCharIndex = 0;

  function commencerTypingAnimation() {
    if (!element) return;
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

  window.addEventListener('load', function () {
    document.body.classList.add('loaded');
  });

  const modal = document.getElementById("loginModal");
  const btn = document.getElementById("openModal");
  const span = document.querySelector(".close");
  const emailField = document.getElementById("email");
  const passwordField = document.getElementById("password");
  const loginForm = document.getElementById("loginForm");
  const loadingScreen = document.getElementById("loadingScreen");

  if (btn && modal && emailField && passwordField) {
    btn.onclick = function () {
      modal.style.display = "block";
      typeWriter(emailField, "TuEsTroBo@efrei.net", () => {
        typeWriter(passwordField, "monmotdepasse");
      });
    };
  }

  if (span && modal) {
    span.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }

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

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      modal.style.display = "none";
      loadingScreen.style.display = "flex";

      setTimeout(() => {
        window.location.href = "/home.html";
      }, 3000);
    });
  }

  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    console.log("📨 Formulaire de contact détecté");

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("📤 Tentative d'envoi EmailJS...");

      emailjs.sendForm("service_v0aajxo", "template_c3m03wx", this)
        .then(() => {
          console.log("✅ Email envoyé !");
          alert("✉️ Message envoyé avec succès !");
          this.reset();
        }, (error) => {
          console.error("❌ Erreur EmailJS :", error);
          alert("❌ Erreur lors de l'envoi : " + JSON.stringify(error));
        });
    });
  }

  emailjs.init("YHrHZ6XcV3r_PPHN7"); 
});
