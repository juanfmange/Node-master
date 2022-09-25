const { Routes, Router } = require("express");
const { check } = require("express-validator");


const {login, googleSignIn} = require('../controllers/auth');
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

router.post('/login', [
    check('correo', 'El correo es obligatorio para iniciar sesion').isEmail(),
    check('password', 'Ingresa un password').not().isEmpty(),
    validarCampos,
], login);

router.post(
  "/google",
  [
    check("id_token", "Es necesario el id_token").not().isEmpty(),
    validarCampos,
  ],
  googleSignIn
);



module.exports = router;