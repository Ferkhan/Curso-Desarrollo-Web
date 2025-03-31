let casa = {
    color: "blanco",
    cuartos: 5,
    "Sistema Inteligente": false,
    interiores: {
        cochera: true,
        baños: {
            "espejo": true,
            ducha: {
                "version moderna": false,
                "version tradicional": true
            }
        }
    },
    alarmaPrendida: false,
    activarAlarma: function() {
        this.alarmaPrendida = true;

        return "Ya se ha activado la alarma";
    }
}


console.log(casa["Sistema Inteligente"]);
console.log(casa.interiores.baños.ducha);

console.log(casa.alarmaPrendida);

// activar alarma
console.log(casa.activarAlarma());


console.log(casa.alarmaPrendida);

// COMBINACIÓN DE DOT NOTATION CON BRACKET NOTATION
console.log(casa.interiores.baños.ducha["version moderna"]);


// RECORRIDO DE OBJETOS

let computadora = { 
    sistemaOperativo: "Linux",
    color: "Verde",
    tieneTeclado: true
}

// for - in
for (let propiedad in computadora) {
    // console.log(propiead);   
    //console.log(computadora[propiedad]);
    console.log(`La propiedad es: ${propiedad} y su valor es: ${computadora[propiedad]}`);
}


// MANIPULACIÓN DE PROPIEDADES
let empresa = {
    nombre: "Empresa ECU",
    empleados: 230
}

// Adición de propiedades
empresa.capitalInicial = 10000;
console.log(empresa);

// Borrado de propiedaes
// delete empresa.empleados
// console.log(empresa);

// Modificación de propiedades
empresa.colaboradores = empresa.empleados;
delete empresa.empleados;
console.log(empresa);



