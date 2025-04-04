// EVENTOS

// 1. VARIABLES

const botonCrear = document.querySelector("#btn_crear");
const areaBotones = document.querySelector("#botones");
const seccionResultado = document.querySelector("#resultado");

const botonCambiarAzul = document.createElement("button");
botonCambiarAzul.textContent = "Cambiar color a azul";
botonCambiarAzul.id =  "btn_azul";


// 2. EVENTOS

botonCrear.addEventListener("click", () => {

    // GENERAR BOTÓN QUE CAMBIA A AZUL
    areaBotones.appendChild(botonCambiarAzul);

    // QUITAR EL ELEMENTO
    botonCrear.remove();

    // CREAR CONTENIDO
    return seccionResultado.innerHTML = `
        <h1>Un título</h1>
        <p>Creamos un nuevo elemento (párrafo)</p>
    `
})

botonCambiarAzul.addEventListener("click", () => {
    seccionResultado.style.fontFamily = "Arial";
    seccionResultado.style.fontSize = "10px";
    return seccionResultado.style.color = "blue";

})