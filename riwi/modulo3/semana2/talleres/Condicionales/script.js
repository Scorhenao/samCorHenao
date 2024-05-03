/* 
    Samuel Cordoba Henao
    clan = Jeff Bezzos
    correo = Samcorhenao@gmail.com 
*/


/* 1. Verifica si un número es positivo.  */
/* 2. Verifica si un número es negativo.  */

num = 32;

if (num >= 1 && num != 0) {
    console.log(`El numero ${num} es positivo`);
}
else if(num === 0){
    console.log(`El numero ${num} es cero`);
}
else{
    console.log(`El numero ${num} es negativo`);
}

/* 3. Comprueba si un número es par.  */
/* 4. Comprueba si un número es impar.  */

    if (num % 2 === 0 && num != 0) {
        console.log(`EL numero ${num} es par`);
    }
    else if (num === 0){
        console.log(`EL numero ${num} es cero`);
    }
    else{
        console.log(`EL numero ${num} es impar`);
    }

/* 5. Determina si un número es múltiplo de 5.  */

    if (num % 5 === 0 && num != 0) {
        console.log(`EL numero ${num} es multiplo de 5`);
    }
    else if(num === 0){
        console.log(`EL numero ${num} es cero no es divisible entre 3`);
    }
    else{
        console.log(`EL numero ${num} no es multiplo de 5`);
    }
    
/* 6. Verifica si un número es divisible entre 3.  */
    if (num % 3 === 0 && num != 0) {
        console.log(`EL numero ${num} es divisible entre 3`);
    }
    else if(num === 0){
        console.log(`EL numero ${num} es cero no es divisible entre 3`);
    }
    else{
        console.log(`EL numero ${num} no es divisible entre 3`);
    }

/* 7. Determina si un número es mayor que 100.  */

    if (num > 100) {
        console.log(`El numero ${num} es mayor a 100`);
    }
    else{
        console.log(`EL numero ${num} no es mayor a 100`);
    }

/* 8. Verifica si un número es menor que -50.  */

    if (num < -50) {
        console.log(`El numero ${num} es menor que -50`);
    }
    else{
        console.log(`EL numero ${num} es mayor que -50`);
    }
    
/* 9. Comprueba si un número está en el rango de 20 a 50.  */

    if (num >= 20 && num <=50) {
        console.log(`EL numero ${num} esta en un rango entre (20,50)`);
    }
    else{
        console.log(`EL numero ${num} NO esta en un rango entre (20,50)`);
    }

/* 10. Determina si un número es igual a 0.  */

    if (num === 0) {
        console.log(`EL numero ${num} es cero`);
    }
    else{
        console.log(`EL numero ${num} NO es cero`);

    }
    
/* 11. Verifica si un número es mayor que -10 y menor que 10.  */

    if (num >= -10 && num <=10) {
        console.log(`EL numero ${num} esta en un rango entre (-10,10)`);
    }
    else if(num === 0){
        console.log(`EL numero ${num} es cero `);
    }
    else{
        console.log(`EL numero ${num} NO esta en un rango entre (-10,10)`);
    }
    
/* 12. Determina si un número es un año bisiesto.  */
    let año = 1990;

    if (año % 4 === 0 && año % 100 != 0 || año % 400 === 0 ) {
        console.log(`EL año ${año} es un año bisiesto`);
    }
    else{
        console.log(`El año ${año} NO es un año bisiesto`);
    }

/* 13. Verifica si una persona es mayor de edad (mayor o igual a 18 años).  */

let edadPersona = 50;

    if (edadPersona >= 18) {
        console.log(`su edad es ${edadPersona} osea SI ES MAYOR DE EDAD`);
    }
    else{
        console.log(`su edad es ${edadPersona} osea NO ES MAYOR DE EDAD`);
    }
    
/* 15. Verifica si un número es un cuadrado perfecto.  */

let numeroCuadradoPerfecto = 4;
let numeroConRaizCuadrada = Math.sqrt(numeroCuadradoPerfecto);

//metodo isInteger devuelve true si es int sino false
    if (Number.isInteger(numeroConRaizCuadrada)) {
        console.log(`El numero ${numeroCuadradoPerfecto} ES UN CUADRADO PERFECTO`);
    }
    else{
        console.log(`El numero ${numeroCuadradoPerfecto} NO ES UN CUADRADO PERFECTO`);
    }

/* 16. Determina si un número es un número de Fibonacci. */ 

