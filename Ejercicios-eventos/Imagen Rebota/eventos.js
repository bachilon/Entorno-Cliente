canvas.addEventListener("mousedown", function(evt) {
    m = oMousePos(canvas, evt);
    ctx.clearRect(0, 0, cw, ch);
    // porque no hacemos clic en el centro de la pelota
    // tenemos que calcular la distancia entre el centro y el ratón
    dx = pelota.x - m.x;
    dy = pelota.y - m.y;
    pelota.dibujar();
    // Si hemos hecho clic en la pelota, podemos arrastrar
    if (ctx.isPointInPath(m.x, m.y)) {
      arrastrar = true;
      lanzar = false;
    }
  }, false);
  
  canvas.addEventListener("mousemove", function(evt) {
    ctx.clearRect(0, 0, cw, ch);
    pelota.dibujar();
    m = oMousePos(canvas, evt);
  
  }, false);
  
  canvas.addEventListener("mouseup", function(evt) {
    arrastrar = false;
    lanzar = true;
  }, false);
  canvas.addEventListener("mouseout", function(evt) {
    arrastrar = false;
    lanzar = true;
  }, false);
  
  window.addEventListener("load", function() {
    pelota.dibujar();
  }, false);
  
  function oMousePos(canvas, evt) { // detecta la posición del ratón
    var ClientRect = canvas.getBoundingClientRect();
    return { //objeto
      x: Math.round(evt.clientX - ClientRect.left),
      y: Math.round(evt.clientY - ClientRect.top)
    }
  }