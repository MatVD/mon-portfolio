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

// // coordonnées x et y de la souris afin d'initier le processus
// const mouse = {
//   x: null,
//   y: null
// }
// // Un listener sut le click et ses coordonnées
// canvas.addEventListener('click', (event) => {
//   mouse.x = event.x;
//   mouse.y = event.y;
// })

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

const form = document.getElementById('contact_form');
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
  let emailVerif = /^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/
  let error = document.getElementById('error2');
  error.innerText = ''
  if (!emailVerif.test(event.target.value)) {
    error.style.color = 'red';
    error.innerText = 'Le format de l\'email est incorrect'
  } 
})

// Ecoute sur input téléphone - que des numéros attendu ou vide
numero.addEventListener('blur', (event) => {
  let error = document.getElementById('error3');
  error.innerText = ''
  let numValide = /^0[1-9]\d{8}$/;
  if (numValide.test(event.target.value) || event.target.value != "") {
    error.style.color = 'red';
    error.innerText = 'Veuillez entrez votre numero'
  } 
})

// Ecoute sur le submit final - 
// Récupération infos et transmission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // stop la fonction submit courante
  
  // récupération des données sous forme d'objets
  let formData = {
    firstName: firstName.value,
    email: email.value,
    numero: numero.value,
    subject: subject.value,
    message: message.value
  }

  // Déclaration requette HTTP pour envoyer les datas par mail
  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.addEventListener('load',() => {
    console.log(xhr.responseText);
    let info = document.getElementById('p-info');
    info.focus();
    if(xhr.responseText == 'success') {
      info.style.color = 'green';
      info.style.fontStyle = "italic";
      info.textContent = 'Message envoyé';
      firstName.value = '';
      email.value = '';
      numero.value = '';
      subject.value = '';
      message.value = '';
    } else {
      info.style.color = 'red';
      info.style.fontStyle = "italic";
      info.textContent = 'Un problème est survenue. Veuillez réessayer'
    }
  });
  
  xhr.send(JSON.stringify(formData));

})


