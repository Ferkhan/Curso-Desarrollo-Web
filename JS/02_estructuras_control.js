// ESTRUCTURAS DE CONTROL

// IF
let tiempo = "noche";
let mes = "octubre";

if (tiempo === "mañana" || mes === "octubre") {
    console.log("Es de día en el mes de octubre");
} else if (tiempo === "tarde") {
    console.log("Es de tarde");    
} else {
    console.log("Es de noche");
}
// && es un "y" lógico, || es un "o" lógico


// SWITCH
let sistemaOperativo = "Linux"

switch (sistemaOperativo) {
    case "macOS":
        console.log("Tengo un macOS"); 
        break;  
    case "Windows":
        console.log("Tengo un Windows");        
        break;
    case "Linux":
        console.log("Tengo un linux");
        break;
    default:
        console.log("No tengo un pc");        
        break;
}


let number = 20;
// WHILE
while (number === 20) {
    // hacer lo que sea
    number === 145;
}



// DO-WHILE
let input = 10;

do {
    // hacer lo que sea
} while (input < 30)


// FOR
for (var i = 0; i < 10; i++) {
    // hacer lo que sea
}

