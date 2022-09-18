const { response } = require("express");
const Usuario = require("../models/usuario");
const bcrypt = require("bcryptjs");
const { generarJWT } = require("../helpers/jwt");

const login = async (req, res = response) => {
  const { correo, password } = req.body;
  try {
    // Verificar si existe el email
    const usuario = await Usuario.findOne({ correo });
    if (!usuario) {
      return res.status(400).json({
        msg: "usuario / correo no son correctos",
      });
    }
    // Si el usuario esta activo
    if (!usuario.estado) {
      return res.status(400).json({
        msg: "usuario no esta en base de datos - estatus false",
      });
    }

    // Verificar password
    const passwordValido = bcrypt.compareSync(password, usuario.password);
    if (!passwordValido) {
      return res.status(400).json({
        msg: "usuario / correo no son correctos - password",
      });
    }

    // Generar JWT
    const token = await generarJWT(usuario.id);

    res.json({
      msg: "login ok",
      correo,
      password,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Contacte al administrador",
    });
  }
};

module.exports = {
  login,
};
