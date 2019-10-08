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

function eliminar(contenido){
    let newact1 = text.replace(/[\/][*]+[*@(#)/.\w\s]*[*][\/]\n/gm, ""); 
    let newact2 = newact1.replace(/[\/][*]+.*[*][\/]/gm,"");
    let newact3 = newact2.replace(/[\/]{2,}.*/gm, "");
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
      dato1 = text.match(/\S.+[=]+.+[-|+|*|/]+.+/g);
      for (let i = 0; i < dato1.length; i++) {
        newact4 = newact4 + `${String(dato1[i])} <br/>`;
      } 
      document.getElementById('boolean').innerHTML = "Esta son las operaciones Boleanas: \n"+
     newact5 + "\n" + "Esta son las operaciones Basicas: \n" +newact4;
  }


  function encriptar(contenido){
    let cadena = text.match(/["].*["]|['].*[']/gm);
    let a, e, i, o, u, final;
    var encriptado = new Array();
    for (let x=0; x<cadena.length; x++) {
      a = cadena[x].replace(/a/gim, "9");
      e = a.replace(/e/gim, "0");
      i = e.replace(/i/gim, "7");
      o = i.replace(/o/gim, "3");
      u = o.replace(/u/gim, "5");
      final = u.replace(/[ ]/g, "1");
      encriptado[x]= final;
    }
    let newact1 = text.replace(cadena[0], encriptado[0]);
    let newact2 = newact1;
    for  (let x=1; x<cadena.length; x++) {
      newact2 = newact2.replace(cadena[x], encriptado[x]);
    }
    document.getElementById("contenido-archivo").innerHTML = newact2;
}