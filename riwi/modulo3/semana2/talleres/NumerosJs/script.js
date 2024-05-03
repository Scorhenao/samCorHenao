/* 
    Samuel Cordoba Henao
    clan = Jeff Bezzos
    correo = Samcorhenao@gmail.com 
*/


/* 1. Número a un nuevo número: Declara una variable num con un valor numérico y luego crea una nueva variable llamada newNum utilizando la función Number() 
para convertir num a un nuevo número. Muestra en consola newNum.  */

let num = 2;
let newNum = Number(num);

console.log(`Cambiando num a un nuevo numero: ${newNum}`);

/* 2. Rangos numéricos - Number.MAX_VALUE: Muestra en consola el valor máximo 
que puede ser representado en JavaScript utilizando Number.MAX_VALUE.  */

console.log(`Maximo valor que se puede usar en JavaScript: ${Number.MAX_VALUE}`);

/* 3. Rangos numéricos - Number.MIN_VALUE: Muestra en consola el valor mínimo 
positivo que puede ser representado en JavaScript utilizando 
Number.MIN_VALUE.  */

console.log(`Minimo positivo que se puede usar en JavaScript: ${Number.MIN_VALUE}`);

/* 4. Rangos numéricos - Number.MAX_SAFE_INTEGER: Muestra en consola el valor 
máximo seguro que puede ser representado con precisión en JavaScript 
utilizando Number.MAX_SAFE_INTEGER.  */

console.log(`Maximo valor seguro que se representa con presicion en JavaScript: ${Number.MAX_SAFE_INTEGER}`);

/* 5. Rangos numéricos - Number.MIN_SAFE_INTEGER: Muestra en consola el valor 
mínimo seguro que puede ser representado con precisión en JavaScript 
utilizando Number.MIN_SAFE_INTEGER.  */

console.log(`Minimo valor seguro que se representa con presicion en JavaScript: ${Number.MIN_SAFE_INTEGER}`);

/* 6. Comprobación numérica - Number.isFinite(number): Declara una variable num y utiliza el método Number.isFinite() para comprobar si num es un número finito. Muestra el resultado en consola.  */

let comproveFiniteNum = Number.isFinite(num);

console.log(`Compruebo si num es finito: ${comproveFiniteNum}`);

/* 7. Comprobación numérica - Number.isInteger(number): Declara una variable 
num y utiliza el método Number.isInteger() para comprobar si num es un 
número entero. Muestra el resultado en consola.  */

let comproveNumInt = Number.isInteger(num);

console.log(`Compruebo si num es entero: ${comproveNumInt}`);

/* 8. Comprobación numérica - Number.isSafeInteger(number): Declara una variable num y utiliza el método Number.isSafeInteger() para comprobar si num es un número seguro para representar con precisión en JavaScript. Muestra el 
resultado en consola.  */

console.log(`Compruebo si num es un numero seguro para representar con precisión en JavaScript: ${Number.isSafeInteger(num)}`);

/* 9. Representación numérica - .toExponential(digits): Declara una variable num y utiliza el método .toExponential() para mostrar su representación en notación exponencial con un número específico de dígitos decimales. Muestra el resultado en consola.  */

let numExponential = num.toExponential();

console.log(`Mostrando el num en representacion exponencial con decimal: ${numExponential}`);

/* 10. Representación numérica - .toFixed(digits): Declara una variable num y utiliza el método .toFixed() para mostrar su representación con un número específico de dígitos decimales. Muestra el resultado en consola. 
 */

console.log(`Poninendo una cantidad de decimales a num con toFixed(): ${num.toFixed(2)}`);

/* 11. Representación numérica - .toPrecision(size): Declara una variable num y utiliza el método .toPrecision() para mostrar su representación con una longitud total específica. Muestra el resultado en consola. 
*/

console.log(`Usando toPrecision() para poner decimales a num: ${num.toPrecision(3)}`);

