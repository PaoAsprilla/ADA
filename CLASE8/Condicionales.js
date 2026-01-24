// Crea un programa que simule un sistema de calificacion basado en la nota de un estudiante
//(un valor numérico del 0 al 100) el programa debe determinar si el estudiantes está reprobado,
//aprobado o ha tenido una calificacion excelente, según las siguientes condiciones:

//Si la nota es menor a 60, el estudiante ha reprobado
//Si la nota está entre 60n y 89 (incluisve), el estudiante ha aprobado
//Si la nota es mayor a 90, el estudiante ha obtenido una calificación excelente

//Usar el condicional if, if else, if else else para mostrar el mensaje correspondiente

let nota = 90

if (nota < 60){
    console.log("Reprobado");

}else if (nota >= 60 && nota <= 89){
    console.log("Aprobado");
}else {

 console.log("Excelente, aprobaste con honores");
}
