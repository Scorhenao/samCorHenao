/**
 * == comparar
 * = asignar
 * OPERADORES DE ASIGNACION
 * 
 * c = a + b
 * a += b
 * a -= b
 * a *= b
 * a /= b
 * a %= b
 * a **= b
 * 
 * OPERADORES DE CONDICION
 * and
 * or
 * &&
 * ||
 * 
 * OPERADORES DE BOLEANOS
 * == //iguala solo valor
 * !==
 * === and !== //=== iguala valor y tipo
 * > & <
 * >= & <=
 * ! //saber si un objeto es nulo
 * 
 * OPERADIRES UNARIOS
 * a++
 * a--
 * ++a
 * -a
 * 
 * OPERADORES DE COMPARACION
 * 
 * OPERADORES BINARIOS
 * and = a&b
 * or = a | b
 * 
 * OPERADORES AVANZADOS
 * operador termario a? a:b
 * and &&
 * or || 
 * operador de asignacion logica nula ?? 
*/ 

/* const objeto = null
!objeto
!!objeto */
// !objeto -> true
// !!objeto -> false

const x = 0;
const y = 5;
const z = 5;

console.log(x==y && y==z);// y
console.log(x==y || y==z);// o almenos uno es verdadero entonces con que almenos uno se cumpla es verdadero

/* const v = false; */

/*const v = null;*///null puede ser un objeto

console.log(v? x:z);//si la condicion v es verdadero pone x sino z

console.log(v??z);//si  la condicion v es null haga z

console.log(x??=z);//si x es null o undefined return z(x debe ser let)

console.log(!v)//retorna lo contrario si es true vuelve false