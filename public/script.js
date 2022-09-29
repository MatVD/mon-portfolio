// ----------- bandeau / canvas ------------ //
// animation de neige par dessus le bandeau //
const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');
const sectionBandeau = document.getElementById('bandeau');
const particulesArray = [];

// déclaration des dimenssions du canvas => de la taille du bandeau
canvas.width = sectionBandeau.clientWidth;
canvas.height = sectionBandeau.clientHeight;

// ajustement taille canvas après resize de la page
window.addEventListener('resize', (event) => {
    canvas.width = sectionBandeau.clientWidth;
    canvas.height = sectionBandeau.clientHeight;
})

// Class particule 
class Particule {
  constructor(){
    this.x = Math.random() * canvas.width; // surgissement d'une particule aléatoirement
    this.y = Math.random() * canvas.height; 
    this.size = Math.random() * 3 + 1; // taille aléatoire
    this.speedX = Math.random() * 3 - 1.5; 
    this.speedY = Math.random() * 3 - 1.5; // vitesse aléatoire
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY
  }

  // code qui dessine les particles - methode arc() de canvas
  draw() {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(this.x, this.y - 75, this.size, 0, Math.PI * 2); // mousse.Y - 75 car l'axe y de la souris est faussé dy fait de la nav qui fait 75px de height
    ctx.fill();
  }
}

// ajout des particules au tableaux qui sera ensuite utilisé ci-dessous
function init() {
  for (let i = 0; i <150; i++) {
    particulesArray.push(new Particule());
  }
}
init();

// fonction pour parcourir le tableau et ses particules 
// utilisé dans la fonction animate() ci-dessous
function handlerParticles() {
  for (let i = 0; i < particulesArray.length; i++) {
    particulesArray[i].update();
    particulesArray[i].draw();
  }
}


function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handlerParticles();
  requestAnimationFrame(animate);
}
animate()

// --------- affichage progessive img ----------- //
// ---------------------------------------------- //



// ----------- validation formulaire ------------ //
// ---------------------------------------------- //

const firstName = document.getElementById('name_input');
const email = document.getElementById('email_input');
const numero = document.getElementById('telephone_input');
const subject = document.getElementById('subject_input');
const message = document.getElementById('message_input');

// Nom obligatoire - écoute dessus
firstName.addEventListener('blur', (event) => {
  let error = document.getElementById('error1');
  error.innerText = ''
  if (event.target.value == "") {
    error.style.color = 'red';
    error.innerText = 'Le nom est nécessaire'
  }
})

// Email obligtoire et vérif sur la forme
email.addEventListener('input', (event) => {
  let emailVerif = /^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/;
  let error = document.getElementById('error2');
  error.innerText = ''
  if (!emailVerif.test(event.target.value)) {
    error.style.color = 'red';
    error.innerText = 'Le format de l\'email est incorrect'
  } 
})

// Ecoute sur input téléphone - que des numéros attendu ou vide
numero.addEventListener('input', (event) => {
  let numValide = /^0[1-9]\d{8}$/;
  let error = document.getElementById('error3');
  error.innerText = ''
  if (numValide.test(event.target.value) || event.target.value == "") {
    error.innerText = ''
  } else {
    error.style.color = 'red';
    error.innerText = 'Numero non valide'
  }
})


//========== Gestion du contactForm ============//
// Utilisation d'EMAILJS.COM

window.onload = function() {
  let form = document.getElementById('contact-form');
  console.log(form.elements)
  form.addEventListener('submit', function(event) {
    let info = document.getElementById('p-info');
    info.style.fontStyle = "italic";
    event.preventDefault();
    // these IDs from the previous steps
    emailjs.sendForm('contact_service', 'contact_form',  this)
      .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          info.style.color = '#0876a5da';
          info.innerText = "Merci de m'avoir contacté. Je vous répond dans les plus bref délais"
          setTimeout(() => {
            info.innerText = ""
          }, 15000);
      }, function(error) {
          console.log('FAILED...', error);
          info.style.color = 'red';
          info.innerText = "Oupss !!! Un petit problème durant l'envoie. Veuillez recommencer svp !!"
      })
      .then(function() {
        event.target.reset();
        error.innerText = '';
      });
  });
}

