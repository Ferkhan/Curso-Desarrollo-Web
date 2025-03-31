// FUNCIONES

// Bloques de código que nos permiten reutilizar tantas 
// veces como nosotros queramos

// 1. DECLARACIÓN
// Plano de la función
// Lo que está dentro de los paréntesis en la declaración son parámetros
function suma(valorA, valorB) {
    console.log("Valor 1: ", valorA);
    console.log("Valor 2: ", valorB);
    
    return valorA + valorB;
}


// 2. INVOCACIÓN
// Ejecutamos nuestra función
// Los valores reales que se introducen en los paréntesis de la invocación se 
// les conoce como argumentos
console.log(suma(10, 30));
console.log(suma(33,4));
console.log(suma(2,8));
console.log(suma(2,0.3));
console.log(suma(11,3.4));
