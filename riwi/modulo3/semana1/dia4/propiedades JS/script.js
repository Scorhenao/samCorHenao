/**STRINGS
 * Strings pueden ser con '' o ""
 * los strings se pueden contar como una lista de caracteres
 * Metodo es una funcion dependiente del objeto
 * 
 * MDM AYUDA DE PROGRAMADORES
 * 
 * METODO DE INSTANCIA ES RECICLAR CODIGO CAMBIANDO LA VARIABLE DEPENDIENDO DE UNA CLASE
 */

//Strings

const text = 'Hola grupo bezzos';
console.log(text.length);//Los espacios tambien son caracteres
console.log(text[0]);//accede por propiedad
/*
text[0]; //"H"
text[1]; //"o"
text[2]; //"l"
text[3]; //"a" 
*/

//accede por metodo chat at devuelve caracter si devuelve un - significa false
console.log(text.charAt(1));

//accede por caracter y devuelve indicie indexOf
console.log(text.indexOf("l"));

//lastindexof devuelve el ultimo indice del caracter que pusiste segun del orden de string
console.log(text.indexOf("o"));//primero
console.log(text.lastIndexOf("o"));//ultimo

//quiero saber uno especifico por posicion
console.log(text.indexOf("o", 2));//busca de izquierda a derecha
console.log(text.lastIndexOf("o", 13));//busca de derecha a izquierda

//repite la cantidad de veces que se ponga
console.log(text.repeat(5));//hace que se repita 5 veces el textO

//formas de imprimir strings
const clan = "bezzos";
const jornada = "tarde;";
console.log("Hola clan" + " " + clan + "." + " " + "Estan en la jornada" + " " + jornada); /**Forma de hacer espacios pero solo con un espacio antes de la comillas (se puede simplificar) */

//Forma corta de de hacerlo
console.log("Hola clan " + clan + ". Estan en la jornada " + jornada);

//back stick´´ Combina strings con variables
console.log(`Hola clan ${clan}. \nEstan en la jornada ${jornada}`);

//Imprimir con hmtl
const word = "Palabra en HTML";
const template = `<div class="container">${word}</div>`;
console.log(template);

//gigigiga
