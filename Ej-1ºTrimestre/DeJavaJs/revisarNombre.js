function revisarNombre()
{
    var nombre = document.getElementById('nombre').value;
    var divHTML = document.getElementById('resultado');
    var numeroVocales = countVowel(nombre);
    var mensaje = '';
    if(numeroVocales > (nombre.length-numeroVocales))
    {
       mensaje = 'Tu nombre tiene más vocales :)';

    }else if(numeroVocales < (nombre.length-numeroVocales)){
       mensaje = ' F en el chat!!! Tu nombre tiene más consonantes :(';

    }else{
      mensaje = 'Al paloo!!!Tiene el mismo número de vocales que consonantes';
    }
 
    divHTML.innerHTML = mensaje;
}

function countVowel(_nombre)
{
    var arr = _nombre.split('');
    var vocales = arr.filter(isVowel);
    
    //var numConsonantes = _nombre.length - vocales.length;
  
    return vocales.length;
}

function isVowel(_letra)
{
  var vocales = 'aeiouáéíóú';
  
  for(var i of vocales)
  {
      console.log("Salida: " + i);
      //return _letra.toLowerCase() == i;
   
      if(_letra.toLowerCase() == i){
         return true;
      }
         
  }
  
  return false; 
}