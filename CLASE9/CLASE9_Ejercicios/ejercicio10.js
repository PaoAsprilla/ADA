//Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la semana correspondiente. 
// Si el número no está dentro de ese rango, muestra un mensaje de error.

const prompt = require("prompt-sync")();

//Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la semana correspondiente. 

let numeroUsuario = parseFloat(prompt("Ingresa un número del 1 al 7: "));

//Mostrar día de la semana correspondiente

if (numeroUsuario === 1) {
    console.log("Es Lunes!");
} else if (numeroUsuario === 2) {
    console.log("Es Martes!");
} else if (numeroUsuario === 3) {
    console.log("Es Miércoles!");
} else if (numeroUsuario === 4) {
    console.log("Es Jueves!");
} else if (numeroUsuario === 5) {
    console.log("Es Viernes!");
} else if (numeroUsuario === 6) {
    console.log("Es Sábado!");
} else if (numeroUsuario === 7) {
    console.log("Es Domingo!");
} else {
    console.log("Número inválido. Debe ser del 1 al 7.");
}
