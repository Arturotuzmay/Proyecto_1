let stringText;
function leerArchivo(e) {
  var archivo = e.target.files[0];
  if (!archivo) {
    return;
  }
  var lector = new FileReader();
  lector.onload = function(e) {
    var contenido = e.target.result;
    mostrarContenido(contenido);
    stringText = contenido;
  };
  lector.readAsText(archivo);
}

function mostrarContenido(contenido) {
  var elemento = document.getElementById('contenido-archivo');
  elemento.innerHTML = contenido;
}

document.getElementById('file-input').addEventListener('change', leerArchivo, false);



var fs = require('fs'),
    readline = require('readline');

var reader = readline.createInterface({
  input: fs.createReadStream('Programa_Ejemplo.java')
});

reader.on('line', function (line) {
  //console.log(line);

 
  let newact1 = line.replace(/.+[=]+.+[-|+|*|/]+.+/g, "Operaciones Basicas");
  
  
  let newact2 = newact1.replace(/.+[=|<|>|!]+[=]+.+/gm, "*Boolean*")
  let newact3 = newact2.replace(/.+[!|<|>]+.+/gm, "*Boolean*")

  console.log(newact3);
});