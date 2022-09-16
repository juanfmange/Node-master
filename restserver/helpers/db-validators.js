const Role = require("../models/role");
const Usuario = require("../models/usuario");


const esRolValido = async (rol = "") => {
  const existRol = await Role.findOne({ rol });
  if (!existRol) {
    throw new Error(`El rol ${rol} no esta registrado en la db`);
  }
};

// const validaEmail = async (correo = '')
const validaEmail = async (correo =! "") => {
    const existEmail = await Usuario.findOne({ correo });
    if (existEmail) {
            throw new Error(`El correo ${correo} ya esta registrado en la base de datos`)
            
            }
};

const existeUsuarioID = async (id) => {
  const existeUsuarioID = await Usuario.findById(id);
  if (!existeUsuarioID) {
    throw new Error(
      `El id ${id} no existe base de datos`
    );
  }
};




module.exports = {
    esRolValido,
    validaEmail,
    existeUsuarioID
}