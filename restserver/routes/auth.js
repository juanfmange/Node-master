const { Routes, Router } = require("express");
const { check } = require("express-validator");


const {login} = require('../controllers/auth');
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

router.post('/login', [
    check('correo', 'El correo es obligatorio para iniciar sesion').isEmail(),
    check('password', 'Ingresa un password').not().isEmpty(),
    validarCampos,
] ,login);



module.exports = router;