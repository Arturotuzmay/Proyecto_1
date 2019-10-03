var fs = require('fs'),
readline = require('readline');

var reader = readline.createInterface({
    input: fs.createReadStream('Programa_Ejemplo.java')
});

reader.on('line', function (line) {
    let newact1 = line.replace(/.+[=]+.+[-|+|*|/]+.+/g, "Operaciones Basicas");
    let newact2 = newact1.replace(/.+[=|<|>|!]+[=]+.+/gm, "*Boolean*");
    let newact3 = newact2.replace(/.+[!|<|>]+.+/gm, "*Boolean*");
    console.log(newact3);
});
