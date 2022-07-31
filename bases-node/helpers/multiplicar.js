const fs = require("fs");

const crearArchvio = async (a = 5) => {
    try {
          let salida = "";

          for (let i = 1; i <= 10; i++) {
            salida += `${a} x ${i} = ${a * i}\n`;
          }

          console.log(salida);

          fs.writeFileSync(`tabla-${a}.txt`, salida);

          return `tabla-${a}.txt creado`;
    } catch (err) {
        throw err
    }



};

module.exports = {
  crearArchvio
};
