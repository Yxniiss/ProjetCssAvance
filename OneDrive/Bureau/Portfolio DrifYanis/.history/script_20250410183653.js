
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
      setInterval(nextSlide, 3000); // change every 3 seconds
    }
  });
  
  const mot = ["Etudiant", "Developpeur web", "Pasionné de code","Developpeur fullstack"];
  let index = 0;
  const element = document.getElementById("mot");
  const cursor = document.getElementById("cursor");
  
  let typingInterval;
  let currentWord = "";
  let currentCharIndex = 0;
  
  function  commencerTypingAnimation(){
    currentWord=mot[index];
    currentCharIndex = 0;
    element.textContent = '';
  
    typingInterval = setInterval(() =>{
      element.textContent += currentWord.charAt(currentCharIndex);
      currentCharIndex++;
  
      if(currentCharIndex === currentWord.length){
        clearInterval(typingInterval);
        setTimeout(changerMot,1000);
      }
    },150);
  }
  
  function changerMot(){
    element.textContent=mot[index];
    index++;
    if(index===mot.length){
      index=0;
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

  // Ouvrir la modale + démarrer l'effet machine à écrire
  btn.onclick = function () {
    modal.style.display = "block";
    typeWriter(emailField, "user@example.com", () => {
      typeWriter(passwordField, "monmotdepasse");
    });
  };

  // Fermer la modale
  span.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Effet d'écriture automatique
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

  // Soumettre le formulaire
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Affiche l'écran de chargement
modal.style.display = "none"; // ferme la modale
document.getElementById("loadingScreen").style.display = "flex";

// Attends 5 secondes puis redirige
setTimeout(() => {
  window.location.href = "/home.html"; // ou main.html
}, 5000);
  });