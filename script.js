// ----------- bandeau / canevas ------------

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
