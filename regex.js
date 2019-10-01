//Ejemplo que borra comentarios
let mensaje = "/*Este es un comentario*/ Esto no es un comentario /*Comentario*/ :v";
let newMensaje = mensaje.replace(/[\/][*][\w ]*[*][\/]/g, ""); //Reemplaza Los comentarios por vacío
// console.log(newMensaje);

var fs = require('fs'),
    readline = require('readline');

var reader = readline.createInterface({
  input: fs.createReadStream('PruebaLibrerias.java')
});


//Lee el Archivo Externo y hace algunas operaciones
reader.on('line', function (line) {
  //console.log(line);


  let newact1 = line.replace(/.+[=]+.+[+]+.+/gm, "*Esta es una operacion de suma");
  let newact2 = newact1.replace(/.+[=]+.+[-]+.+/gm, "*Esta es una operacion de resta")
  let newact3 = newact2.replace(/.+[=]+.+[*]+.+/gm, "*Esta es una operacion de multiplicacion")
  console.log("1- " + newact3);
});
