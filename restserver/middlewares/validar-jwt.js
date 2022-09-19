const { request, response } = require("express");
const Usuario = require("../models/usuario");
const jwt = require("jsonwebtoken");

const validarJWT = async (req = request, res = response, next) => {
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({
      msg: "no hay token en la peticion",
    });
  }

  try {
    const { uid } = jwt.verify(token, process.env.PUBLICKEY);
    //Leer el usuario que corresponde al uid
    const usuario = await Usuario.findById(uid);

    //Si no encuentra usuario (undefined)
    if (!usuario) {
      return res.status(401).json({
        msg: "Token no valido - usuario no existe en BD (undefined)",
      });
    }
    //Verificar si el uid tiene estado en true
    if (!usuario.estado) {
      return res.status(401).json({
        msg: "Token no valido - usuario en estado false",
      });
    }
    req.usuario = usuario;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "token no valido",
    });
  }
};

module.exports = {
  validarJWT,
};
