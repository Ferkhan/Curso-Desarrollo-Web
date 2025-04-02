// CONSTRUCTORES

function Transporte (tipo) {

    // Propiedaes
    this.tipo = tipo;
    this.llantas = 4;

    // Métodos
    this.acelerar = function () {
        return "Está acelerando"
    }

    this.agregarLlanta = function () {
        return this.llantas++;
    }
}

const carro = new Transporte("Terreste");

console.log(carro);
console.log(carro.acelerar());

// Cambiar el comportamiento de una función
carro.acelerar = function () {
    return "Recién voy a acelerar (fuera de la función)"
}

console.log(carro.acelerar());

// Agregar comportamientos fuera del constructor
Transporte.prototype.frenar = function () {
    return "Está frenando";
}

console.log(carro.frenar());

// Cambio de parámetros
console.log(carro.llantas);
carro.agregarLlanta();
carro.agregarLlanta();
carro.agregarLlanta();
carro.agregarLlanta();
console.log(carro.llantas);


