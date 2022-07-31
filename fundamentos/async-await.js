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
  return new Promise((res, rej) => {
    // res = resolve -> callback; rej = reject -> si sucede un error
    const empleado = empleados.find((e) => e.id === id)?.nombre;

    // Operador ternario //
    empleado ? res(empleado) : rej(`No existe el empleado con el id ${id}`);
    //
  });
};

const getSalario = (id) => {
  return new Promise((res, rej) => {
    const salario = salarios.find((s) => s.id === id)?.salario;
    salario ? res(salario) : rej(`El empleado con id ${id} no tiene salario`);
  });
};


const getInfoUsuario = async () => {    //Transforma una funcion para que regrese una promsesa
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `el salario del empleado ${empleado} es de ${salario}`;
    } catch (error){
        throw error;
    }
    
}


const id = 3;

getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch (err => console.log(err));










