document.addEventListener("DOMContentLoaded", ()=>{
  const form = document.getElementById('contact-form');
const message = document.querySelector('.form-status');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const userMessage = document.getElementById("message").value.trim();

    if(!name || !email || !userMessage){
      message.textContent = "Remplissez tous les champs de ce formulaire!";
      message.style.color = "red";
      return;
    }
    
    try{
        const result = await fetch("https://api-ecole.onrender.com/api/developpeur", {
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({username:name, usermail:email, usermessage:userMessage})
        });

        const data = await result.json();
       
        message.textContent = data.message;
        message.style.color = "green";
        form.reset();
    }
    catch(err){
      console.error("Erreur lors de la récupération de données."); 
      message.textContent = err.message;
      message.style.color = "red";
    }
  
});
});
 



