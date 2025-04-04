// FORMULARIO

// 1. Variables
const form = document.querySelector("#formulario");
const btnEnviar = document.querySelector("#enviar");
const informe = document.querySelector("#informe");

// 2. Eventos

btnEnviar.addEventListener("click", (event) => {

    // DETENER LA RECARGA DE PÁGINA
    event.preventDefault();

    // ABSTRAER TODOS LOS DATOS EN VARIABLES

    // A. NOMBRE
    const nombre = form.nombre.value;
    
    // B. EMAIL
    const email = form.email.value;
    
    // C. FECHA DE NACIMIENTO
    const fechaN = form.fechaNacimiento.value;
    
    // D. MÚSICA
    const musica = form.musica.checked;
    let musicaSeleccionada;

    if (musica) {
        musicaSeleccionada = "Me gusta el pop";
    } else {
        musicaSeleccionada = "No me gusta esa música";
    }

    // E. POSTRE
    const postre = form.postre.checked;
    let postreZanahoria;

    if (postre) {
        postreZanahoria = "Me gusta el pastel de Zanahoria";
    } else {
        postreZanahoria = "No me gusta ese tipo de pastel";
    }

    // F. COLORES
    const indexSeleccionado = form.decision_color.selectedIndex;
    
    const opcionColor = form.decision_color.options[indexSeleccionado];
    const valorColor = opcionColor.text;
    console.log(valorColor);

    // MOSTRAR TODOS LOS ELEMENTOS EN LA SECCIÓN DE INFORME

    return informe.innerHTML = `
        <div>
            <h1>Resultados</h1>
            <p>Hola, ${nombre}, es un gusto conocerte</p>
            <p>Tu email es ${email}</p>
            <p>Has nacido el día ${fechaN}</p>
            <p>${musicaSeleccionada}</p>
            <p>${postreZanahoria}</p>
            <p>Al parecer tu color favorito es el ${valorColor}. El mío también xd.</p>
        </div>
    `

})