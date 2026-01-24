const prompt = require('prompt-sync')();
// Vamos a crear un programa que imprima un contador regresivo
//Desde 5 horas hasta 1 hora. Usando un bucle while a yy otro Dowhile

//WHILE

console.log('Contador regresivo usando while');

let contador = 5;

while(contador >= 1){
    console.log(contador);
    contador --;

}

// DO WHILE 

console.log('Contador regresivo usando Dowhile');

let contador2 = 5;

do{
    console.log(contador2);
    contador2--;
} while (contador2 >=1);

