//Ejemplo que borra comentarios
let mensaje = "/*Este es un comentario*/ Esto no es un comentario /*Comentario*/ :v";
let newMensaje = mensaje.replace(/[\/][*][\w ]*[*][\/]/g, ""); //Reemplaza Los comentarios por vacío
// console.log(newMensaje);