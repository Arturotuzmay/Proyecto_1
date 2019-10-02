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
  let newact2 = newact1.replace(/.+[=]+.+[-]+.+/gm, "*Esta es una operacion de resta");
  let newact3 = newact2.replace(/.+[=]+.+[*]+.+/gm, "*Esta es una operacion de multiplicacion");
  let newact4 = newact3.replace(/.+[=]+.+[/]+.+/gm, "*Esta es una operacion de division");
  
  let newact5 = newact4.replace(/.+[=]+[=]+.+/gm, "*igual *")
  //let newact5 = newact4.replace(/==/gm, "x")
  let newact6 = newact5.replace(/.+[<]+[=]+.+/gm, "*menigual * ")
  let newact7 = newact6.replace(/.+[>]+[=]+.+/gm, "*mayigual * ")
  let newact8 = newact7.replace(/.+[<]+.+/gm, "*menor * ")
  let newact9 = newact8.replace(/.+[>]+.+/gm, "*mayor * ")
  let newact10 = newact9.replace(/.+[!]+[=]+.+/gm, "*difigual * ")
  let newact11 = newact10.replace(/.+[!]+.+/gm, "*dife * ")

  /*Cuando agregues los tuyos carlos, vas a empezar desde newact11 o sea si 
  para lectura en lugar de "line" pones "newact11" y en console.log 
  pondrias el ultimo resultado que te da*/
  console.log(newact11);
});
