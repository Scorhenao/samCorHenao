/**
 * Number: Valor numerico(Entero,decimales,etc...) 42
 * Bighint:Valor numerico grande 123456789 
 * String:Valor de texto(cadenas de texto, caracteres,etc...) 'MZ'
 * Boolean: Valor booleano (F/V) true
 * Undefined: valor sin definir (Variable sin inicializar) undefined
 * Function:funcion (Funcion guardada en una variable) function(){}
 * Symbol: Simbolo (valor unico) Symbol(1) {}
 * Object: Objeto(Coleccion de claves, y valores "diccionario") {name:'MAX' age:'37'}
 * Arrays: Colecciona lista de variables [1,4,5, pepe]
 * 
 * GOOD PRACTICES
 * CamelCase: let UserName
 * Only letters and digits: let ageGroup5
 * Starting with $ is allowed: let $kindOfSpecial
 * Starting with _ is allowed: let _internalValue
 * 
 * BAD PRACTICES
 * Alloweb but bad practice: let user_name
 * Starting digidts not allowed: let 21Players
 * No special charecters: let user-b
 * Keywords not allowed: let let 
 */

/**Tipo string */
const text = "Hola grupo Bezzos"
console.log(text);
console.log(typeof text);/**typeof muestra el tipo de varible */

/**Tipo number */
const numero = 15;
console.log(numero);
console.log(typeof numero);

/**Tipo objeto */
const numberList = [15,14,30,20];
console.log(numberList);
console.log(typeof numberList);

/**Tipo undefined */
var sinDefinir;/**el undefined no va con const */
console.log(sinDefinir);
console.log(typeof sinDefinir);

/**Tipo bighint */
const bighint = 858093456789;
console.log(bighint);
console.log(typeof bighint);

/**Tipo boolean */
const boolean = true;
console.log(boolean);
console.log(typeof boolean);

/**Good practice */
const cantidadEstudiantes = 32;

/**Necesitas varios usuarios, diferencialos */
const user = null;
const user1= null;
const user2 = null;
const user3 = null;