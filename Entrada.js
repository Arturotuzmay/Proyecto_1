var text;
function leerArchivo(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }
    var lector = new FileReader();
    lector.onload = function(e) {
        var contenido = e.target.result;
        mostrarContenido(contenido);
        text = contenido;
    };
    lector.readAsText(archivo);
}
  
function mostrarContenido(contenido) {
    var elemento = document.getElementById('contenido-archivo');
    elemento.innerHTML = contenido;
}
  
document.getElementById('file-input').addEventListener('change', leerArchivo, false);

function modificacionGeneral(contenido){
    let newact1 = text.replace(/[\/][*]+[*@(#)/.\w\s]*[*][\/]\n/gm, ""); 
    let newact2 = newact1.replace(/[\/][*]+.*[*][\/]/gm,"");
    let newact3 = newact2.replace(/[\/]{2,}.*/gm, ""); 
    
    
    //PARTE QUE ELIMINA A LOS NUMEROS BOOLEANOS Y OPERACIONES BASICAS 
    let newact4 = newact3.replace(/.+[=]+.+[-|+|*|/]+.+/g, "Operaciones Basicas");
    let newact5 = newact4.replace(/.+[=|<|>|!]+[=]+.+/gm, "*Boolean*");
    let newact6 = newact5.replace(/.+[!|<|>]+.+/gm, "*Boolean*");
  
    //EN ESTE ESPACIO SE MANEJA LA ENCRIPTACION 
  
    document.getElementById("contenido-archivo").innerHTML = newact6;
  
  }