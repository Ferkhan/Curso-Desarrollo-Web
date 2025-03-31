// MÉTODOS DE OBJETOS

// 1. OBJECT.KEYS

const pais = {
    nombre: "Ecuador",
    poblacion: 18000000
}

// Devolver un arreglo con propiedades de objeto
const arrPais = Object.keys(pais);
console.log(arrPais);



// 2. OBJECT.ASSIGN
//      a. Fusionar propiedades

const item1 = {speak: "English"};
const item2 = {habla: "Español"};
const item3 = {parla: "Italiano"};

const idiomas = Object.assign(item1, item2, item3);
console.log(idiomas);

//      b. Sístesis del último valor
const pais1 = {nombre: "Perú", comida: "Paloma Frita"};
const pais2 = {nombre: "Ecuador", comida: "Cuy Asado"};
const pais3 = {nombre: "Colombia"};

const paises = Object.assign(pais1, pais2, pais3);
console.log(paises);


