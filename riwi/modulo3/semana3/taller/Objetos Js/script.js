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
    };

// 9. Muestra todas las propiedades del objeto coche en la consola. 
console.log("");

    console.log(`Mostrando cada una de las porpiedades del objeto coche`);

    Object.keys(coche).forEach((key)=>{
        console.log(key);
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

        return area;
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

    console.log(`La especie de las mascota es: ${mascota.especie.toUpperCase()}`);

// 21. Crea un objeto llamado fruta con propiedades como nombre y color. 

    let fruta ={
        nombre: "Manzana",
        color: "Rojo",
        madura: true
    };

// 22. Agrega un método al objeto fruta que imprima un mensaje indicando si la fruta está madura. 
console.log("");

    funcionFrutaMadura = (objeto) =>{
        if (objeto.madura === null || objeto.madura === undefined) {
            return null;
        }
        else if (objeto.madura != false) {
            return true;
        }
        else{
            return false;
        }

    }

    if (funcionFrutaMadura(fruta) === null) {
        console.log("El objeto fruta no tiene la propiedad madura");
    }
    else if (funcionFrutaMadura(fruta) === true) {
        console.log(`El objeto fruta dice que la fruta Si esta Madura`);
    }
    else{
        console.log(`El objeto fruta dice que la fruta No esta Madura`);
    }

// 23. Crea un objeto llamado estudiante con propiedades como nombre, edad y calificaciones. 
console.log("");
    
    let estudiante = {
        nombre: "John",
        edad: 20,
        calificaciones: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    };

// 24. Muestra en la consola el promedio de las calificaciones del estudiante. 
console.log("");

    funcionPromedioCalificaciones = (objeto) =>{
        let suma = 0;
        objeto.calificaciones.forEach(calificacion => {
            calificacion ++
            suma += calificacion;
            });
        
        let promedio = suma / objeto.calificaciones.length;
        return promedio;
    }

    console.log(`El promedio de calificaciones del estudiante es: ${funcionPromedioCalificaciones(estudiante)}`);

// 25. Agrega una propiedad al objeto estudiante que indique si ha aprobado o no. 
console.log("");

    const promedioParaganar = 6; 

    funcionAprovacionEstudiante = (objeto,promedioNecesario) =>{
        if (funcionPromedioCalificaciones(objeto) >= promedioNecesario) {
            console.log(`El estudiante ${objeto.nombre} ha APROVADO`);
        }
        else{
            console.log(`El estudiante ${objeto.nombre} ha REPROVADO`);
        }
    }
    
    funcionAprovacionEstudiante(estudiante,promedioParaganar);
    
// 26. Crea un objeto llamado bolsa con propiedades como tamaño y color. 
console.log("");

    let bolsa = {
        tamaño: 'grande',
        color: 'azul'
    };

// 27. Muestra en la consola un mensaje que indique la capacidad de la bolsa (tamaño). 
console.log("");

    console.log(`La capacidad de la bolsa es: ${bolsa.tamaño}`);


// 28. Agrega un método al objeto bolsa que cambie su color. 
console.log("");

    bolsa.color = 'rojo';
    console.log(`El color de la bolsa es: ${bolsa.color}`);


// 29. Crea un objeto llamado telefono con propiedades como marca, modelo y sistema operativo. 
console.log("");

    let telefono = {
        marca: 'Samsung',
        modelo: 'Galaxy S22',
        sistema: 'Android'
    };

// 30. Muestra en la consola un mensaje indicando el sistema operativo del teléfono. 
console.log("");

    console.log(`El sistema operativo del telefono es: ${telefono.sistema}`)

// 31. Agrega una propiedad al objeto telefono que represente la cantidad de memoria RAM. 
console.log("");

    telefono.ram = '8GB';

// 32. Crea un objeto llamado animal con propiedades como tipo y sonido. 
console.log("");

    let animal = {
        tipo: 'gato',
        sonido: 'miau'
    };

// 33. Muestra en la consola un mensaje que indique el sonido del animal. 
console.log("");

    console.log(`El sonido del animal es: ${animal.sonido}`);

// 34. Agrega un método al objeto animal que imprima un mensaje indicando su tipo y sonido. 
console.log("");

    for (const key in animal) {
        console.log(`${key} = ${animal[key]} `)
    };
    
// 35. Crea un objeto llamado vuelo con propiedades como aerolínea, número de vuelo y hora de salida. 
console.log("");

    let vuelo = {
        aerolinea: 'Avianca',
        numeroVuelo: 'AR123',
        horaSalida: '10:00'
    };

// 36. Muestra en la consola un mensaje que indique la aerolínea y el número de vuelo. 
console.log("");

console.log(`La aereolinea es: ${vuelo.aerolinea}
El numero de vuelo es: ${vuelo.numeroVuelo}`);

// 37. Agrega una propiedad al objeto vuelo que represente el destino del vuelo. 
console.log("");

    vuelo.destino = "Alaska";

// 38. Crea un objeto llamado jugador con propiedades como nombre, equipo y posición. 
console.log("");

    let jugador = { 
        nombre: 'Caridad',
        equipo: 'Barcelona',
        posicion: 'Banca'
    };

// 39. Muestra en la consola un mensaje que indique el nombre y el equipo del jugador. 
console.log("");
    console.log(`El nombre del jugador es: ${jugador.nombre} 
    El equipo del jugaro es: ${jugador.equipo}`);

// 40. Agrega un método al objeto jugador que imprima un mensaje indicando su posición en el equipo.
console.log("");

    console