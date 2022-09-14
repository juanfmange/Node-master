const { response, request } = require("express");
const Usuario = require("../models/usuario");
const bcryptjs = require('bcryptjs');
const validador = require('express-validator');

const usuariosGet = (req = request, res = response) => {
  const { q, nombre = "sin nombre", apikey, page = 1, limit = 10 } = req.query;

  res.json({
    ok: true,
    msg: "probando el api con controlador de get",
    q,
    nombre,
    apikey,
    page,
    limit,
  });
};

const usuariosPut = (req, res = response) => {
  const { id } = req.params;
  res.json({
    msg: "put api desde el controlador",
    id,
  });
};

const usuariosPost = async (req, res = response) => {

  
  const { nombre,correo,password,rol } = req.body;
  const usuario = new Usuario({nombre,correo,password,rol});

  //Encriptar password
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt);
  //Guardar en DB
  await usuario.save();

  res.status(200).json({
    msg: "Usuario creado exitosamente",
    usuario,
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    ok: true,
    msg: "delete api desde el controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
};