/* 12. Convertir - Number.parseInt(text): Declara una variable text con un valor numérico en formato de cadena y utiliza Number.parseInt() para convertirlo a un número entero. Muestra el resultado en consola. 
 */

let text = "100";
let changeTextToNum = Number.parseInt(text);

console.log(`Convirtiendo un numero en string a un int: ${changeTextToNum}`);
//para comprovar que es un numero
/* console.log(typeof(text))
console.log(typeof(changeTextToNum)) */

/* 13. Convertir - Number.parseInt(text, radix): Declara una variable text con un valor numérico en formato de cadena y utiliza Number.parseInt() con una base específica para convertirlo a un número entero. Muestra el resultado en consola. 
 */

let changeTextToNumSpecific = Number.parseInt(text, 2);//convertir a base 

console.log(`utilizo Number.parseInt() con una base específica para convertirlo a int binario: ${changeTextToNumSpecific}`);

/* 14. Convertir - Number.parseFloat(text): Declara una variable text con un valor numérico en formato de cadena y utiliza Number.parseFloat() para convertirlo a un número de punto flotante. Muestra el resultado en consola. 
 */

let changeTextToFloat = Number.parseFloat(text);

console.log(`utilizo Number.parseFloat() para convertirlo a un número de punto flotante: ${changeTextToFloat}`);

/* 15. Convertir - Number.parseFloat(text, radix): Declara una variable text con un valor numérico en formato de cadena y utiliza Number.parseFloat() con una base específica para convertirlo a un número de punto flotante. Muestra el 
resultado en consola. 
 */

let changeTextToFloatSpecific = Number.parseFloat(text, 2);

console.log(`utilizo Number.parseInt() con una base específica para convertirlo a Float binario: ${changeTextToFloatSpecific}`);

/* 16. Convertir - .toString: Declara una variable num y utiliza el método .toString() para convertirlo a una cadena. Muestra el resultado en consola. 
 */

let changeNumToString = num.toString();

console.log(`Cambiando num a un string con toString(): ${changeNumToString}`);

/* 17. Método Math.abs(x): Declara una variable num con un valor negativo y utiliza Math.abs() para obtener su valor absoluto. Muestra el resultado en consola. 
 */

let numNegativo = -50;

console.log(`Pasando numNegativo a su valor abosluto con Math.abs(x): ${Math.abs(numNegativo)}`);

/* 18. Método Math.sign(x): Declara una variable num con un valor y utiliza 
Math.sign() para obtener su signo. Muestra el resultado en consola. 
 */

console.log(`Obteniendo el signo de num con Math.sign(x): ${Math.sign(num)}`);//num es positivo = +1 num es negativo = -1 0 es 0

/* 19. Método Math.exp(x): Declara una variable num y utiliza Math.exp() para calcular la exponenciación de num. Muestra el resultado en consola. 
 */

console.log(`Calculando la exponenciacion de num con Math.exp(): ${Math.exp(num)}`);

/* 20. Método Math.expm1(x): Declara una variable num y utiliza Math.expm1() para calcular e^x - 1. Muestra el resultado en consola. 
 */

console.log(`Calculando el e^x - 1 de num con Math.expm1(x): ${Math.expm1(num)}`);

/* 21. Método Math.max(a, b, c...): Utiliza Math.max() para encontrar el valor máximo entre varios números. Muestra el resultado en consola. 
 */

let num2 = 5;
let num3 = 121;

console.log(`Utilizanzo Math.max() para encontrar el valor máximo entre varios números: ${Math.max(num,num2,num3)}`);

/* 22. Método Math.min(a, b, c...): Utiliza Math.min() para encontrar el valor mínimo entre varios números. Muestra el resultado en consola. 
 */

console.log(` Utilizando Math.min() para encontrar el valor mínimo entre varios números: ${Math.min(num, num2, num3)}`);

/* 23. Método Math.pow(base, exp): Utiliza Math.pow() para calcular la potencia de un número. Muestra el resultado en consola. 
 */

console.log(`Usando Math.pow(base, exp) para calcular la potencia de un número: ${Math.pow(6,num)}`);

