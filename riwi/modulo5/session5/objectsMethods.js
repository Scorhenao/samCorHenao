/**new form js */

class Math {

    constructor(aNumber,bNumber) {
        this.aNumber = aNumber
        this.bNumber = bNumber
    }

    static suma(a,b) {
        return a+b;
    }
}

let mathInstancia = new Math(1,2);
console.log(Math.suma(mathInstancia.aNumber,mathInstancia.bNumber));
// console.log(Math.suma(1,2));

/**hijo de Math */

class Math2 extends Math {

    constructor(aNumber,bNumber,a,b) {
        super(aNumber,bNumber)
        this.a = a
        this.b = b
    }

    static resta(a,b) {
        return a-b;
    }
}
 
let math2Instancia = new Math2(1,2,3,4);
console.log(Math2.resta(math2Instancia.a,math2Instancia.b));

/**old form js (prototype)*/

function Computador(nombre, id) {
    this.nombre = nombre;
    this.id = id;
}

// Método de Computador
Computador.prototype.toString = function() {
    return `nombre: ${this.nombre}, id: ${this.id}`;
};

// Constructor de Procesador
function Procesador(nombre, id, velocidad) {
    Computador.call(this, nombre, id); // Llamada al constructor de la clase base (Computador)
    this.velocidad = velocidad;
}

// Establecer la herencia
Procesador.prototype = Object.create(Computador.prototype);
Procesador.prototype.constructor = Procesador;

// Método estático de Procesador
Procesador.velocidadEnMs = function() {
    return 1000;
};

// Creación de una instancia de Procesador
let procesador = new Procesador('i7', 1, 3.2);

// Pruebas de funcionamiento
console.log(Procesador.velocidadEnMs()); // Método estático
console.log(procesador.velocidad); // Propiedad de instancia
console.log(procesador.nombre); // Propiedad heredada de Computador
console.log(procesador.id); // Propiedad heredada de Computador
