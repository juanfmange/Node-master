const { Routes, Router } = require('express');
const { check } = require('express-validator');
const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete } = require('../controllers/user');
const { esRolValido, validaEmail } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get("/", usuariosGet);

router.put("/:id", usuariosPut);

router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("password","El password es obligatorio y mayor de 6 caracteres").isLength({ min: 6 }),
    check("correo", "El correo no parece un correo").isEmail(),
    check("correo").custom(validaEmail),
    // check("rol", "No es un rol permitido").isIn('ADMIN_ROLE', 'USER_ROLE'),
      check("rol").custom(esRolValido),
    validarCampos
  ],
  usuariosPost
);

router.delete("/", usuariosDelete);














module.exports = router;