const numFibo = 4;

    let fibFunc = (numFibo) =>{
        if (numFibo <= 1) return numFibo;

        return fibFunc(numFibo-1) + fibFunc(numFibo-2);
    }
    
    if (fibFunc(numFibo)) {
        console.log(`El número ${numFibo} SI ES UN NÚMERO DE FIBONACCI`);
    } else {
        console.log(`El número ${numFibo} NO ES UN NÚMERO DE FIBONACCI`);
    }


/* 17. Verifica si un número es una potencia de 2.  */


    if (Math.log2(num) % 1 === 0) {
        console.log(`El número ${num} SI ES UNA POTENCIA DE 2`);
    } else {
        console.log(`El número ${num} NO ES UNA POTENCIA DE 2`);
    }

/* 18. Determina si un número es un palíndromo.  */

    let numPalindromo = [3,0,3];
    let reversPalindromo = numPalindromo.slice().reverse();//[3,0,2] = [2,0,3]

    console.log(numPalindromo);
    console.log(reversPalindromo);


    //si TODO valor e indice es igual entre numPalindromo y reversPalindromo
    //retorna valor es igual al indice
    //tenemos [3,0,2] y [2,0,3] SI en la posicion 0 el valor de reverse es 3 true sino false, Si en la posicion 1 el valor de reverse es el mismo de numPalindromo true sino false (TODOS DEBEN DAR TRUE) 

    if (numPalindromo.every( (v,i) => {
        return v === reversPalindromo[i] } ))
    {
        console.log(`El numero ${numPalindromo} SI ES UN PALINDROMO`);
    }
    else{
        console.log(`El numero ${numPalindromo} NO ES UN PALINDROMO`);
    }


/* 19. Verifica si una cadena de texto contiene la palabra "JavaScript".  */

let cadena = "JavaScript es un lenguaje de programacion 1.";

if (cadena.toLowerCase().includes("javascript")) {
    console.log("La cadena SI contiene la palabra JavaScript");
} else {
    console.log("La cadena NO contiene la palabra JavaScript");
}

/* 20. Determina si una cadena tiene más de 10 caracteres.  */

    if (cadena.length > 10) {
        console.log(`La cadena de texto: ${cadena} TIENE MAS DE 10 CARACTERES`);
    }
    else{
        console.log(`La cadena de texto ${cadena} NO TIENE MAS DE 10 CARACTERES`);
    }

/* 21. Verifica si una cadena de texto está en minúsculas.  */

    if (cadena.toLowerCase() == cadena) {
        console.log(`La cadena de texto: ${cadena} ESTA EN MINUSCULAS`);
    }
    else{
        console.log(`La cadena de texto: ${cadena} NO ESTA EN MINUSCULAS`);
    }

/* 22. Determina si una cadena de texto contiene al menos un número.  */

    /*
    / is used to denote the start and end of a regular expression in JavaScript.
    \\d is used to match any digit (equivalent to [0-9]).
    expression /\d/ will match any single digit in a string.
     */
    const cadenaTieneNumeros = /\d/.test(cadena);


    if (cadenaTieneNumeros == true) {
        console.log(`La candena de texto ${cadena} SI CONTIENE NUMEROS`);
    }
    else{
        console.log(`La candena de texto ${cadena} NO CONTIENE NUMEROS`);
    }

/* 23. Verifica si una cadena de texto termina con un punto (.).  */

    if (cadena.endsWith(".")) {
        console.log(`La cadena: ${cadena} SI TERMINA CON PUNTO`)
    }
    else{
        console.log(`La cadena: ${cadena} NO TERMINA CON PUNTO`)
    }

/* 24. Determina si una cadena de texto es un pangrama (contiene todas 
las letras del alfabeto).  */

    function esPangrama(frase) {
        
        const alfabeto =  "abcdefghijklmnopqrstuvwxyz";

        const fraseMinuscula = frase.toLowerCase()        

        let contar = 0;
        for (const i in alfabeto) {
            if (fraseMinuscula.includes(alfabeto[i])) {
                contar += 1;
            }
        }

        console.log(contar)

        if (contar === 26) {
            console.log(`La frase ${frase} SI ES UN PANGRAMA`)
        }
        else{
            console.log(`La frase ${frase} NO ES UN PANGRAMA`)
        }
    }

    const miFrase = "El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja";

    esPangrama(miFrase)

    // function esPangrama(frase) {
    //     const alfabeto = "abcdefghijklmnopqrstuvwxyz";
    //     const letrasFaltantes = [...alfabeto].filter(letra => !frase.toLowerCase().includes(letra));
    //     return letrasFaltantes.length === 0;
    // }

    // const miFrase = "El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja";
    //  // Devuelve true si la frase es un pangrama, false si no lo es
    // // console.log(esPangrama(miFrase)); // Devuelve true si la frase es un pangrama, false si no lo es

    // if (esPangrama(miFrase) === true ) {
    //     console.log(`La frase: (${miFrase}) SI ES UN PANGRAMA`);
    // }
    // else{
    //     console.log(`La frase: (${miFrase}) NO ES UN PANGRAMA`);
    // }
    
