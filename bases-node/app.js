const fs = require('fs');
console.clear();

const a = 3;
let salida = '';

for (let i = 1; i <=10; i++) {
    salida += `${a} x ${i} = ${a * i}\n`;
}

console.log(salida);

fs.writeFile(`tabla-${a}.txt`, salida, (err) => {
    if (err) throw err;

    console.log(`tabla del ${a} creada`);
})