/* let edad = 80;
nacionalidad = "VENEzolano"
nacionalidad.toUpperCase(nacionalidad);

function funcioncita(edad){
    if (edad >= 18 && edad < 65) {
        console.log("Eres mayor de edad. Puedes manejar.");
    }
    else if(edad >= 65){
        console.log("Tienes restricciones de manejo");
    }
    else {
        console.log("No eres mayor de edad. No puedes manejar.");
    }
    
}

if (nacionalidad === "VENEZOLANO"){
    console.log("no por veneco")
}
else{
    console.log(funcioncita(edad))
}

 */

let edad = 66;

if (edad >= 18 && edad <= 65) {
    console.log("Eres mayor de edad. Puedes manejar.");
}

else if(edad > 65){
    console.log("Tienes restricciones de manejo");
}

else {
    console.log("No eres mayor de edad. No puedes manejar.");
}



/* let nacionalidad;

if (nacionalidad == undefined) {
    nacionalidad = prompt("Ingrese una nacionalidad");
} */

let nacionalidad = prompt("Ingrese una nacionalidad").toLocaleLowerCase();
//Lower agarra el resultado del prompt

//Otra forma para memorizar

/* let nacionalidadFormateada = nacionalidad.toLowerCase();
switch (nacionalidadFormateada) {
    case "colombiano":
        console.log("Eres colombiano");
        break;
    case "venezolano":
        console.log("Eres venezolano");
        break;
    default:
        console.log("Eres de otro pais");
        break;
} */

/* if (nacionalidad === "colombiano"){
    console.log("si parce")
}

if (nacionalidad === "venezolano"){
    console.log("no por veneco")
}
 */

switch (nacionalidad) {
    case "colombiano":
        console.log("Eres colombiano");
        break;
    case "venezolano":
        console.log("Eres venezolano");
        break;
    default:
        console.log("Eres de otro pais");
        break;
}