/* 24. Método Math.sqrt(x): Utiliza Math.sqrt() para calcular la raíz cuadrada de un número. Muestra el resultado en consola. 
 */

console.log(`Usando Math.sqrt(x) para calcular la raíz cuadrada de un número: ${Math.sqrt(num3)}`);

/* 25. Método Math.cbrt(x): Utiliza Math.cbrt() para calcular la raíz cúbica de un número. Muestra el resultado en consola. 
 */

console.log(`Usando  Math.cbrt(x) para calcular la raíz cúbica de un número: ${Math.cbrt(num)}`);

/* 26. Método Math.imul(a, b): Utiliza Math.imul() para calcular la multiplicación de dos números como un entero de 32 bits. Muestra el resultado en consola. 
 */

console.log(`Usando Math.imul(a, b) para calcular la multiplicación de dos números como un entero de 32 bits: ${Math.imul(num,num2)}`);

/* 27. Método Math.clz32(x): Utiliza Math.clz32() para contar los ceros principales de un número en su representación de 32 bits. Muestra el resultado en consola. 
 */

console.log(`Usando Math.clz32(x) para contar los ceros principales de un número en su representación de 32 bits: ${Math.clz32(num)}`);

/* 28. Método Math.random(): Utiliza Math.random() para generar un número 
pseudoaleatorio entre 0 (inclusive) y 1 (exclusive). Muestra el resultado en 
consola. 
 */

console.log(`Usando Math.random() para generar un número pseudoaleatorio entre 0 (inclusive) y 1 (exclusive): ${Math.random(0,1)}`);

/* 29. Método de redondeo - Math.round(x): Utiliza Math.round() para redondear un número al entero más cercano. Muestra el resultado en consola. 
 */

console.log(`Usando  Math.round(x) para redondear un número al entero más cercano: ${ Math.round(0,1)}`);

/* 30. Método de redondeo - Math.ceil(x): Utiliza Math.ceil() para redondear hacia arriba un número al entero más cercano. Muestra el resultado en consola. 
 */

console.log(`Usando  Math.round(x) para redondear un número al entero más cercano: ${ Math.round(1.7)}`);

/* 31. Método de redondeo - Math.floor(x): Utiliza Math.floor() para redondear hacia abajo un número al entero más cercano. Muestra el resultado en consola. 
 */

console.log(`Usando Math.floor(x) para redondear hacia abajo un número al entero más cercano: ${ Math.floor(1.7)}`);

/* 32. Método de redondeo - Math.fround(x): Utiliza Math.fround() para convertir un número a su representación de punto flotante de 32 bits más cercana. Muestra el resultado en consola. 
 */

console.log(`Usando Math.fround(x) para convertir un número a su representación de punto flotante de 32 bits más cercana: ${ Math.floor(1.7)}`);

/* 33. Método de redondeo - Math.trunc(x): Utiliza Math.trunc() para truncar la parte decimal de un número. Muestra el resultado en consola. 
 */

console.log(`Usando Math.trunc(x) para truncar la parte decimal de un número: ${ Math.trunc(9.45325)}`);//no muestra el decimal


/* 34. Método trigonométrico - Math.sin(x): Utiliza Math.sin() para calcular el seno de un ángulo en radianes. Muestra el resultado en consola. 
 */

console.log(`Usando Math.sin(x) para calcular el 'seno' de un ángulo en radianes: ${ Math.sin(9)}`);//no muestra el decimal

/* 35. Método trigonométrico - Math.cos(x): Utiliza Math.cos() para calcular el coseno de un ángulo en radianes. Muestra el resultado en consola. 
 */

console.log(`Usando Math.cos(x) para calcular el 'coseno' de un ángulo en radianes: ${ Math.sin(11)}`);

/* 36. Método trigonométrico - Math.tan(x): Utiliza Math.tan() para calcular la tangente de un ángulo en radianes. Muestra el resultado en consola. 
 */

