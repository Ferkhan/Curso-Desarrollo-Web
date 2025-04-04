// EVENTOS CALCULADORA

// 1. VARIABLES

const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");

const btnSumar = document.querySelector("#suma");
const btnRestar = document.querySelector("#resta");
const btnMultiplicar = document.querySelector("#multiplicar");
const btnDividir = document.querySelector("#dividir");

const areaResultado = document.querySelector("#resultado");


// 2. EVENTOS

btnSumar.addEventListener("click", () => {
    // CAPTURAR LOS VALORES DE LOS CAMPOS DE TEXTO
    const valor1 = parseFloat(num1.value);
    const valor2 = parseFloat(num2.value);

    // OBTENER LA SUMA TOTAL
    const resultado = valor1 + valor2;

    return areaResultado.innerHTML = resultado;
})


btnRestar.addEventListener("click", () => {
    // CAPTURAR LOS VALORES DE LOS CAMPOS DE TEXTO
    const valor1 = parseFloat(num1.value);
    const valor2 = parseFloat(num2.value);

    // OBTENER LA RESTA TOTAL
    const resultado = valor1 - valor2;

    return areaResultado.innerHTML = resultado;
})

btnMultiplicar.addEventListener("click", () => {
    // CAPTURAR LOS VALORES DE LOS CAMPOS DE TEXTO
    const valor1 = parseFloat(num1.value);
    const valor2 = parseFloat(num2.value);

    // OBTENER LA MULTIPLICACIÓN TOTAL
    const resultado = valor1 * valor2;

    return areaResultado.innerHTML = resultado;
})

btnDividir.addEventListener("click", () => {
    // CAPTURAR LOS VALORES DE LOS CAMPOS DE TEXTO
    const valor1 = parseFloat(num1.value);
    const valor2 = parseFloat(num2.value);

    // OBTENER LA DIVISIÓN TOTAL
    const resultado = valor1 / valor2;

    return areaResultado.innerHTML = resultado;
})