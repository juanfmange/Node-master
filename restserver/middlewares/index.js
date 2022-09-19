const validarCampos = require("../middlewares/validar-campos");
const validarJWT = require("../middlewares/validar-jwt");
const verificarRoles = require("../middlewares/verificar-rol");


module.exports = {
    ...validarCampos,
    ...validarJWT,
    ...verificarRoles
}