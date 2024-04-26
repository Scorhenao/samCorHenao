/**funcion dentro de funcion */

/**FORM LARGA */
//FB = fucnion B
const FB = function () {
    console.log("Funcion B ejecutada.");
};
    //FA = Funcion A
    const FA = function(CALLBACK){
        CALLBACK();
    };
    FA(FB);

/**FORMA ACORTADA */
const fb = () =>console.log("Funcion B especificada ejecutandose");

const fa = callback => callback();/**espera una funcion, este caso espera al fb tiene parametro en cambio fb no*/

fa(fb);/**uso, llamamos a las 2 a la vez */