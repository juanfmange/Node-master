const { response, request } = require('express');



const usuariosGet = (req = request, res = response) => {
    const {q,nombre = 'sin nombre',apikey,page = 1, limit =10} = req.query;

    res.json({
        ok: true,
        msg: "probando el api con controlador de get",
        q,
        nombre,
        apikey,
        page,
        limit
    });
};
    
const usuariosPut = (req, res = response) => {
    const {id} = req.params;
    res.json({
        msg: "put api desde el controlador",
        id
    });
    };

const usuariosPost = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.status(200).json({
        msg: "post api desde el controlador",
        nombre,edad
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
    usuariosDelete

}