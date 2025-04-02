// MÉTODOS DE ARREGLOS

// for Each
//                   0           1          2       3    4    5   6 ...
const personas = ["Fernando", "Daniela", "Alex"];

personas.forEach(function(e, i) {
    personas[i + 3] = `Hola, ${e}`;
}
)

console.log(personas);

// map
const paises = ["Ecuador", "Perú", "Colombia"];

const nuevosPaises = paises.map(function (e,i) {
    // Debe retornar el cambio de cada elemento
    return `Yo soy de ${e}`
})

console.log(nuevosPaises);

// Filter
// A partir de un arreglo, permite encontrar ciertos elementos que cumplan con una condición

const numeros = [2, 8, 10, 11, 15, 16, 20, 3, 4, 100];

const nuevosNumeros = numeros.filter(function (elemento) {
    // Pasar la condición como retorno
    // Return tiene que tener una expresión True o False
    return elemento < 10;
})

console.log(nuevosNumeros);

// Reduce 
// Permite acceder a cada elemento del arreglo y acumularlo/combinarlo 
// con el objetivo de retornar un solo elemento (puede ser un tipo de dato diferente)

const numerosSerie = [10, 20, 30, 40, 50];

const sumaTotal = numerosSerie.reduce(function (acumulado, valorActual) {
    console.log("Valor actual:", valorActual);
    console.log("Valor total:", acumulado);    
    return valorActual + acumulado
}, 0)

console.log("Suma total:", sumaTotal);
