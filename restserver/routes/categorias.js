const { Router } = require("express");
const { check } = require("express-validator");

const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();


//Obtener todas las categotias
router.get('/', (req, res) => {
    res.json('get');    
});

//Obtener una categoria en particular por id
router.get("/:id", (req, res) => {
  res.json("get - id");
});

//Crear categoria - cualquier persona con token valido
router.post("/", (req, res) => {
  res.json("post");
});


//Actualizar un registro - cualquier persona con token valido
router.put("/:id", (req, res) => {
  res.json("put");
});


//Borrar categoria - admin
router.delete("/:id", (req, res) => {
  res.json("delete");
});



module.exports = router;