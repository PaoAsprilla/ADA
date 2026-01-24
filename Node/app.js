const prompt = require("prompt-sync")({ sigint: true });
const name = prompt('Ingresa tu nombre: ');
console.log('Hola, ' + name + '!');
