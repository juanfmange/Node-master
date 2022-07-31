// CALLBACK: FUNCON QUE SE MANDA COMO ARGUMENTO

const getUsuarioById = (id,cb) => {
    const usuario = {
        id,
        nombre: 'Juan',
    }

    setTimeout(() => {
        cb(usuario);
    },1500)
}

getUsuarioById(10, (usuario) => {
    console.log(usuario.nombre.toUpperCase());
});


