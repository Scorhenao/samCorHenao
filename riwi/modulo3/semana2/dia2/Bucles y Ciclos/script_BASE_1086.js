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

let userInput;
let isValid;

//do I o do while 
/* do {
    userInput = pro0mpt("Ingresa tu ID");
    idValid = userInput.length == 8;

    if (!idValid) {
        alert("ID invalido");
    }
} while (!idValid); */

do {
    userInput = prompt("Ingresa un numero entre 1 y 100: ");
    isValid = /* !isNaN(userInput) &&  */userInput >= 1 && userInput <= 100;//isNaN is not a number = true if is string or false if is a number (!isNaN is a number = true number or false if is a string)
    if(!isValid){
        console.log(`El valor ${userInput} es mayor al rango`)
    }

    else{
        console.log(`¡Haz ingresado el un numero valido ${userInput}!`)
    }
} while (!isValid);

console.log(`¡HAs ingresado un numero valido: ${userInput}!`);