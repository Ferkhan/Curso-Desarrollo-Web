// OBJETOS

/**
 * Tipo de datos que nos permiten almacenar colecciones de datos
 * Nos ayudan a describir una entidad real, con sus propiedaes y valores
 * Propiedades -> String (texto plano)
 * Valores -> cualquier otro tipo de datos
 * 
 * 
 * 2 FORMAS:
 * A. Object Literals
 * B. Object constructors
 */

let usuario = {
    nombre: "Sandra",
    apellido: "Cueva",
    edad: 33,
    casada: false,
    redes: {
        facebook: "facebook.com/Sandra-Cueva",
        instagram: null
    },
    saludar: function() {
        console.log("Hola");
        return "Adiós";
    }
}

console.log(usuario);
console.log(usuario.nombre);
console.log(usuario.casada);
console.log(usuario.saludar());



// ACCESO A PROPIEDADES DE UN OBJETO
console.log(usuario.redes.facebook); // DOT NOTATION
console.log(usuario["nombre"]); // BRACKET NOTATION
console.log(usuario["redes"]["facebook"]);



