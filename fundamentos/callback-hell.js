const empleados = [{
    id: 1,
    nombre: 'juan'
},{
    id: 2,
    nombre: 'paco'
},{
    id: 3,
    nombre: 'luis'
},]

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 1400,
  }
];

const getEmpleado = (id,cb) => {
    const empleado = empleados.find((e) => {
        return e.id === id;
    })
    if (empleado) {
        cb(null,empleado);
    } else {
        cb(`empleado con id ${id} no existe`);
    }
}


const getSalario = (id, cb) => {
    const salario = salarios.find((s) => {
        return s.id === id;
    })
    if (salario) {
        cb(null, salario);
    } else {
        cb(`el empleado no esta registrado en nomina`);
    }

}



getEmpleado(1, (err,empleado) => {
    if (err) {
        console.log('ERROPR');
        return console.log(err);
    }
    console.log('empelado exste');
    console.log(empleado.nombre);
})


getSalario(1, (err, salario) => {
    if (err) {
        console.log('ERROR!');
        return console.log(err);
    }
    console.log('empleado asalariado');
    console.log(salario.salario);
})

//console.log(getEmpleado(5));








