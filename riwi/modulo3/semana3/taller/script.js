// 1. Crea un objeto llamado persona con propiedades como nombre, edad y ciudad. 

    let persona = {
        nombre: "Samuel",
        edad: 25,
        ciudad: "Colombia"
    };

// 2. Agrega una propiedad adicional al objeto persona que represente su ocupación. 
console.log("");

    persona.ocupacion = "Desarrollador de software";


// 3. Accede a una propiedad del objeto persona y muestra su valor en la consola.
console.log("");

    console.log(`accediendo a una propiedad y mostrando su valor: ${persona.nombre}`);

// 4. Crea otro objeto llamado libro con propiedades como título, autor y año de publicación. 
console.log("");

    let libro = {
        titulo: "El principito",
        autor: "John de Saint-Exupéry",
        añoPublicacion: 1943
    };

// 5. Combina las propiedades de los objetos persona y libro en un nuevo objeto llamado informacion. 
console.log("");

    let informacion = {
        persona: persona,
        libro: libro
    };

    console.log("Creando un objeto que tenga otros dos");
    console.log(informacion);

// 6. Cambia el valor de una propiedad en el objeto persona. 
console.log("");

    persona.nombre = "Samuelito";

    console.log(`Cambiando el valor de una propiedad en el objeto persona: ${persona.nombre}`);
    
// 7. Elimina una propiedad del objeto libro. 
console.log("");

    delete añoPublicacion;

    console.log("Eliminando la propiedad añosPublicacion del objeto libro$");
    console.log(libro);
    
// 8. Crea un objeto llamado coche con propiedades como modelo, marca y año. 
console.log("");

    let coche = {
        modelo: "Clio",
        marca: "Renault",
        año: 2022
    }

// 9. Muestra todas las propiedades del objeto coche en la consola. 
console.log("");

    console.log(`Mostrando cada una de las porpiedades del objeto coche`);

    Object.keys(coche).forEach((key)=>{
        console.log(key)
    });
    
// 10. Agrega un método al objeto coche que imprima un mensaje en la consola. 



// 11. Crea un objeto llamado circulo con propiedades como radio y color. 
console.log("");

    let circulo = {
        radio: 10,
        color: "rojo"
    };

// 12. Calcula el área del círculo utilizando la fórmula A = πr² y muestra el resultado. 
console.log("");

    funcionAreaCirculo = (radio) => {
        let area = Math.PI * Math.pow(radio, 2);

        return area
    };

    console.log(`El area del circulo es: ${funcionAreaCirculo(circulo.radio)}`);

// 13. Crea un objeto llamado rectangulo con propiedades como ancho y alto. 
console.log("");

    let rectangulo ={
        ancho: 10,
        alto: 10
    };

// 14. Calcula el perímetro del rectángulo utilizando la fórmula P = 2 * (ancho + alto) y muestra el resultado. 
console.log("");

    funcionPerimetroRectangulo = (ancho, alto) =>{
        let perimetro = 2 *(ancho + alto);

        return perimetro
    };

    console.log(`El perimetro del rectangulo es: ${funcionPerimetroRectangulo(rectangulo.ancho, rectangulo.alto)}`);

// 15. Combina las propiedades de los objetos circulo y rectangulo en un nuevo objeto llamado formas. 
console.log("");

    let formas = {
        circulo: circulo,
        rectangulo: rectangulo
    };

// 16. Crea un objeto llamado computadora con propiedades como marca, modelo y precio. 
console.log("");

    let computadora = {
        marca: "Asus",
        modelo: "ROG",
        precio: 100000
    };

// 17. Muestra el precio de la computadora en la consola. 
console.log("");

    console.log(`El precio de la computadora es: ${computadora.precio}`);

// 18. Agrega una propiedad al objeto computadora que indique si tiene o no una tarjeta gráfica. 
console.log("");

    //computadora.tarjetaGrafica ="Rtx9040Ti";//comprovando si tiene tarjeta grafica

    funcionTarjetaGrafica = (objeto) =>{
        if (objeto.tarjetaGrafica != undefined) {
            return true;
        }
        else{
            return false;
        }    
    };

    if (funcionTarjetaGrafica(computadora) === true) {
        console.log(`El objeto computador Si tiene tarjeta grafica`);
    }
    else{
        console.log(`El objeto computador No tiene tarjeta grafica`);
    }


// 19. Crea un objeto llamado mascota con propiedades como nombre, especie y edad. 
console.log("");

    let mascota = {
        nombre: "Pelusa",
        especie: "Gato",
        edad: 10
    };

// 20. Muestra en la consola la especie de la mascota en mayúsculas. 

    console.log(`La especie de las mascota es: ${mascota.especie.toUpperCase()}`)

// 21. Crea un objeto llamado fruta con propiedades como nombre y color. 

// 22. Agrega un método al objeto fruta que imprima un mensaje 
// indicando si la fruta está madura. 
// 23. Crea un objeto llamado estudiante con propiedades como 
// nombre, edad y calificaciones. 
// 24. Muestra en la consola el promedio de las calificaciones del 
// estudiante. 
// 25. Agrega una propiedad al objeto estudiante que indique si ha 
// aprobado o no. 
// 26. Crea un objeto llamado bolsa con propiedades como tamaño y 
// color. 
// 27. Muestra en la consola un mensaje que indique la capacidad 
// de la bolsa (tamaño). 
// 28. Agrega un método al objeto bolsa que cambie su color. 
// 29. Crea un objeto llamado telefono con propiedades como 
// marca, modelo y sistema operativo. 
// 30. Muestra en la consola un mensaje indicando el sistema 
// operativo del teléfono. 
// 31. Agrega una propiedad al objeto telefono que represente la 
// cantidad de memoria RAM. 
// 32. Crea un objeto llamado animal con propiedades como tipo y 
// sonido. 
// 33. Muestra en la consola un mensaje que indique el sonido del 
// animal. 

// 34. Agrega un método al objeto animal que imprima un mensaje 
// indicando su tipo y sonido. 
// 35. Crea un objeto llamado vuelo con propiedades como 
// aerolínea, número de vuelo y hora de salida. 
// 36. Muestra en la consola un mensaje que indique la aerolínea y 
// el número de vuelo. 
// 37. Agrega una propiedad al objeto vuelo que represente el 
// destino del vuelo. 
// 38. Crea un objeto llamado jugador con propiedades como 
// nombre, equipo y posición. 
// 39. Muestra en la consola un mensaje que indique el nombre y el 
// equipo del jugador. 

// 40. Agrega un método al objeto jugador que imprima un mensaje 
// indicando su posición en el equipo.