const express = require("express");
const cors = require("cors");

const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.paths={
        auth:"/api/auth",
        usuarios: '/api/usuarios',
        categorias: '/api/categorias'
    }



//    this.usuariosPath = "/api/usuarios";
//    this.authPath ="/api/auth";



    // Conectar a la base de datos
    this.conectarDB();
    // Middlewares: dfuncionesq ue le aniaden otra funcionalidad a mi servidor. Es una funcion que siempre se ejecuta cuando levanto el server
    this.middlewares();

    // rutas de la app
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
  }

  middlewares() {
    //cors
    this.app.use(cors());

    //parseo y lectura del body
    this.app.use(express.json());

    //Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.paths.auth, require("../routes/auth"));
    this.app.use(this.paths.usuarios, require("../routes/user"));
    this.app.use(this.paths.categorias,require("../routes/categorias"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto ${this.port}`);
    });
  }
}


module.exports = Server;
