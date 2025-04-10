
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

  // Bouton vers /home.html avec loader
  const button = document.getElementById('modern-button');
  const loader = document.getElementById('loader');

  if (button && loader) {
    button.addEventListener('click', function () {
      loader.classList.remove('loaded');

      setTimeout(function () {
        window.location.href = '/home.html';
      }, 5000);
    });