/* 25. Verifica si un día de la semana es laborable (de lunes a viernes).  */

    const diaSemana = "MierColes";

    switch (diaSemana.toLowerCase()) {
        case "lunes":
            console.log("el dia 'lunes' es un dia laborable");
            break;
        case "martes":
            console.log("el dia 'martes' es un dia laborable");
            break;
        case "miercoles":
            console.log("el dia 'miercoles' es un dia laborable");
            break;
        case "jueves":
            console.log("el dia 'jueves' es un dia laborable");
            break;
        case "viernes":
            console.log("el dia 'viernes' es un dia laborable");
            break;
        case "sabado":
            console.log("el dia 'sabado' NO es un dia laborable");
            break;
        case "domingo":
            console.log("el dia 'domingo' NO es un dia laborable");
            break;
    
        default:
            console.log("digito algo no valido...");
            break;
    }

/* 26. Determina si un día es fin de semana (sábado o domingo).  */

    if (diaSemana.toLowerCase() === "sabado" || diaSemana.toLowerCase() === "domingo") {
        console.log(`El dia ${diaSemana} es fin de semana`);
    }
    else if (diaSemana.toLowerCase() === "lunes" || diaSemana.toLowerCase() === "martes" || diaSemana.toLowerCase() === "miercoles" || diaSemana.toLowerCase() === "jueves" || diaSemana.toLowerCase() === "viernes"){
    console.log("¡Estas en semana!");
    }
    else{
    console.log("digito algo no valido...");
    }

/* 27. Verifica si un número representa un mes válido (del 1 al 12).  */

    const mes = 11;

    if (mes >= 1 && mes <= 12 ) {
        console.log(`El numero: ${mes} reresenta un mes del al (del 1 al 12)`);
    }
    else{
        console.log("el numero que representa el mes es no valido");
    }

/* 28. Determina si una hora está en el rango de 9 AM a 6 PM.  */

    // PRACTICANDO CON ALERTS
    // let Horario = String(prompt("digite una hora en AM o PM: ")).toUpperCase()
    // let Hour = parseInt(prompt("digite una hora: "));
    
    // if (Horario === "AM" && Hour >= 9 && Hour <=12) {
    //     alert("La hora SI esta en un rango entre 9AM Y 6PM")
    // }
    // else if (Horario === "PM" && Hour >= 1 && Hour <=6) {
    //     alert("La hora SI esta en un rango entre 9AM Y 6PM")
    // }
    // else{
    //     alert("No esta en rango")
    // }

    //SIN ALERTS BASICO
    function isHourInRange(hora) {
        if (hora >= 9 && hora <= 18) {
            return true;
        } else {
            return false;
        }
    }

    const hora = 6;//hora en modo 24 horas

    if (isHourInRange(hora) === true) {
        console.log(`La hora: ${hora} esta en el rango entre 9AM y 6PM`)
    }
    else{
        console.log("La hora NO esta en el rango entre 9AM y 6PM")
    }

/* 29. Verifica si una persona es mayor de 65 años o menor de 18 años.  */

    if (edadPersona >= 65) {
        console.log(`Su edad es ${edadPersona} USTED ES MAYOR DE 65 AÑOS`);
    }
    else if (edadPersona <= 18){
        console.log(`Su edad es ${edadPersona} USTED ES MENOR DE 18 AÑOS`);
    }
    else if (edadPersona <= 0){
        console.log("Imposible tener menor de 0 años");
    }
    else{
        console.log("No cumple ninguna condicion de la que se requiere su edad es no es ni mayor a 65 ni menor a 18");
    }
    

