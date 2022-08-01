const express = require("express");
const cors = require('cors');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        

        // Middlewares: dfuncionesq ue le aniaden otra funcionalidad a mi servidor. Es una funcion que siempre se ejecuta cuando levanto el server
        this.middlewares();
    



        // rutas de la app
        this.routes();
    }
    
    middlewares() {
        //cors
        this.app.use(cors())

        //parseo y lectura del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
    }


    routes() {
        this.app.use(this.usuariosPath, require("../routes/user"));
        
    }

    listen() {
        this.app.listen(this.port, () => {
          console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}



module.exports = Server;
