// DOM

/**
 * DOM: Document Object Model
 * Representación estructurada de un documento HTML en forma de árbol
 * 
 * Permite a JS interactuar y modificar dinámicamente el contenido, estructura
 * y estilos de la página web
 */

const tituloTag = document.querySelector("#titulo");
const saludoTag = document.querySelector(".saludo");

console.log(tituloTag);
console.log(saludoTag);


// MANIPULACIÓN

// 1. Capturar la etiqueta
const zonaTrabajoTag = document.querySelector("#zona_trabajo");
const saludandoTag = document.querySelector("#saludando");

console.log(zonaTrabajoTag);
console.log(saludandoTag);

// 2. Modificación de la etiqueta
saludandoTag.innerHTML = `
    <span>Este es un elemento tipo Span</span>
`

saludandoTag.style.color = "#ead";
saludandoTag.style.fontFamily = "Arial";

saludandoTag.setAttribute("class", "clase1");

zonaTrabajoTag.innerHTML = `
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
    </ul>
`

const seccionTrabajoTag = document.querySelector("#seccion_trabajo");

console.log(seccionTrabajoTag);

// CREAR NUEVO ELEMENTO
const varH1 = document.createElement("h1");

// GENERAR ATRIBUTOS Y CONTENIDO
varH1.textContent = "Nuevo título";
varH1.setAttribute("class", "nueva_seccion");

// ADJUNTAR AL NUEVO PADRE
seccionTrabajoTag.appendChild(varH1);





