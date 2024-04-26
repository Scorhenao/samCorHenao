/*1. Declara dos variables, num1 y num2, asignándoles valores numéricos diferentes y muestra en consola el resultado de sumarlos. */
let num1 = 10;
let num2 = 20;

console.log(num1 + num2);

/*2. Define dos variables de tipo string, simpleString1 y simpleString2, con valores "Hola" y "Mundo" respectivamente. Muestra en consola la longitud total de ambas cadenas.
 */

let simpleString1 ="Hola";
let simpleString2 = "Mundo";

let longitudTotal =  simpleString1.length + simpleString2.length;

console.log(`La longitud total es: ${longitudTotal}`);

/*3. Crea dos variables de tipo string usando la función String(): stringUsingString1 con el valor "JavaScript" y stringUsingString2 con el valor "Ejercicios". */


let stringUsingString1 = String("JavaScript");
let stringUsingString2 = String("Ejercicios");//Recordar mayusculas

console.log(` variables de tipo string usando la función String() ${stringUsingString1}`);
console.log(`variables de tipo string usando la función String() ${stringUsingString2}`);

/*4. Utiliza el operador new para crear dos variables de tipo string: stringUsingNewString1 con el valor "Concatenar" y stringUsingNewString2 con el valor "Strings". */

let stringUsingNewString1 = new String("Concatenar");
let stringUsingNewString2 = new String("Strings");

/*5. Calcula e imprime en consola la posición del substring "la" en la variable simpleString1. */

let positionSimpleString1 = simpleString1.indexOf("la");

console.log(`posición del substring "la" en la variable simpleString1: ${positionSimpleString1}`);//sabemos el indice de la es 2 

/*6. Comprueba si la variable simpleString2 contiene el substring "ndo" e imprime el resultado en consola. */

let comproveSimpleString2 = simpleString2.indexOf("ndo");

console.log(`el ndo si esta y esta en la posicion: ${comproveSimpleString2}`);//averiguamos si string 2 tiene ndo

/*7. Concatena las variables simpleString1 y simpleString2 utilizando el método concat() y muestra el resultado en consola. */

let contactS1andS2 = simpleString1.concat(simpleString2);

console.log(`Concatenando los dos simple strings: ${contactS1andS2}`);

/*8. Concatena las variables simpleString1 y simpleString2 utilizando el operador + y muestra el resultado en consola. */
let contactS1andS2WithPlus = simpleString1 + simpleString2;

console.log(`Concatenando los dos simple strings con +: ${contactS1andS2WithPlus} `);

/*9. Utiliza template strings para concatenar las variables simpleString1 y simpleString2 e imprime el resultado en consola. */

console.log(`Concatenando los dos simple strings con 'template' ${simpleString1 + simpleString2}`);

/*10. Declara una variable stringWithSpaces1 con el valor " TrimStart" y otra variable stringWithSpaces2 con el valor "TrimEnd ". Elimina los espacios en blanco al principio y al final de ambas cadenas e imprime el resultado en consola. */

let stringWithSpaces1 = " TrimStart";
let stringWithSpaces2 = "TrimEnd ";

let stringWithoutSpaces1 = stringWithSpaces1.trimStart();
let stringWithoutSpaces2 = stringWithSpaces2.trimEnd();//quita espacios blancos

console.log(`Eliminando los espacios en blanco de StringWithSpaces: ${stringWithoutSpaces1} ${stringWithoutSpaces2}`);

/*11. Reemplaza la letra 'o' por la letra 'i' en la variable simpleString1 e imprime el resultado en consola. */

console.log(`Remplazando la 'o' por la letra 'i' en la variable simpleString1: ${simpleString1.replace("o", "i")}`);//cambia caracteres de string

/*12. Utiliza el método slice() para obtener los primeros tres caracteres de la variable simpleString2 e imprime el resultado en consola. */

console.log(`Obteniendo los 3 caracteres de la variable simpleString2: ${simpleString2.slice(0, 3)}`);

/*13. Utiliza el método substring() para obtener una subcadena de la variable simpleString2 que comience en el índice 2 e imprime el resultado en consola. */

console.log(`Uso substring() para obtener una subcadena de la variable simpleString2 que comience en el índice 2: ${simpleString2.substring(2)}`);

/*14. Repite la variable simpleString1 dos veces utilizando el método repeat() e imprime el resultado en consola. */

console.log(`Repitiendo la variable simpleString1 dos veces utilizando el método repeat(): ${simpleString1.repeat(2)}`);

