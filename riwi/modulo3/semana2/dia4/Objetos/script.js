const cabecera = document.getElementById("cabecera");
const boton = document.getElementById("btn");

console.log(cabecera);
console.log(boton);

//Objeto

// let persona = {
//     nombre: "Juan",
//     apellido: "McKinley",

//     edad: 25,
//     profesion: "Desarrollador",

//     //poniendo funcion
//     saludar: () =>{
//         return`hola soy ${this.nombre} y tengo ${this.edad} años.`;
//     },

//     toString: () =>{
//         return console.log(`${this.nombre}, ${this.apellido}, ${this.edad} años, ${this.profesion}`);
//     }//poninedo todo a string
// };


// console.log(persona.nombre);
// persona.saludar();
// console.log(persona['profesion']);//acceder a propiedad

// let propiedad = 'mascota';//acceder a una propiedad sin usar funciones
// console.log(persona[propiedad]);//no quemar el objeto, buena practica q acceda a propiedad


//console.log(persona.saludar());//"error si ya hay un console.log()" si lo queremos arreglar debemos poner return `hola soy ${this.nombre} y tengo ${this.edad} años.`

//this siempre se usa dentro del objeto

//Agregando al objeto

// persona.calificacion = "alta";

// persona[propiedad] = "Pedro";//la variable propiedad se vuelve una propiedad como su nombre los dice y lo otro un valor

// console.log(persona);

//editable writable
//enumerable pertima listar
//configurable permita eliminar

// Object.defineProperty(persona, "clan", {
//     value: 'Bezzos',//agragando un vlaor a la nueva propiedad clan
//     writable: false,//se puede cambiar
//     enumerable: false,//se puede buscar con keys para generar array con keys()
//     configurable: false//se puede eliminar
// });

//intentando cambiar
// persona.clan = "Bezozos";

// //eliminar
// delete persona.clan;

//delete persona.clan = "";//dejarlo vacio
//delete persona.clan = undefined;//dejarlo undefined

//mostrando

// console.log(persona);


// console.log(Object.keys(persona));//.KEYS() genera un array en cada propiedad

// DELETE DE OBJETO
/* Object.keys(persona).forEach(function (key) {
    console.log(key)
})//Mostrar el array como una lista basica hacia abajo
*/

// Object.assign(persona, {estado: 'soltero', ciudad: 'Medellin'});//forma resumida de agregar varios

// console.log(persona);


// 2. Crear un elemento

// const parrafo = document.createElement("p");
// parrafo.textContent = "Hola, soy un parrafo";

// 3. Añadirlo al documento

// document.body.appendChild(parrafo);

// 4. Insertarlo antes de otro elemento

// const contenedor = document.getElementById("contenedor");
/* 
contenedor.insertAdjacentElement("beforebegin", parrafo); */

// console.log(`${persona.toString()}`);
// persona.toString()

//Metodo .toString()
// const number = 42;
// const boll = true;
// const regexp = /.+/;

// console.log(number.toString());
// console.log(boll.toString());
// console.log(regexp.toString());

//JSON

let persona = {
    nombre: "Juan",
    edad: 25,
    ocupacion: "Programador",
    hobbies: ['jugar', 'nadar', 'correr'],

    //poniendo funcion
    saludar: () =>{
        return`hola soy ${this.nombre} y tengo ${this.edad} años.`;
    },
    toString: () =>{
        return `persona: nombre: ${this.nombre}, "edad:" ${this.edad},
        "ocupacion:" + ${this.ocupacion}`;
    }//poninedo todo a string
}

const json = `{
    "nombre":"Juan",
    "edad":25,
    "ocupacion":"Programador",
    "hobbies":["jugar","nadar","correr"],
    "direccion":{
        "calle":"123 Calle principal",
        "ciudad":"Ciudad Ejemplo",
        "codigoPostal1": "123456"

    }
}`
//json to string
console.log(json);//json en string

// let user = JSON.parse(json);//pasando json a string
// console.log(user);

// console.log(json.nombre);//string de json que no se puede manipular
// console.log(user.nombre);//objeto del lenguaje manipulable

//json to object

// console.log(JSON.stringify(persona));
// console.log(JSON.stringify(persona,null));//lo mismo que el de arriba pq no especificamos propiedad


// console.log(JSON.stringify(persona,["nombre"]));//pasar de objeto a string para ver porpiedad especifica

// console.log(JSON.stringify(persona,["nombre", "ocupacion"]));//pasar de objeto a string para ver 2 porpiedades especificas

//Destructuracion de objetos
//cambiando el valor desde fuera del objeto 
let {hobbies, ocupacion} = persona;

console.log(persona.ocupacion);
console.log(ocupacion);


ocupacion = "jugador";
console.log(persona.ocupacion);
console.log(ocupacion);

persona.ocupacion = ocupacion;
console.log(persona.ocupacion);

//Crear una copia del objeto (superficial: copia referencia osea se modifican todos los objetos. profunda: ir al registro del objeto y crear uno completamente nuevo en otro registro, nose modifican entre ellos)

//copia superficial

const fullUser = {
    ...persona,
    power:25,
    life: 58
    
}

console.log("")
console.log(persona);
console.log(fullUser);
console.log(persona.hobbies);
console.log(fullUser.hobbies);

fullUser.hobbies[0] = "program";//modificamos el primer hobbie
console.log(fullUser.hobbies);
console.log(persona.hobbies);

//copia profunda



//estructura anidada objetos

const user = {
    name: "Juan",
    role: "streamer",
    attributes: {
        height: 183,
        favColor: "blueviolet",
        hairColor: "black"
    }
}

console.log("")

//accediendo a la estructura anidada

// const {attributes} = user;
// console.log(attributes);

// let {attributes:{ hairColor }} = user;
// console.log(hairColor);//solo accediendo

// let {attributes:{ height:size }} = user;
// size = 25;
// console.log(size);//accediendo a altura para renombrarla

// console.log("")
// console.log(user);
// console.log(user.role);
// console.log(user.attributes);
// console.log(user.attributes.favColor);

//otra forma de crear objetos (clave, valor)
const numeros = {
    11: 1,
    10: 2
}
console.log("")
console.log(numeros[10])

//iteradores de objetos, creando un objeto con los valores de un objeto, el resto despues de name es others
console.log("")
const {name, ...others} = user;
console.log(others);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

//for in indice
//for on valor

//crea pare de clave valor
const keys = ["name","life","power","talk"];
const values = ["Juan", 99,
10, () => {return "Hola"}];

const entries = [];
for (let i in values) {
    const key = keys[i];
    const value = values[i];
    entries.push([key,value]);
}

const newUser = Object.fromEntries(entries);
console.log(entries);
console.log(newUser);
