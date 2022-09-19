const { response } = require("express");

const esAdmin = (req, res = response, next) => {
  if (!req.usuario) {
    return res.status(500).json({
      msg: "Se requiere validar rol sin el token antes",
    });
  }
  const { rol, nombre } = req.usuario;
  if (rol !== "ADMIN_ROLE") {
    return res.status(401).json({
      msg: `${nombre} no es administrador`,
    });
  }
  next();
};


const tieneRol = (...roles) => {
  return (req, res = response, next) => {
    if (!req.usuario) {
      return res.status(500).json({
        msg: "Se requiere validar rol sin el token antes",
      });
    }
    if (!roles.includes(req.usuario.rol)) {
      return res.status(401).json({
      msg: `El servicio requiere de uno de estos roles ${roles}`
    })
  }
  next();
  }
}

module.exports = {
  esAdmin,
  tieneRol,
};
