//nodos vs HTMLcoleccion el Html coleccion va a agregar un objeto con el name de el elemento html y el nodo no
//ver clases de un elemento coleccion html
console.log("class de un elemento HTML");
const elemets = document.getElementsByClassName("saludo");
console.log(elemets);

// const divs = document.querySelectorAll(".saludo");
// console.log(divs);

//ver nombres de un elemento lista de nodos
console.log("name de un elemento HTML");
const elemetsByName = document.getElementsByName("container");
console.log(elemetsByName);

console.log("tag name de un elemento HMTL");
const elemetsByTagName = document.getElementsByTagName("div");
console.log(elemetsByTagName);


console.log("agrendando desde js a HTML");
//agregando un p a un div(
const p = document.createElement("p");
p.innerText = "Parrafo dentro de nuevo div";
let div = document.createElement("div");//let necesario para cambiar el hijo
let divs = document.getElementsByTagName("div");
let primerDiv = divs[0];
//console.log(div);//mostrando el div agregado en la consola
primerDiv.appendChild(p);
const estado = p.isConnected;//verifica si un elemento de js esta en el HTML true or false
console.log(estado)
//console.log(div);

//agregando a body el div anterios
let body = document.querySelector("body");
let body1 = document.getElementsByTagName("body");
console.log(body);
console.log(body1);//Aqui podemos ver la posicion del elemento del HTML boby el cual es: getElementsByTagName
body1[0].appendChild(primerDiv);
console.log(divs);//el body esta ene la posicion [0]

//otra manera de agregar de js a HTML
// let body = document.querySelector("body");
// body.appendChild(primerDiv);

document.body.appendChild(primerDiv);//forma resumida de lo de arriba

const fragment = document.createDocumentFragment();//crear un fragmento de codigo

for (let i = 0; i < 10; i++) {
    const div = document.createElement("div");
    div.textContent = `Item Numero ${i +1}`;
    fragment.appendChild(div);
}

document.body.appendChild(fragment);

//Tarea
//en un proyecto ir agregando cosas desde js