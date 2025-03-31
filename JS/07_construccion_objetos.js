// OBJECT CONSTRUCTOR

// A través de un función, podemos "construir un objeto"
// utilizando la palabra "new"

function Persona(nombre, edad) {

    // 1. Propiedades
    this.nombre = nombre;
    this.edad = edad;
    
    // 2. Métodos (comportamientos)
    this.saludar = function() {
        return "Hola, mi nombre es " + this.nombre
    }
}

// Generar primer objeto
const persona1 = new Persona("Fernando", 45);
console.log(persona1);
console.log(persona1.saludar());


// Generar segundo objeto
const persona2 = new Persona("María", 21);
console.log(persona2);
console.log(persona2.saludar());


