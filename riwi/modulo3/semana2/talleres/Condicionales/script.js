/* 1. Verifica si un número es positivo.  */
/* 2. Verifica si un número es negativo.  */

num = 7;

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
        console.log(`EL numero ${num} es cero :3!!!!!`);
    }
    else{
        console.log(`EL numero ${num} NO cero :3!!!!!`);

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
    let año = 2024;

    if (año % 4 === 0 && año % 100 != 0 || año % 400 === 0 ) {
        console.log(`EL año ${año} es un año bisiesto`);
    }
    else{
        console.log(`El año ${año} NO es un año bisiesto`);
    }

/* 13. Verifica si una persona es mayor de edad (mayor o igual a 18 años).  */

let edadPersona = 12;

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

    

/* 19. Verifica si una cadena de texto contiene la palabra "JavaScript".  */
/* 20. Determina si una cadena tiene más de 10 caracteres.  */
/* 21. Verifica si una cadena de texto está en minúsculas.  */
/* 22. Determina si una cadena de texto contiene al menos un número.  */
/* 23. Verifica si una cadena de texto termina con un punto (.).  */
/* 24. Determina si una cadena de texto es un pangrama (contiene todas 
las letras del alfabeto).  */
/* 25. Verifica si un día de la semana es laborable (de lunes a viernes).  */
/* 26. Determina si un día es fin de semana (sábado o domingo).  */
/* 27. Verifica si un número representa un mes válido (del 1 al 12).  */
/* 28. Determina si una hora está en el rango de 9 AM a 6 PM.  */
/* 29. Verifica si una persona es mayor de 65 años o menor de 18 años.  */
/* 30. Determina si un triángulo es equilátero (tres lados iguales).  */
/* 31. Verifica si un triángulo es isósceles (dos lados iguales).  */
/* 32. Determina si un triángulo es escaleno (todos los lados diferentes).  */
/* 33. Verifica si un número es mayor que el doble de otro número.  */
/* 34. Determina si la suma de dos números es mayor que 100.  */
/* 35. Verifica si la resta de dos números es menor que 50.  */
/* 36. Determina si un número es el doble del otro número.  */
/* 37. Verifica si el doble de un número es igual al triple de otro número.  */
/* 38. Determina si la suma de dos números es igual a 50.  */
/* 39. Verifica si el producto de dos números es mayor que 500.  */
/* 40. Determina si la división de dos números es menor que 10. */