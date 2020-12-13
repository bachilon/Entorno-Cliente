class Circulo {
    constructor(radio) {
      this.radio = radio;
    }
  
    getArea() {
      var area = Math.PI * Math.pow(this.radio, 2);
      return area;
    }
  
    getPerimetro() {
      var perimetro = 2 * Math.PI * this.radio;
      return perimetro;
    }
  }
  
  let circle1 = new Circulo(11);
  console.log(circle1.getArea());
  console.log(circle1.getPerimetro());
  
  let circle2 = new Circulo(4.44);
  console.log(circle2.getArea());
  console.log(circle2.getPerimetro());
  