var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var cw = canvas.width = 600, cx = cw / 2;
var ch = canvas.height = 600, cy = ch / 2;

var arrastrar = false;
var lanzar = false;
var rebote = -.1; // > -1 para frenar la pelota
var dx, dy;
var m = {
  x: cx,
  y: cy
}; // inicializa el ratón

function Pelota(r) {
  this.r = r;
  this.x = cw/2;
  this.y = ch/2;
  //pocision inicila pelota
  this.inicial_x = this.x;
  this.inicial_y = this.y;
  this.vx = 0;
  this.vy = 0;
  this.color = "#00A5D1";
}
Pelota.prototype.dibujar = function() {
  // dibuja la pelota
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
  ctx.fill();
  //cambia el estilo del cursor si el ratón esta encima de la pelota
  if (ctx.isPointInPath(m.x, m.y)) {
    canvas.style.cursor = "crosshair";
  } else {
    canvas.style.cursor = "default";
  }
}

Pelota.prototype.arrastrar = function(m) {
  // calcula las nuevas coordenadas de la pelota
  this.x = m.x + dx;
  this.y = m.y + dy;
  
  this.colision();
  // calcula la velocidad (vx y vy) de la pelota mientras la arrastramos
  this.vx = this.x - this.inicial_x;
  this.vy = this.y - this.inicial_y;
  // actualiza el valor inicial
  this.inicial_x = this.x;
  this.inicial_y = this.y;
}

Pelota.prototype.lanzar = function(m) {
  
  
  this.x += this.vx;
  this.y += this.vy;

  this.colision();

}

Pelota.prototype.colision = function() {
  if (this.x > cw - this.r) {
    this.x = cw - this.r;
    this.vx *= rebote;

  } else if (this.x < this.r) {
    this.x = this.r;
    this.vx *= rebote;
  }
  if (this.y > ch - this.r) {
    this.y = ch - this.r;
    this.vy *= rebote;

  } else if (this.y < this.r) {
    this.y = this.r
    this.vy *= rebote;
  }
}

// dibuja una nueva pelota
var pelota = new Pelota(15);

function Animacion() {
  elId = window.requestAnimationFrame(Animacion);
  if (arrastrar) {
    pelota.arrastrar(m);
  }
  if (lanzar) {
    pelota.lanzar(m);
  }
  // limpia el canvas
  ctx.clearRect(0, 0, cw, ch);
  ctx.color = 'BLACK';
  //dibuja la pelota
  pelota.dibujar();
}
Animacion()