console.log(`Usando Math.tan(x) para calcular la 'tangente' de un ángulo en radianes. Muestra el resultado en consola: ${ Math.sin(19)}`);

/* 37. Método trigonométrico - Math.hypot(a, b...): Utiliza Math.hypot() para calcular la longitud de la hipotenusa de un triángulo a partir de sus lados. Muestra el resultado en consola. 
 */

console.log(`Usando Math.hypot(a, b...) para calcular la longitud de la hipotenusa de un triángulo a partir de sus lados: ${ Math.hypot(2,10,7)}`);

/* 38. Operadores aritméticos con .toFixed(digits), Number.parseInt(text): Declara dos variables numéricas y realiza una operación aritmética que involucre .toFixed() y Number.parseInt(). Muestra el resultado en consola. 
 */

let variableAritmetica1 = "5";
let variableAritmetica2 = 10;

let changingVariableAritmetica1 = Number.parseInt(variableAritmetica1)
let fixingVariableAritmetica2 = variableAritmetica2.toFixed(2)

operacionAritmetica = changingVariableAritmetica1 * fixingVariableAritmetica2

console.log(`Usando  .toFixed(digits) para realizar una operación aritmética que involucre .toFixed() y Number.parseInt(): ${operacionAritmetica}`);
//fixed agrega decimales a un numero
//parseInt convierte un string a numero entero
//se puede hacer en una sola linea con un console

/* 39. Operadores aritméticos con Number.parseFloat(text), .toPrecision(size): 
Declara dos variables numéricas en formato de cadena y realiza una operación 
aritmética que involucre Number.parseFloat() y .toPrecision(). Muestra el 
resultado en consola. 
 */

let varCadena1 = "2.99"
let varCadena2 = "2.20"

//parseFloat coge los strings con decimales si tienen . no ,

console.log(`Usando Number.parseFloat() y .toPrecision() para realizar una operacion aritmetica: ${Number.parseFloat(varCadena1 / varCadena2).toPrecision(3)}`)//presition candidad de decimales que muestra, float cambia strings a decimales

/* 40. Operadores aritméticos con Math.random(), Math.abs(x): Utiliza 
Math.random() para generar un número y realiza una operación aritmética que 
involucre Math.abs(). Muestra el resultado en consola. 
 */

//random da un numero random de entre 0 y 1
//abs convierte un negativo a positivo

let operacionRandomNumber = () => {
    const randomNum = Math.random();
    const absoluteNum = Math.abs(numNegativo);

    return console.log(absoluteNum / randomNum);
};

console.log("Resultado de la funcion con Math.abs() y Math.random() es: ");         
operacionRandomNumber();

/* 41. Operadores aritméticos con Math.random(), .toString: Utiliza Math.random() 
para generar un número y realiza una operación aritmética que involucre 
.toString(). Muestra el resultado en consola. 
 */

let NumRandom = Math.random();
console.log(`Pasando un numero random a un string: ${NumRandom.toString()}`);

let numPrueba = "hola";
console.log(numPrueba.toString(2));

/* 42. Operadores aritméticos con Math.random(), Math.exp(x): Utiliza 
Math.random() para generar un número y realiza una operación aritmética que 
involucre Math.exp(). Muestra el resultado en consola. 
 */

NumRandomExp = Math.exp(2);

console.log(`Poniendole un exponente al num random: ${NumRandomExp}`);

/* 43. Operadores aritméticos con Math.sqrt(x), Math.clz32(x): Utiliza Math.sqrt() y Math.clz32() para realizar una operación aritmética. Muestra el resultado en 
consola. 
 */

let numSqrt = Math.sqrt(num);//raiz cuadrada
let numClz32 = Math.clz32(numSqrt);//pone el numero en binario segun 32 bit

console.log(`El resultado de la operacion es: ${numClz32}`);

/* 44. Operadores de asignación con Asignación: Declara una variable x con un valor y asigna ese valor a otra variable y. Muestra el valor de y en consola. 
 */

let x = 10.5;
let y = x;

