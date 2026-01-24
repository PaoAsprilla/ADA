//Ejemplo programa que simula un loro. Repite lo que escucha 5 veces

const prompt = require("prompt-sync")();

//Entrada de datos
//Le pedimos al usuario la frase que queremos que el loro va a escuchar para repetir.

let textoEscuchado = prompt("Escribele al Loro lo que quieres que repita: ");

//Estructura del ciclo FOR (Bucle)

// El FOR es ideal cuando sabemos de antemano cuantas veces queremos repetir algo.
// Tiene tres partes separadas por ";":
//Inicio (Let i = 1): Crea un contador que empieza en 1.
//Condición ( i <= 5): El ciclo se va a repetir mientras el contador alcance 5 o menos.
//Modificador de tipo Incremento (i++): Al final de cada vuelta le sumamos UNO al contador.
console.log(" ----- El Loro empieza a repetir! -----");

for(let i = 1; i <=5; i++ ){
    console.log(i + " - " + textoEscuchado);
}

console.log(" ----- El Loro se cansó de repetir y está tomando agua. -----");