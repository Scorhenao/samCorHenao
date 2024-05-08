const parrafo1 = document.getElementById("parrafo1");
const parrafo2= document.getElementById("parrafo2");
const boton = document.getElementById('boton');

console.log(parrafo1.classList);

// boton.addEventListener("click", () =>{
//     parrafo1.classList.remove('elementoPrincipal1');
//     parrafo1.classList.remove('elementoSecundario1');
//     parrafo2.classList.add('elementoPrincipal2');
//     parrafo2.classList.add('elementoSecundario2');
//     parrafo2.classList.remove('elementoPrincipal2');
//     parrafo2.classList.remove('elementoSecundario2');
//     parrafo2.classList.add('elementoPrincipal1');
//     parrafo2.classList.add('elementoSecundario1');

// });

//intercambiando estilos de dos parrafos con un boton
let clickCambio = true;

let cambiar = boton.addEventListener("click", ()=>{
    if (clickCambio === true) {
        parrafo1.classList.remove('elementoPrincipal');
        parrafo2.classList.remove('elementoSecundario');
    
        parrafo1.classList.add('elementoSecundario');
        parrafo2.classList.add
        ('elementoPrincipal');
    } 
    else{
        parrafo1.classList.remove('elementoSecundario');
        parrafo2.classList.remove('elementoPrincipal');
        
        parrafo1.classList.add('elementoPrincipal');
        parrafo2.classList.add('elementoSecundario');
    }
    clickCambio =!clickCambio;
});

//lo mismo de arriba con mas posibles acciones para buscar 
//const parrafo3 = document.querySelector("#parrafo1")//clase, elemento o id

//ver todas las propiedades de elementros HTML
const divs = document.querySelectorAll("div");
console.log(divs);
console.log(divs[0]);//accede al objeto
console.log(divs[0].innerHTML);//accede al valor de la propiedad del objeto
console.log(divs[0].firstChild.nodeValue);//accede a una de las propiedades del objeto
divs[0].firstChild.nodeValue = "nuevo texto";//accede una de las propiedades y modifica los valores 

// console.log(parrafo1);
// console.log(parrafo2);
// console.log(boton);

