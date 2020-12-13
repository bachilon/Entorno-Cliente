function extension(path) {
    let absolute = path.split("/");
    let rute = absolute[absolute.length - 1];
    alert(rute);
  }
  
  extension("C:/Users/johnsmith/Music/Beethoven_5.mp3");
  