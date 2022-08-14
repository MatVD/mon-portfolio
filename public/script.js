// ----------- bandeau / canevas ------------ //

const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');
const sectionBandeau = document.getElementById('bandeau');
const particulesArray = [];


canvas.width = sectionBandeau.clientWidth;
canvas.height = sectionBandeau.clientHeight;

window.addEventListener('resize', (event) => {
    canvas.width = sectionBandeau.clientWidth;
    canvas.height = sectionBandeau.clientHeight;
})

const mouse = {
  x: null,
  y: null
}

canvas.addEventListener('click', (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
})


class Particule {
  constructor(){
    // this.x = canvas.width;
    // this.y = canvas.height;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY
  }

  draw() {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(this.x, this.y - 75, this.size, 0, Math.PI * 2); // mousse.Y - 75 car l'axe y de la souris est faussé dy fait de la nav qui fait 75px de height
    ctx.fill();
  }
}

function init() {
  for (let i = 0; i <150; i++) {
    particulesArray.push(new Particule());
  }
}

init();

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


// ----------- validation formulaire ------------ //

const form = document.getElementById('contact_form');
const firstName = document.getElementById('name_input');
const email = document.getElementById('email_input');
const numero = document.getElementById('telephone_input');
const subject = document.getElementById('subject_input');
const message = document.getElementById('message_input');




firstName.addEventListener('blur', (event) => {
  if (event.target.value == "") {
    error.innerText = 'Le nom est nécessaire'
  } else {
    error.innerText = ''
  }
})

email.addEventListener('blur', (event) => {
  let emailVerif = /^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/
  if (!emailVerif.test(event.target.value)) {
    error.innerText = 'Le format de l\'email est incorrect'
  } else {
    error.innerText = ''
  }
})

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  let formData = {
    firstName: firstName.value,
    email: email.value,
    numero: numero.value,
    subject: subject.value,
    message: message.value
  
  }

  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = () => {
    console.log(xhr.responseText);
    if(xhr.responseText == 'success') {
      alert('Email envoyé');
      firstName.value = '';
      email.value = '';
      numero.value = '';
      subject.value = '';
      message.value = '';
    } else {
      alert('Un problème est survenue')
    }
  }

  xhr.send(JSON.stringify(formData));
})


