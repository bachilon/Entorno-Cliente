class Deportista {
    constructor(nombre, edad, altura, peso) {
      this.nombre = nombre;
      this.edad = edad;
      this.altura = altura;
      this.peso = peso;
    }
  
    getEdad() {
      return console.log(this.nombre + " tiene " + this.edad + " años");
    }
  
    getPeso() {
      return console.log(this.nombre + " pesa " + this.peso + " kg");
    }
  
    getAltura() {
      return console.log(this.nombre + " mide " + this.altura + " cm");
    }
  }
  
  p1 = new Deportista("Carlos", "23", "1.72", "63");
  
  p1.getEdad();
  p1.getAltura();
  p1.getPeso();
  