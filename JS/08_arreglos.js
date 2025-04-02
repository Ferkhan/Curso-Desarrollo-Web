// ARREGLOS

/**
 * Tipo de dato
 * 
 * Permite almacenar múltiples datos en una sola variable
 * 
 * Pueden contener más de un valor simultáneo
 * 
 * Cada uno de los valores los llamaremos "Elemento"
 */

// CREACIÓN DE UN ARREGLO
//                          0          1         2
const nombrePersonas = ["Fernando", "Luisa", "Raquel"];

// ACCESO A LOS ELEMENTOS 
nombrePersonas[0]; // Fernando
nombrePersonas[1]; // Luisa
nombrePersonas[2]; // Raquel

console.log(nombrePersonas[10]);


// ESTABLECER LA CANTIDAD DE ELEMENTOS
console.log(nombrePersonas.length); // 3 elementos

// ACCEDER AL ÚLTIMO ELEMENTO DE UN ARREGLO
console.log(nombrePersonas[nombrePersonas.length-1]);

// CÚANDO UTILIZAR LOS ARREGLOS
// Siempre y cuando queramos agrupar datos bajo un mismo contexto

// Los arreglos no necesariamente tienen todos sus elementos del miso tipo de dato
const elementos = [
    "Fernando",
    23,
    true,
    "Comida",
    false,
    {
        pais: "Ecuador"
    }
]

console.log(elementos);




