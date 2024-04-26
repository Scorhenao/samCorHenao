//FOR
for (let i = 1;//Se puede empezar en 1 o en 0
    i < 5;
    i++
    ){
        console.log(i);
    }

for (let i = 0,
    j = 10;
    i < 5;
    /* i < 5, o j>2; -= cuenta hacia atras*/
    j>6,
    i ++,
    j-= 2){
            console.log(`i: ${i}, j: ${j}`);
        }

//matriz simple
for (let i = 0; i < 3; i++) {
    console.log(`Iteracion Externa ${i}`);

    for (let j = 0; j < 4; j++) {
        console.log(`Iteracion Interna ${j}`);
        
    }
}     

//recorer listas o arrays
let colors = ["red","green","blue"];
/* 
for (let iterator of Object) {

}; */

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
    
}//recore lista por indice, se puede manipular el indice

for (let color of colors) {
    console.log(color);
}//recorre por el of, solo se manipula el valor

/* for (const key in object) busca llaves del array {

}
 */

/* for (let key in object) {
    console.log(key +": " + colors[key]);
}//simplifica la primera forma(key es indice)
 */





//WHILE

let limit = 10;
let counter = 1;

while (counter <= limit) {
    console.log(counter);
    counter++;

    limit = Math.floor(Math.random() * 20) + 1;
    console.log(limit)
} 
//cuanto el contador y el limite sean iguales se acaba el ciclo y cuando el contador es menor tambien
//Puedes modificar la condicion durante la ejecucion
//floor redonde por debajo 1.9 = 1 esa frase (lleva a limit entre 0 y 20)




//do I o do while 

let userInput;
let isValid;

/* do {
    userInput = pro0mpt("Ingresa tu ID");
    idValid = userInput.length == 8;

    if (!idValid) {
        alert("ID invalido");
    }
} while (!idValid); */


/* DO
do {
    userInput = prompt("Ingresa un numero entre 1 y 100: ");
    isValid = /* !isNaN(userInput) &&  */userInput >= 1 && userInput <= 100;//isNaN is not a number = true if is string or false if is a number (!isNaN is a number = true number or false if is a string)
    /* if(!isValid){
        console.log(`El valor ${userInput} es mayor al rango`)
    } */
/* 
    else{
        console.log(`¡Haz ingresado el un numero valido ${userInput}!`)
    }
} while (!isValid) ; */
<<<<<<< HEAD

//console.log(`¡HAs ingresado un numero valido: ${userInput}!`);




//FOREACH
/* for (let color of colors){
    console.log(color);
} */

/* 
colors.forEach(function(color){
    console.log(color);
}
) */

colors.forEach((color) =>{
    console.log(color);
});

colors.forEach((color => console.log(color)));

let numbers = [1,2,3,4,5,6,7,8,9];

numbers.forEach(number =>{
    let mod = number % 2;
    console.log(number, mod);
}); 

/* let cuadrados = [];
numbers.forEach(number =>{
    cuadrados.push(number * number);//push agrega al final de la lista como append
});
console.log(cuadrados);
 */

//sacar par con foreach
/* numbers.forEach(number =>{
    let mod = number % 2;

    if (mod == 0){
        console.log(`${number} es par`);
    } else {
        console.log(`${number} es impar`);
    }
}); */

//MAP   sacar informacion de un array y crear un nuevo array

/* let cuadrados = numbers.map(number =>{
    return (number * number)
});
console.log(cuadrados);
 */

//FILTER   filtrar informacion de un array y crear un nuevo array

/* let cuadrados = numbers
    .filter(number => number %2 == 0)//lee cada elemento del array y devuelve un nuevo array que sean pares
    .map(number =>{ //crear el array con lo anterior y lo multiplica
        return number*number;
    });
console.log(cuadrados); */

/* forma larga
let pares = numbers.filter(number =>{
    return (number % 2 == 0);
});
console.log(pares);
 */

//forma corta

/* let pares = numbers
    .filter(number => number %2 == 0)
    .map(number =>  number*number)

console.log(pares); */

//REDUCE reduce un array a 1 valor
let suma = numbers.reduce((acumulador, number) =>{
    return acumulador + number;
});
console.log(suma);


let cuadrados = numbers
    .filter(number => number %2 == 0)//filtra los numeros con la condicion
    .map(number =>  number*number)//crea un array vacio con el cual pondra number * number
    .reduce((acumulador, valorActual) => acumulador + valorActual, 0);//acumulador empieza en 0 y el valor actual es lo q va recibiendo q es las otras dos cosas antes y las suma
console.log(cuadrados);

//1, 4, 16, 36, 64 = 120

//filter es un condicinal bucle q pasa a lo siguiente
//map crea un array vacio con el cual se puede hacer un .push()


//METODO PUSH
let alCuadrado = [];
numbers.forEach(number => {
    alCuadrado.push(number*number);
});
console.log(cuadrados);

cuadrados = numbers.map(number => number* number);
console.log(cuadrados);

=======

//console.log(`¡HAs ingresado un numero valido: ${userInput}!`);




//FOREACH
/* for (let color of colors){
    console.log(color);
} */

/* 
colors.forEach(function(color){
    console.log(color);
}
) */

colors.forEach((color) =>{
    console.log(color);
});

colors.forEach((color => console.log(color)));

let numbers = [1,2,3,4,5,6,7,8,9];

numbers.forEach(number =>{
    let mod = number % 2;
    console.log(number, mod);
}); 

/* let cuadrados = [];
numbers.forEach(number =>{
    cuadrados.push(number * number);//push agrega al final de la lista como append
});
console.log(cuadrados);
 */

//sacar par con foreach
/* numbers.forEach(number =>{
    let mod = number % 2;

    if (mod == 0){
        console.log(`${number} es par`);
    } else {
        console.log(`${number} es impar`);
    }
}); */

//MAP   sacar informacion de un array y crear un nuevo array

/* let cuadrados = numbers.map(number =>{
    return (number * number)
});
console.log(cuadrados);
 */

//FILTER   filtrar informacion de un array y crear un nuevo array

/* let cuadrados = numbers
    .filter(number => number %2 == 0)//lee cada elemento del array y devuelve un nuevo array que sean pares
    .map(number =>{ //crear el array con lo anterior y lo multiplica
        return number*number;
    });
console.log(cuadrados); */

/* forma larga
let pares = numbers.filter(number =>{
    return (number % 2 == 0);
});
console.log(pares);
 */

//forma corta

/* let pares = numbers
    .filter(number => number %2 == 0)
    .map(number =>  number*number)

console.log(pares); */

//REDUCE reduce un array a 1 valor
let suma = numbers.reduce((acumulador, number) =>{
    return acumulador + number;
});
console.log(suma);


let cuadrados = numbers
    .filter(number => number %2 == 0)
    .map(number =>  number*number)
    .reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(cuadrados);

//1, 4, 16, 36, 64 = 120
>>>>>>> d813e628a17dd89f165876be4b77f297d6d79a42
