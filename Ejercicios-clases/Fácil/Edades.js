class Person {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    compararEdad(person) {
      if (person.edad > this.edad) {
        return console.log(person.nombre + " es mayor que yo");
      } else if (person.edad == this.edad) {
        return console.log(person.nombre + ",tiene la misma edad.");
      } else {
        return console.log(person.nombre + " es menor que yo");
      }
    }
  }
  
  p1 = new Person("Carlos", 23);
  p2 = new Person("Melen", 23);
  p3 = new Person("Reina", 20);
  p4 = new Person("Gabri", 27);
  
  p1.compararEdad(p2);
  p2.compararEdad(p1);
  p1.compararEdad(p3);
  p1.compararEdad(p4);
  