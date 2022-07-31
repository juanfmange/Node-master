const empleados = [
  {
    id: 1,
    nombre: "juan",
  },
  {
    id: 2,
    nombre: "paco",
  },
  {
    id: 3,
    nombre: "luis",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 1400,
  },
];



const getEmpleado = (id, cb) => {

    return new Promise((res, rej) => {  // res = resolve -> callback; rej = reject -> si sucede un error 
        const empleado = empleados.find(e => e.id === id)?.nombre;

        // Operador ternario //
        (empleado) 
            ? res(empleado)
            : rej(`No existe el empleado con el id ${id}`);
        //
        
    });
};

const getSalario = (id) => {
    return new Promise((res, rej) => {
        const salario = salarios.find(s => s.id === id)?.salario;
        (salario)
            ? res(salario)
            : rej(`El empleado con id ${id} no tiene salario`);
    });
};

const id = 3;

//getEmpleado(id)
//    .then(empleado => console.log(empleado))
//    .catch(err => console.log(err));

//getSalario(id)
//    .then(salario => console.log(salario))
//    .catch(err => console.log(err));

//getEmpleado(id)
//    .then(empleado => {
//        getSalario(id)
 //           .then(salario => {
   //             console.log(`El empleado ${empleado} tiene un salario de ${salario}`);
     //       })
       //     .catch(err => console.log(err));
       // })
    //.catch(err => console.log(err));
let nombre;
// Promesa en cadena //
getEmpleado(id)
  .then((empleado) => {
    nombre = empleado;
    return getSalario(id);
  })
  .then((salario) =>
    console.log(`El empleado ${nombre} tiene un salario de ${salario}`)
)
  .catch((err) => console.log(err))