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
    
  
    //EN ESTE ESPACIO SE MANEJA LA ENCRIPTACION 
  
    document.getElementById("contenido-archivo").innerHTML = newact3;
  }

  
  function boolean(contenido){
    let newact5 = "";
    let newact4 = "";
    let dato = new Array();
    let dato1 = new Array();
    dato = text.match(/(|\()[\w.]+( |)(\={2}|\<[=]|\>[=]|\![=]|\|)( |)[\w]+(;|\))/g);
    for (let i = 0; i < dato.length; i++) {
        newact5 = newact5 + `${String(dato[i])} <br/>`;
      } 
      dato1 = text.match(/.+[=]+.+[-|+|*|/]+.+/g);
      for (let i = 0; i < dato1.length; i++) {
        newact4 = newact4 + `${String(dato1[i])} <br/>`;
      } 
      document.getElementById('boolean').innerHTML = newact5 + newact4;
  }