/*15. Divide la cadena "Esto es una oración de ejemplo" en un array de palabras y muestra el resultado en consola. */

let oracion = "Esto es una oración de ejemplo"

console.log(`Dividiendo la cadena "Esto es una oración de ejemplo" en un array de palabras : ${oracion.split("")}`);

/*16. Convierte la variable simpleString2 a mayúsculas utilizando el método toUpperCase() e imprime el resultado en consola. */

console.log(`Convirtiendo a mayusculas simpleString2 utilizando el método toUpperCase(): ${simpleString2.toUpperCase()}`);

/*17. Convierte la variable simpleString1 a minúsculas utilizando el método toLowerCase() e imprime el resultado en consola. */

console.log(`Convirtiendo a minusculas simpleString1 utilizando el método toUpperCase(): ${simpleString1.toLowerCase()}`);

/*18. Declara una variable booleana y asígnale un valor booleano. Muestra en consola su tipo de dato utilizando el operador typeof(). */

let boleana = true;

console.log(`Mostrando el tipo de una variable booleana: ${typeof(boleana)}`);

/*19. Declara una variable arreglo y asígnale un array con al menos tres elementos. Muestra en consola la longitud del array. */

let arreglo = [
    "elemento1",
    "elemento2",
    "elemento3"
]

console.log(`La longitud de el array 'arreglo' es: ${arreglo.length}`);

/*20. Declara una variable objeto y asígnale un objeto con al menos tres propiedades. Muestra en consola una de las propiedades del objeto. */

const objeto = {
    propiedad1: "valor1",
    propiedad2: "valor2",
    propiedad3: "valor3",
};

console.log(`Mostrando en la consolola una de las propiedades del objeto: ${objeto.propiedad1}`);

/*21. Declara una variable nulo y asígnale el valor null. Muestra en consola su tipo de dato utilizando el operador typeof(). */

let nulita = null;

console.log(`Mostrando el tipo de una variable null: ${typeof(nulita)}`);

/*22. Declara una variable indefinido y no le asignes ningún valor. Muestra en consola su tipo de dato utilizando el operador typeof(). */

let undefinity = undefined;

console.log(`Mostrando el tipo de una variable undefined: ${typeof(undefinity)}`);

/*23. Declara una variable decimal y asígnale un número decimal. Muestra en consola su tipo de dato utilizando el operador typeof(). */

let decimal = 1.2;

console.log(`Mostrando el tipo de una variable decimal: ${typeof(decimal)}`);

/*24. Declara una variable negativo y asígnale un número negativo. Muestra en consola su tipo de dato utilizando el operador typeof(). */

let negativo = -1;

console.log(`Mostrando el tipo de una variable negativo: ${typeof(negativo)}`);

/*25. Utiliza el método indexOf() para encontrar la posición del carácter 'a' en la cadena "Casa" e imprime el resultado en consola. */

let cadena = "Casa";

console.log(`usando indexOf() para encontrar la posición del carácter 'a' en la cadena "Casa": ${cadena.indexOf("a")}`);

/*26. Comprueba si la cadena "Javascript" incluye el substring "Script" utilizando el método includes() e imprime el resultado en consola. */

console.log(`Comprobando si la cadena "Javascript" incluye el substring "Script" utilizando el método includes(): ${stringUsingString1.includes("Script")} `);

/*27. Concatena las cadenas "Hola" y "Mundo" utilizando el método concat() y muestra el resultado en consola. */

console.log(`Concateno las cadenas "Hola" y "Mundo" utilizando el método concat(): ${simpleString1.concat(simpleString2)}`);

/*28. Concatena las cadenas "Hola" y "Mundo" utilizando el operador + y muestra el resultado en consola.*/

console.log(`Concatenando las cadenas "Hola" y "Mundo" utilizando el operador +: ${simpleString1 + simpleString2}`);

/*29. Utiliza template strings para concatenar las cadenas "Hola" y "Mundo" e imprime el resultado en consola. */

console.log(`Concatenando las cadenas "Hola" y "Mundo" utilizando 'template' +: ${simpleString1 + simpleString2}`);

/*30. Declara una variable cadenaConEspacios con el valor " Ejemplo con espacios ". Utiliza el método trimStart() y trimEnd() para eliminar los espacios en blanco al principio y al final, respectivamente, e imprime el resultado en consola.*/

let cadenaConEspacios = " Ejemplo con espacios ";

