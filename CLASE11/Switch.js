const prompt = require ("prompt-sync")();
//Entrada de Datos
//Pedimos el número. Usamos parseInt porque el switch compara los valores exactos

let numerosemana = parseInt(prompt("Ingrese número del 1 al 7: "));
// Estructura Switch
// El switch evalúa la variable que se pone en paréntesis (numerosemana)
//Luego, busca abajo el "caso" que coincida con ese valor

switch (numerosemana) {
    //si numerosemana es igual a 1..
    case 1: 
    console.log("Es Domingo. Un día más de descanso");
    break; // STOP. Importante agregarlo
    case 2:
        console.log("Es lunes. Se acabó el descanso");
        break;
//Usar default para dar un mensaje por fuera de los parámetros que se establecieron, 1 al 7

default:
    console.log("Error, el número que ingresaste no cabe en el rango, Números permitidos del 1 al 7");
    
}