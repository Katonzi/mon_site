const form = document.getElementById('contact-form');
const message = document.querySelector('.form-status');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Simple validation example (HTML5 required already does much)
  if (!form.name.value || !form.email.value || !form.message.value) {
    message.textContent = "Merci de remplir tous les champs.";
    message.style.color = "red";
    return;
  }

  // Ici on simule l'envoi
  message.textContent = "Message envoyé avec succès ! Je vous répondrai rapidement.";
  message.style.color = "green";

  form.reset();
});
  // Fonction pour détecter si un élément est visible à l’écran
  function isVisible(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight - 100;
  }

  // Animation des éléments du parcours
  function showOnScroll() {
    const items = document.querySelectorAll('.parcours-item');
    items.forEach(item => {
      if (isVisible(item)) {
        item.style.opacity = 1;
        item.style.transform = 'translateY(0)';
      }
    });
  }

  window.addEventListener('scroll', showOnScroll);
  window.addEventListener('load', showOnScroll);
  window.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("titre-audio");
    audio.volume = 0.5; // Volume à moitié (entre 0 et 1)
    audio.play().catch((e) => {
      console.warn("Lecture automatique bloquée par le navigateur", e);
    });
  });
  window.addEventListener("click", () => {
  const audio = document.getElementById("titre-audio");
  if (audio.paused) {
    audio.play();
  }
}, { once: true });



