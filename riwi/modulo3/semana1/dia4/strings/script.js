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
console.log(text.length); //Los espacios tambien son caracteres
console.log(text[0]); //accede por propiedad
/*
text[0]; //"H"
text[1]; //"o"
text[2]; //"l"
text[3]; //"a" 
*/

//accede por metodo chat at devuelve caracter si devuelve un - significa false
console.log(text.charAt(1));

//accede por caracter y devuelve indicie indexOf
console.log(text.indexOf('l'));

//lastindexof devuelve el ultimo indice del caracter que pusiste segun del orden de string
console.log(text.indexOf('o')); //primero
console.log(text.lastIndexOf('o')); //ultimo

//quiero saber uno especifico por posicion
console.log(text.indexOf('o', 2)); //busca de izquierda a derecha
console.log(text.lastIndexOf('o', 13)); //busca de derecha a izquierda

//repite la cantidad de veces que se ponga
console.log(text.repeat(5)); //hace que se repita 5 veces el textO

//formas de imprimir strings
const clan = 'bezzos';
const jornada = 'tarde;';
console.log(
    'Hola clan' + ' ' + clan + '.' + ' ' + 'Estan en la jornada' + ' ' + jornada
); /**Forma de hacer espacios pero solo con un espacio antes de la comillas (se puede simplificar) */

//Forma corta de de hacerlo
console.log('Hola clan ' + clan + '. Estan en la jornada ' + jornada);

//back stick´´ Combina strings con variables
console.log(`Hola clan ${clan}. \nEstan en la jornada ${jornada}`);

//Imprimir con hmtl
const word = 'Palabra en HTML';
const template = `<div class="container">${word}</div>`;
console.log(template);

//SEPARADORES
const ip = '172.25.24.1';
console.log(ip.split('.')); //separa por punto

console.log(text.split(' ')); //separa por espacio

console.log(text.substring(2, 8)); //desde donde empieza y donde termina ene l string(si se deja oslo el primero sigue desde ahi hasta el final)

console.log(text.slice(2)); //return como substring

/* MUTABILIDAD si un metodo es mutable (cambia) se pone una variable que lo contenga para cambiarlo 
 
METODO INMUTABLE
obliga a crear una variable para modificar el metodo
*/
const texModificado = text.slice(2, 8);

console.log(texModificado);
console.log(text);

//BUSCAR Y REMPLAZAR
console.log(text.startsWith('o')); //texto empieza con 0(true or false)

console.log(text.endsWith('s')); //texto termina con...

console.log(text.includes('g')); //texto tiene una g? (true or false) tambien se puede agragar palabras completas

const email = 'user@user.com';
const regex =/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/g //regex de email
console.log(email.search(regex)); //buscar el regex para validarlo con un {se puede agragar un limite de caracteres}

console.log(text.replace("u","o"));//cambia las u por o
console.log(text.replaceAll("u","o"));//cambia todas las u por o

//MODIFICAR STRINGS
console.log(email.toLowerCase());//todo small
console.log(email.toUpperCase());//todo mayus
console.log(email.trim());//limpia el valor de los caracteres de adelante y atras en consola
console.log(email.trimStart())//quita espacios del inicio 
console.log(email.trimEnd())//quita espacios del final

const emailCut = email.trimEnd();
console.log(emailCut.length)//cuenta los espacios en blanco que se cortan
