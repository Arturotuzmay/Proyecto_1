//Ejemplo que borra comentarios
let mensaje = "/*Este es un comentario*/ Esto no es un comentario /*Comentario*/ :v";
let newMensaje = mensaje.replace(/[\/][*][\w ]*[*][\/]/g, ""); //Reemplaza los comentarios por vacío
console.log(newMensaje);