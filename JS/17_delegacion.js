// DELEGACIÓN DE EVENTOS

// 1. VARIABLES
const botones = document.querySelector("#botones");
const mensaje = document.querySelector("#mensaje");

// 2. EVENTOS

botones.addEventListener("click", (evento) => {
    console.log(evento);
    console.log(evento.currentTarget);
    console.log(evento.target);

    console.log(evento.target.attributes);
    console.log(evento.target.attributes.class.value);

    console.log(evento.target.textContent);

    console.log(evento.target.attributes.id.value);

    const valorProp = evento.target.attributes.propiedad.value;

    if (valorProp === "hola mundo") {
        return mensaje.innerHTML = "Hola, mundo!";
    } else if (valorProp === "saludar") {
        return mensaje.innerHTML = "Qué tal? Mi nombre es Fernando."
    } else if (valorProp === "despedirse") {
        return mensaje.innerHTML = "Adiós, nos vemos pronto..."
    }
})