let CleanCadenaConEspaciosEnd =cadenaConEspacios.trimEnd();
let cadenaConEspaciosStart = CleanCadenaConEspaciosEnd.trimStart();

let CleanCadenaConEspacios = cadenaConEspaciosStart;


console.log(`Limpieando la cadena con espacios de los espacios con trimStart() y trimEnd():${CleanCadenaConEspacios}`);

/*31. Reemplaza la palabra "azul" por "rojo" en la cadena "El cielo es azul" utilizando el método replace() e imprime el resultado en consola.*/

let cadenaCielo = "El cielo es azul";

let cadenaReemplazada = cadenaCielo.replace("azul", "rojo");

console.log(`Reemplazando la palabra "azul" por "rojo" en la cadena "El cielo es azul":${cadenaReemplazada}`);

/*32. Utiliza el método slice() para obtener los últimos cuatro caracteres de la cadena "Programación" e imprime el resultado en consola. */

let cadenaProgramacion = "Programación";
let ultimosCuatro = cadenaProgramacion.slice(-4);//Con un - va de ultimo a inicio y viceversa
console.log(`Los últimos cuatro caracteres de la cadena "Programación" son: ${ultimosCuatro}`);

/*33. Utiliza el método substring() para obtener una subcadena de la cadena "JavaScript" que comience en el índice 2 e imprime el resultado en consola. */

console.log(`Utilizando el metodo substring() para obtener subcandena de "JavaScript" que comience en el indice2: ${stringUsingString1.substring(2)}`);

/*34. Repite la cadena "Hola" tres veces utilizando el método repeat() e imprime el resultado en consola. */

console.log(` Repite la cadena "Hola" tres veces utilizando el método repeat(): ${simpleString1.repeat(3)}`);

/*35. Divide la cadenaOracion "Esto es una oración de ejemplo" en un array de palabras y muestra el resultado en consola. */

let cadenaOracion = "Esto es una oración de ejemplo";
let arrayOracion = cadenaOracion.split(" ");

console.log(`Dividiendo la cadenaOracion "Esto es una oración de ejemplo" en un array de palabras: ${arrayOracion}`)

/*36. Convierte la cadena "Javascript" a mayúsculas utilizando el método toUpperCase() e imprime el resultado en consola. */

console.log(`Convirtiendo la cadena "Javascript" a mayúsculas: ${stringUsingString1.toUpperCase()}`);

/*37. Convierte la cadena "EJEMPLO" a minúsculas utilizando el método toLowerCase() e imprime el resultado en consola. */

let cadenaEjemplo = "EJEMPLO"

console.log(`Convirtiendo la cadena "EJEMPLO" a minúsculas: ${cadenaEjemplo.toLowerCase()}`);

/*38. Declara una variable numero y asígnale un número. Muestra en consola su tipo de dato utilizando el operador typeof(). */

let numero = 10;

console.log(`El tipo de dato de la variable numero es: ${typeof(numero)}`);

/*39. Declara una variable booleana y asígnale un valor booleano. Muestra en consola su tipo de dato utilizando el operador typeof(). */

let booleana = true;

console.log(`El tipo de dato de la variable booleana es: ${typeof(booleana)}`);

/*40. Declara una variable arreglo y asígnale un array con al menos tres elementos. Muestra en consola la longitud del array */

let arreglo2 = ["hola", "mundo", "como", "estas"];
console.log(`La longitud del array2 es: ${arreglo2.length}`);

/*41. Declara una variable objeto y asígnale un objeto con al menos tres propiedades. Muestra en consola una de las propiedades del objeto. */

const objeto2 = {
    propiedad1: "valor1",
    propiedad2: "valor2",
    propiedad3: "valor3",
};

console.log(`Mostrando una de las propiedades de objeto2${objeto2.propiedad2}`);

/*42. Declara una variable nulo y asígnale el valor null. Muestra en consola su tipo de dato utilizando el operador typeof(). */

let nulo = null;

console.log(`El tipo de dato de la variable nulo es: ${typeof(nulo)}`);

/*43. Declara una variable indefinido y no le asignes ningún valor. Muestra en consola su tipo de dato utilizando el operador typeof(). */

let indefinido;

console.log(`El tipo de dato de la variable indefinido es: ${typeof(indefinido)}`);

/*44.Declara una variable decimal y asígnale un número decimal. Muestra en consola su tipo de dato utilizando el operador typeof(). */

let variableDecimal = 2.5;

console.log(`El tipo de dato de la variableDecimal es: ${typeof(variableDecimal)}`);


