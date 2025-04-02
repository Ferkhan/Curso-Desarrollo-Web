// MANIPULAR ARREGLOS

const nombres = ["Fernando", "Raquel", "Luisa", "David"];

// SACAR EL ÚLTIMO ELEMENTO
nombres.pop();
console.log(nombres);

// PONER UN ELEMENTO AL FINAL
nombres.push("Pepe");
console.log(nombres);

// SHIFTING - QUITAR EL PRIMER ELEMENTO DEL ARREGLO
nombres.shift();
console.log(nombres);

// UNSHIFT - AGREGA UN ELEMENTO AL INICIO DEL ARREGLO
nombres.unshift("Alex");
console.log(nombres);

// CAMBIAR EL VALOR DE UN ELEMENTO
nombres[1] = "Renato"
console.log(nombres);

// SLICE - SLICING
const masNombres = nombres.slice(1, 3);
console.log(masNombres);

// SPLICE - SPLICING
nombres.splice(1,2,"Micky");
console.log(nombres);


const animales = ["perro", "gato", "vaca"];
console.log(animales);

animales[20] = "cerdo";
console.log(animales[10]);



