class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  
    getTitle() {
      return `Title: ${this.title}`;
    }
  
    getAuthor() {
      return `Author: ${this.author}`;
    }
  }
  
  const PP = new Book("Don Quijote de la mancha", "Miguel de Cervantes");
  const H = new Book("Las tinieblas y el alma", "Ken Follett");
  const WP = new Book("Juego de Tronos", "James Hibberd");
  var contador = 1;
  informacionBooks(PP);
  informacionBooks(H);
  informacionBooks(WP);
  
  function informacionBooks(book) {
    console.log(`Número del libro, título y autor.${contador}`);
    console.log(book.title);
    console.log(book.auhtor);
    console.log(book.getTitle());
    console.log(book.getAuthor());
    contador++;
  }
  