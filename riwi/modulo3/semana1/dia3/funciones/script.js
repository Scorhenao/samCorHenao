/**
 * Function nombre(p1,p2...){} / Crea una funcion mediante DECLARACION
 * var nombre =function(p1,p2...){} / Crea una funcion mediante EXPRESION
 * new Function(p1,p2...,code) / Crea una funcion mediante un constructor de OBJETO
 * Arrow function=> / Es una alternativa compacta a una expresion de funcion tradcional, pero es limitada y no se puede utilizar en todas las situaciones
 */

/**paremetros pueden ser estaticos o dinamicos */

function saludar() {
    return "Hola";
}
console.log(saludar()) /**si no agregamos los () de parametros imprime la funcion pero no el resultado */

function suma(a,b) {
    return a+b;
}
console.log("La suma es: ",suma(5,3))/**si cambia los numeros por "5" "3" Concatena */ 
console.log(suma)

/**Funcion con variable */
const sumar = function sum(a,b) {
    return a+b;
}

console.log("La suma es y esta es suma sin num variables: ",sumar(1,15));

/**Funcion que funciona con parametros variables */
const num1 =10;
const num2 =10;
console.log("La suma esta es num variables: ", sumar(num1, num2));

/**Cambiar o añadir variable a variable de funcion y no retornar (si se puede retornar)*/
const sumacion = function sumor(a,b) {
    console.log(a+b) /**Se queda el valor dentro de la funcion sin return*/
}
console.log("Esta variable se esta guardando pero no retornando")
const resultadoSumacion = sumacion(3,5)/**atrapa lo que esta retornando la funcion en otra varible pero no imprimimos nada */
console.log(resultadoSumacion);

/**
 * DECLARAR: es poner una funcion aunque no se use
 * INICIALIZAR: en algun momento se va a usar la funcion
 * RETORNAR: puede declarar e inicializar pero no cambiar variable
 */

/**DECLARANDO */
const restar = function resta(a,b) {
    return a - b;
}

/**IMPLEMENTANDO */

/**LAMADO */
const aR = 20;
const bR = 60;
console.log("La resta es, estamos llamando la funcion:", restar(aR,bR))

/**USANDO */
const resultadoResta = restar(3,5);
console.log("Resultado de la resta, 'usando'(este comentario se quita)",resultadoResta);

/**FUNCION CON CONSTRUCCION NO RECOMENDADA */
/* const saludar = new Function("return 'HOLIWIS'")
console.log(saludar()); */

/**FUNCION ANONIMA IMPORTANTE PQ REDUCE SINTAXIS*/
const anonima = function (p,o) {/**usamos variable para la funcion pero la funcion no tiene nombre por eso es anonima */
    return "RESULTADO DE FUNCION ANONIMA 'PEITOS'"
}
console.log(anonima("tirate, peos"));

/**REDUCCION FINAL */
const multiplicar = (a,b) =>{
    return a*b;
}
const resultadoMultiplicacion = multiplicar(2,3);
console.log("Forma de reduccion final de funcion:",resultadoMultiplicacion);

/**FUNCION ARROW SIMPLE SE USA (CUANDO HAY SOLO 1 PARAMETRO O UTILIZAN 1 LINEA DE RETURN)*/
const dividir = (a,b) => a/b;
const resultadoDivision = dividir(10,2);
console.log("Forma arrow de funcion:",resultadoDivision);
