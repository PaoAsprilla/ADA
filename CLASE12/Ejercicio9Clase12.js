const prompt = require("prompt-sync")();

//Matriz de gastos

let gastos = [
    [1135, 2500, 900, 1600, 2800, 650, 1100], //Semana1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], //Semana 2
    [1700, 1150, 1690, 1900, 1770, 500, 2560], // Semana 3
[800, 1250, 1430, 2100, 1980, 1270, 950], // Semana 4
];

// Total de una semana (Sumar una fila)

console.log(" Consultar gastos por Semana. ");

//INPUT (-1)
/* Le pedimos a la usuaria que ingrese un número del 1 al 4.
Pero como en programación trabajamos desdes cero, le restamos 1
Si ella pone Semana 1, nosotros buscamos en la Fila 0.
*/

let semanaConsultada =  parseInt(prompt("Ingresa el numero de la semana que quieres consultar: " )) -1;

let totalSemana = 0; // El acumulado de la semana.

// Recorrido Horizontal
//Recorremos la fila, de izquierda a derecha usamos la variable j

for(let j = 0; j < 7; j++){
    totalSemana +=gastos[semanaConsultada][j];
}

//Al momento de mostralo, le sumamos 1 de nuevo, para que la usuaria vea Semana 1 en lugar de semana 0.
//console.log(" El total de gastos de la Semana " + (semanaConsultada) +1 "es: $" + totalSemana);
