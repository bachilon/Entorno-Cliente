class Helado {
    constructor(tipo, valor) {
      this.tipo = tipo;
      this.valor = valor;
    }
  
    getTipo() {
      return this.tipo;
    }
  
    realValue() {
      for (var i = 0; i < valoresDulces.length; i++) {
        if (valoresDulces[i][0] == this.tipo) {
          var value = this.valor + valoresDulces[i][1];
        }
      }
      return value;
    }
  }
  
  const valoresDulces = [
    ["Chocolate", 10],
    ["Fresa", 10],
    ["Chispas de chocolate", 5],
    ["Vainilla", 5],
    ["Natural", 0]
  ];
  
  ice1 = new Helado("Chocolate", 13);
  ice2 = new Helado("Vainilla", 0);
  ice3 = new Helado("Fresa", 7);
  ice4 = new Helado("Natural", 18);
  ice5 = new Helado("Chispas de chocolate", 3);
  console.log(masDulce([ice1, ice2, ice3, ice4, ice5]));
  console.log(masDulce([ice3, ice1]));
  console.log(masDulce([ice3, ice5]));
  
  function masDulce(arrayHelados) {
    var helado = "";
    var valorMax = 0;
    for (var i = 0; i < arrayHelados.length; i++) {
      if (valorMax < arrayHelados[i].realValue()) {
        helado = arrayHelados[i].getTipo();
        valorMax = arrayHelados[i].realValue();
      }
    }
    return `El helado más dulce es ${helado} con valor de dulzura ${valorMax}`;
  }
  