console.log(`Asignando el valor de una variable a otra y mostrando el resultado: ${y}`);

/* 45. Operadores de asignación con a += b: Declara dos variables numéricas y utiliza el operador += para sumar el valor de la segunda variable a la primera. Muestra el resultado en consola. 
 */

console.log(`sumar el valor de la segunda variable a la primera: ${num += x}`);

/* 46. Operadores de asignación con Suma y asignación: Declara dos variables 
numéricas y utiliza el operador += para incrementar el valor de la primera variable sumándole el valor de la segunda. Muestra el resultado en consola. 
 */


console.log(`incrementar el valor de la primera variable sumándole el valor de la segunda: ${x += y}`);


/* 47. Operadores de asignación con Resta y asignación: Declara dos variables 
numéricas y utiliza el operador -= para decrementar el valor de la primera 
variable restando el valor de la segunda. Muestra el resultado en consola. 
 */

let decrease = x -= y;
console.log(`decrementar el valor de la primera variable restando el valor de la segunda: ${decrease}`);

/* 48. Operadores de asignación con Multiplicación y asignación: Declara dos 
variables numéricas y utiliza el operador *= para multiplicar el valor de la primera variable por el valor de la segunda. Muestra el resultado en consola. 
 */

console.log(`multiplicar el valor de la primera variable por el valor de la segunda: ${x *= y}`);

/* 49. Operadores de asignación con División y asignación: Declara dos variables numéricas y utiliza el operador /= para dividir el valor de la primera variable por el valor de la segunda. Muestra el resultado en consola. 
 */

console.log(`dividir el valor de la primera variable por el valor de la segunda: ${x /= y}`);

/* 50. Operadores de asignación con Módulo y asignación: Declara dos variables 
numéricas y utiliza el operador %= para calcular el residuo de la división de la primera variable por la segunda. Muestra el resultado en consola. 
 */

console.log(`calcular el residuo de la división de la primera variable por la segunda: ${x %= y}`);


/* 51. Operadores de asignación con Exponenciación y asignación: Declara una 
variable numérica y utiliza el operador **= para elevarla a una potencia 
específica. Muestra el resultado en consola. 
 */

console.log(`elevarla a una potencia específica: ${y **= 2}`);

//Y es la reacicnacion de x

/* 52. Operadores unarios Incremento: Declara una variable numérica y utiliza el operador ++ para incrementar su valor en 1. Muestra el resultado en consola. 
 */

let numIncrease = ++num;

console.log(`utilizando el operador ++ para incrementar su valor en 1: ${numIncrease}`);

/* 53. Operadores unarios Decremento: Declara una variable numérica y utiliza el operador -- para decrementar su valor en 1. Muestra el resultado en consola. 
 */
let numDecrease = --num;

console.log(`utilizando el operador -- para decrementar su valor en 1: ${numDecrease}`);

/* 54. Operadores unarios Incremento previo: Declara una variable num con un valor numérico. Utiliza el operador unario de incremento previo (++num) para aumentar el valor de num en 1 antes de asignarlo a la variable result. Muestra el nuevo valor de result en la consola. 
 */

let result;

result = ++num;
console.log(`utilizando el operador ++ para incrementar su valor en 1 con variable resul: ${result}`);

/* 55. Operadores unarios Decremento previo: Declara una variable num con un valor numérico. Utiliza el operador unario de decremento previo (--num) para disminuir el valor de num en 1 antes de asignarlo a la variable result. Muestra el nuevo 
valor de result en la consola. 
 */

result = --num;
console.log(`utilizando el operador -- para decrementar su valor en 1: ${result}`);


/* 56. Operadores unarios Resta unaria: Declara una variable num con un valor numérico. Utiliza el operador unario de resta (-num) para obtener el opuesto numérico de num y asigna el resultado a la variable result. Muestra el valor 
resultante en la consola. 
 */ 

result = -num;
console.log(`utilizando el operador - para obtener el opuesto numérico de num: ${result}`);