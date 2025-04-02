// DECLARACIONES

// Función declarada
console.log(saludar("Fernando")); // Llamada antes de ser creada

function saludar(nombre) {
    return "Hola, " + nombre;
}



// Función de expresión
const varSaludar = function (nombre) {
    return "Qué tal, " + nombre + "?";
}

console.log(varSaludar("Alex"));

