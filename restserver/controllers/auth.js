const { response, json } = require("express");
const Usuario = require("../models/usuario");
const bcrypt = require("bcryptjs");
const { generarJWT } = require("../helpers/jwt");
const { googleVerify } = require("../helpers/google-verify");
const usuario = require("../models/usuario");

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



const googleSignIn = async (req, res) => {
 
    const { id_token } = req.body;

 try {
   const { correo, nombre, img } = await googleVerify(id_token);
   let usuario = await Usuario.findOne({ correo });
   if (!usuario) {
     // crearlo
     const data = {
       nombre,
       correo,
       password: "p",
       img,
       rol: "USER_ROLE",
       google: true,
     };
     usuario = new Usuario(data);
     await usuario.save();
   } else {
     // TODO: si existe el usuario
   }

   // si el usuario en DB
   if (!usuario.estado) {
     return res.status(401).json({
       msg: "Contacte al administrador, usuario bloqueado",
     });
   }

   // generar el jwt
   const token = await generarJWT(usuario.id);

   res.json({
     usuario,
     token,
   });
 } catch (error) {
   console.log(error);
   res.status(400).json({
     error,
   });
 }
};

module.exports = {
  login,
  googleSignIn,
};
