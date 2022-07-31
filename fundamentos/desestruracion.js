const persona = {
    nombre: 'juan',
    apellido: 'mange',
    edad: 25,
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.edad}`
    }
}

console.log(persona.getNombre());

//const nombre = persona.nombre;
//const apellido = persona.apellido;
//const edad = persona.edad;





function imprimePersona({ nombre, apellido, edad }) {
    console.log(nombre, apellido, edad);
}
//imprimePersona(persona)

const personas = ['juan', 'paco', 'luis'];
const [p1,p2,p3] = personas;
//const p1 = personas[0];
console.log(p1,p2,p3);