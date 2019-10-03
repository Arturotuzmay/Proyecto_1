var fs = require('fs'),
readline = require('readline');

var reader = readline.createInterface({
  input: fs.createReadStream('Programa_Ejemplo.java')
});

reader.on('line', function (line) {
  let newact1 = line.replace(/[\/][*]+.*[*][\/]/gm,""); /*Elimina comentarios de éste tipo*/
  let newact2 = newact1.replace(/[\/]{2,}.*/gm, ""); //Elimina comentarios de éste tipo
  let newact3 = newact2.replace(/[\/][*]+[*@(#)/.\w\s]*[*][\/]\n/gm, ""); /*Elimina
  comentarios con saltos de línea*/
  console.log(newact3);
});

//resultado.innerHTML = newact3;
