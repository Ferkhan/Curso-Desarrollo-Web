// ÁMBITOS | ALCANCE


// ALCANCE GLOBAL
var variable1 = "Soy una variable VAR";
let variable2 = "Soy una variable LET";
const variable3 = "Soy una variable CONST";


// 1. FUNCIÓN
function saludar() {

    // ALCANCE LOCAL
    var variable4 = "Soy una variable VAR";
    let variable5 = "Soy una variable LET";
    const variable6 = "Soy una variable CONST";

    function saludarInterno() {
        console.log(variable4);
        console.log(variable5);
        console.log(variable6);
    }

    saludarInterno();
}




// 2. BLOQUE
if (false) {

}