/* 30. Determina si un triángulo es equilátero (tres lados iguales).  */
/* 31. Verifica si un triángulo es isósceles (dos lados iguales).  */
/* 32. Determina si un triángulo es escaleno (todos los lados diferentes).  */

    let lado1 = 5;
    let lado2 = 3;
    let lado3 = 2;

    if (lado1 === lado2 && lado2 === lado3) {
        console.log(`Todos los lados son: ${lado1} ES EQUILATERO`);
    }
    else if(lado1 === lado2 && lado3 != lado2 || lado1 === lado3 && lado2 != lado3 || lado2 === lado3 && lado1 != lado3 ||  lado2 === lado1 && lado3 != lado1 ||  lado3 === lado1 && lado2 != lado1 ||  lado3 === lado2 && lado1 != lado1){
        console.log(`dos lados valen ${lado1} y uno vale ${lado3} ES ISOCELES`);
    }
    else {
        console.log(`Todos los lados son diferentes: ${lado1} ${lado2} ${lado3} ES ESCALENO`);
    }
    

/* 33. Verifica si un número es mayor que el doble de otro número.  */

    const numNormal = 4;
    const numDoble = 8;
    const dobleDeNumDoble = Math.pow(numDoble, 2);

    if (numNormal > dobleDeNumDoble) {
        console.log(`El numero ${numNormal} SI es mayor que el doble de ${numDoble}`);
    }
    else if (numNormal === dobleDeNumDoble){
        console.log(`El doble de ${numDoble} ES IGUAL a el numero que estamos comparando que es: ${numNormal}`);
    }
    else{
        console.log(`El numero ${numNormal} NO es mayor que el doble de ${numDoble}`);
    }

/* 34. Determina si la suma de dos números es mayor que 100.  */

    const numSuma = num + numNormal;

    if (numSuma > 100) {
        console.log(`La suma de los numeros ${num} y ${numNormal} SI es mayor que 100`);
    }
    else{
        console.log(`La suma de los numeros ${num} y ${numNormal} NO es mayor que 100`);
    }

/* 35. Verifica si la resta de dos números es menor que 50.  */

    const numResta = num - numNormal;

    if (numResta < 50) {
        console.log(`La RESTA de los numeros ${num} y ${numNormal} SI es MENOR que 50`);
    }
    else{
        console.log(`La RESTA de los numeros ${num} y ${numNormal} NO es MENOR que 50`);
    }

/* 36. Determina si un número es el doble del otro número.  */

    if (numNormal === dobleDeNumDoble) {
        console.log(`El numero ${numNormal} SI es el DOBLE de ${numDoble}`);
    }
    else{
        console.log(`El numero ${numNormal} NO es el DOBLE de ${numDoble}`);
    }

/* 37. Verifica si el doble de un número es igual al triple de otro número.  */

    const numTriple = 4;
    const tripleDeNumTriple = Math.pow(numTriple, 3);

    if (dobleDeNumDoble === tripleDeNumTriple) {
        console.log(`El DOBLE del numero ${numDoble} SI es IGUAL al TRIPLE de ${numTriple}`);
    }
    else{
        console.log(`El DOBLE del numero ${numDoble} NO es IGUAL al TRIPLE de ${numTriple}`);
    }

/* 38. Determina si la suma de dos números es igual a 50.  */

    if (numSuma === 50) {
        console.log(`La SUMA de los numeros ${num} y ${numNormal} SI es igual a 50`);
    }
    else{
        console.log(`la suma de los numeros ${num} y ${numNormal} NO es igual a 50`);
    }

/* 39. Verifica si el producto de dos números es mayor que 500.  */
    const numMutiplicacion = 5;
    const MultiplicacionDeNumMultiplicacion = num * numMutiplicacion;

    if (MultiplicacionDeNumMultiplicacion > 500) {
        console.log(`La multiplicacion de los numeros ${num} y ${numMutiplicacion} SI es MAYOR a 500`);
    }
    else if(MultiplicacionDeNumMultiplicacion === 500){
        console.log(`La multiplicacion de los numeros ${num} y ${numMutiplicacion} NO es IGUAL a lo que estamos comparando que es: 500`);
    }
    else{
        console.log(`La multiplicacion de los numeros ${num} y ${numMutiplicacion} NO es MAYOR a 500`);
    }

/* 40. Determina si la división de dos números es menor que 10. */

    const  numDivision = 4;
    const divisionDeNumDivision = numDivision / num;

    if (divisionDeNumDivision < 10) {
        console.log(`La division de los numeros ${numDivision} y ${num} SI es MENOR a 10`)
    }
    else if (divisionDeNumDivision === 10){
        console.log(`La division de los numeros ${numDivision} y ${num} es IGUAL al numero que estamos comparando que es: 10`)
    }
    else{
        console.log(`La division de los numeros ${numDivision} y ${num} NO es MENOR a 10`)
    }