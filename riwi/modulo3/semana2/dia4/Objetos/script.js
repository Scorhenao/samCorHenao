const cabecera = document.getElementById("cabecera");
const boton = document.getElementById("btn");

console.log(cabecera);
console.log(boton);

//Objeto

let persona = {
    nombre: "Juan",
    apellido: "McKinley",

    edad: 25,
    profesion: "Desarrollador",

    //poniendo funcion
    saludar: () =>{
        return`hola soy ${this.nombre} y tengo ${this.edad} años.`;
    },

    toString: () =>{
        return console.log(`${this.nombre}, ${this.apellido}, ${this.edad} años, ${this.profesion}`);
    }//poninedo todo a string
};


console.log(persona.nombre);
persona.saludar();
console.log(persona['profesion']);

let propiedad = 'mascota';//acceder a una propiedad sin usar funciones
console.log(persona[propiedad]);//no quemar el objeto, buena practica q acceda a propiedad


//console.log(persona.saludar());//"error si ya hay un console.log()" si lo queremos arreglar debemos poner return `hola soy ${this.nombre} y tengo ${this.edad} años.`

//this siempre se usa dentro del objeto

//Agregando al objeto

persona.calificacion = "alta";

persona[propiedad] = "Pedro";//la variable propiedad se vuelve una propiedad como su nombre los dice y lo otro un valor

console.log(persona);

//editable writable
//enumerable pertima listar
//configurable permita eliminar

Object.defineProperty(persona, "clan", {
    value: 'Bezzos',//agragando un vlaor a la nueva propiedad clan
    writable: false,//se puede cambiar
    enumerable: false,//se puede buscar con keys para generar array con keys()
    configurable: false//se puede eliminar
});

//intentando cambiar
persona.clan = "Bezozos";

//eliminar
delete persona.clan;

//delete persona.clan = "";//dejarlo vacio
//delete persona.clan = undefined;//dejarlo undefined

//mostrando

console.log(persona);


console.log(Object.keys(persona));//.KEYS() genera un array en cada propiedad

// DELETE DE OBJETO
/* Object.keys(persona).forEach(function (key) {
    console.log(key)
})//Mostrar el array como una lista basica hacia abajo
*/

Object.assign(persona, {estado: 'soltero', ciudad: 'Medellin'});//forma resumida de agregar varios

console.log(persona);


// 2. Crear un elemento

const parrafo = document.createElement("p");
parrafo.textContent = "Hola, soy un parrafo";

// 3. Añadirlo al documento

document.body.appendChild(parrafo);

// 4. Insertarlo antes de otro elemento

const contenedor = document.getElementById("contenedor");
/* 
contenedor.insertAdjacentElement("beforebegin", parrafo); */

console.log(`${persona.toString()}`);
persona.toString()
//Metodo .toString()
const number = 42;
const boll = true;
const regexp = /.+/;

console.log(number.toString());
console.log(boll.toString());
console.log(regexp.toString());

