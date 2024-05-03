//Array constructor
console.log("Array constructor y acceder")
let letters = new Array("a","b","c");//variable tipo array por medio de constructor

console.log(letters);
letters = new Array(3);//array vacio con 3 espacios

console.log(letters);

const numbers = [1,2,3,4,5];
console.log(numbers[1]);//acceder con indice
console.log(numbers.at(1));//acceder mediante metodo


console.log("Recorriendo array")
let props = ["a", 2, true];
console.log(props)
props.forEach(prop => {
    console.log(prop);
});


console.log("Añadir o eliminar elementos de arrays")
//Añadir o eliminar elementos
//push y pop insertan al final del array
//unshift y shift insertan al inicio del array

props.push("b");//agrega al final
console.log(props);

props.unshift("c");//agrega al inicio
console.log(props);

props.pop();//elimina al final
console.log(props);

props.shift();//elimina al inicio
console.log(props);


console.log("Alternativas para crear arrays");
//splice
//splice(indice, cantidad de elementos a eliminar, elementos a agregar)
props.splice(1, 0, "d");//agrega en el indice 1
console.log(props);

//Alternativas para crear arrays
const text = "abc";

let otroLetter = text.split("");//crea un array a partir de un string

letters = Array.from(text);//crea un array a partir de un string

//letters = [...text];//crea un array a partir de un string

console.log(otroLetter);
console.log(letters);

//letters.Array.from("abc");//crea un array a partir de un string definido en el metodo

const textNumbers = "12345";
//const numeros = Array.from(textNumbers);//crea un array a partir de un string

//const numeros = Array.from(textNumbers, (numero) => Number(numero));//crea un array a partir de un string y lo cambia a numero

//const numeros = Array.from(textNumbers, Number);//crea un array a partir de un string y lo cambia a numero

//repitiendo lo mismo de arriba de cambiar numero pero profundamente

// let numeroRef = [];
// const numeros = [...textNumbers].forEach(numero => {
//     const number = Number(numero);
//     numeroRef.push(number);
// });//crea un array a partir de un string y lo cambia a numero FORMA FOREACH

//console.log(numeroRef);

//const numeros = [...textNumbers].map((numeros) => Number(numero));//Forma MAP

//map automaticamente pushea el ultimo valor del array
const numeros = [...textNumbers].map(Number);


console.log("Split")
//Split
const arrayNumbers = textNumbers.split("");//separa y crea una lista
console.log(arrayNumbers);

const newText = arrayNumbers.join("");
console.log(newText);//junta todo

//ejemplo
const ejemplo = "hola todos";
const arrayEjemplo = ejemplo.split(" ");//con espacios se cambia la cantidad de elementos en el array

console.log(arrayEjemplo);

const newEjemplo = arrayEjemplo.join("-");
console.log(newEjemplo);

//ejemplo profe
// const ejemploProfe = "Hola todos";
// const arrayNumbers = ejemploProfe.split("o");//cambia la o por espacios
// console.log(arrayNumbers);
// const newEjemploProfe = arrayNumbers.join("o");//vuelve a agregar la o
// console.log(newEjemploProfe);

console.log("Concat");
//Concat
const secondPart = [6,7,8];
const thirdPart = [9,10,11];
const newArray = numeros.concat(secondPart, thirdPart, "");
console.log(newArray);


console.log("Array anidado")
//array anidado
numeros.push(6,7,8);
numeros.push([9,10,11]);
console.log(numeros);

//accediendo al array de adentro
console.log(numeros[8][0]);//donde esta el array y el indice que queremos ver

console.log(newArray.indexOf(5));//busca la primera coincidencia y el indice del elemento. tambien se le puede decir de de donde hasta donde quieres que busque en el array
console.log(newArray.lastIndexOf(8));//busca la ultima coincidencia y el indice del elemento. tambien se le puede decir de de donde hasta donde quieres que busque en el array (8,10)

console.log(newArray.includes(5));//busca si existe el elemento en el array y devuelve true o false 

console.log("Buscar elemento en un array");
//Buscar elemento en un array

const names =[
    {name: "Maria", age:20},
    {name: "Bernardo", age:21},
    {name: "Pancracio", age:22},
    {name: "Andrea", age:23},
    {name: "Sara", age:24},
    {name: "Jorge", age:25},
    {name: "Yurani", age:26},
    {name: "Ayoze", age:27}
];

const findElement = (array, searchedAge)=>{

    let result = null;
    array.forEach(element => {
        if (element.age === searchedAge) 
        result = element;
    });
    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i];
    //     if (element.age === searchedAge) return element;
    // }
    return result;
}

console.log(findElement(names, 27));

// const findName = names.find(function(name){
//     return name.name === "Maria";
// });






