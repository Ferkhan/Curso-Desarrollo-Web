// Tipos de datos
// - Primitivos: double, boolean, char
// - No primitivos: string, arrays, funcions


// los dobles tienen 52 bits de mantisa, lo cual es suficiente para guardar enteros de hasta 9✕10¹⁵.

3;   
console.log(3);
1.5; 
console.log(1.5);



// Toda la aritmética básica.
1 + 1; 
0.1 + 0.2; 
8 - 1; 
10 * 2;
35 / 5; 


// Incluyendo divisiones con resultados no enteros.
5 / 2; 



// Hay tres casos especiales de valores con los números:
Infinity; // por ejemplo: 1/0
-Infinity; // por ejemplo: -1/0
NaN; // por ejemplo: 0/0


// También hay booleanos:
true;
false;



// Los Strings se pueden crear con ' o ".
'abc';
"Hola, mundo";




// La negación se aplica con la expresión !
!true; 
!false; 

// Las variables se declaran con la palabra var, let o const. JavaScript cuenta con tipado dinámico,
// así que no se necesitan aplicar tipos. La asignación se logra con el operador =.
var miPrimeraVariable = 5;

// si no escribes la palabra var no se marcará ningún error...
miSegundaVariable = 10;

// ...pero la variable se declarará en el ámbito global, no en el ámbito
// en el que se definió.


// Las variables que no están aún asignadas tienen el valor undefined.
var miTerceraVariable; 



// Existen atajos para realizar operaciones aritméticas:
miPrimeraVariable += 5;  // miPrimeraVariable = miPrimeraVariable + 5;

miPrimeraVariable *= 10; // miPrimeraVariable = miPrimeraVariable * 10;


// Y atajos aún más cortos para sumar y restar 1
miPrimeraVariable++; 
miPrimeraVariable--;



// Para comprobar una igualdad se usa ===
1 === 1; 
2 === 1;


// Para comprobar una desigualdad se usa !==
1 !== 1;
2 !== 1;



// Más comparaciones
1 < 10; 
1 > 10; 
2 <= 2; 
2 >= 2; 


// Los Strings se concatenan con +
"¡Hola " + "mundo!"; // = "¡Hola mundo!"


// y se comparan con < y con >
"a" < "b"; 


// Los tipos no importan con el operador ==
"5" == 5; 

null == undefined; 

// ...a menos que uses ===
"5" === 5; 
null === undefined; 


// Los Strings funcionan como arreglos de caracteres
// Puedes acceder a cada caracter con la función charAt()
"Este es un String".charAt(0); 


// ...o puedes usar la función substring() para acceder a pedazos más grandes
"Hola Mundo".substring(0, 4);


// length es una propiedad, no se usa ()
"Hola".length; 


// También hay null y undefined
null;       // usado para indicar una falta de valor deliberada
undefined;  // usado para indicar que un valor no está presente actualmente
            // (aunque undefined es un valor en sí mismo)




//==================================//
//============EJERCICIOS============//
//==================================//

//==================================//
/* EJERCICIO 1: CREAR UNA VARIABLE DE CADA TIPO DE DATO E IMPRIMIRLAS EN CONSOLA
- Booleano
- null
- undefined
- Number
- String
*/
let variable1 = true;
let variable2 = null;
let variable3 = undefined;
let variable4 = 34;
let variable5 = "Hola";


//==================================//
/* EJERCICIO 2: CREAR 4 VARIABLES E IMPRIMIRLAS EN CONSOLA
- Una variable que sume dos números
- Una variable que reste dos números
- Una variable que multiplique dos números
- Una variable que divida dos números
*/
let resultado = 34 * 8;
console.log(resultado);


//==================================//
/* EJERCICIO 3: CREAR 3 VARIABLES E IMPRIMIRLAS EN CONSOLA
- Crea una variable que almacene un primer número. Luego, otra variable que almacene un 
  segundo número, finalmente que se sumen por referencia.
*/
let numUno = 34;
let numDos = 23;

let resultadoSuma = numUno + numDos;
console.log(resultadoSuma);
