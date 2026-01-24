// Sistema de Gestión de Biblioteca
//Desarrollar un sistema de gestión para una biblioteca que permita administrar libros y usuarios, aplicando los conceptos fundamentales. 

/* Empezaré con el punto 9. Interfáz de Usuario por Consola.
Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita interactuar con el sistema utilizando prompt().
b) El menú debe incluir opciones para todas las funcionalidades anteriores y utilizar estructuras de control (if, switch, ciclos) para manejar la lógica.

*/
const prompt = require("prompt-sync")(); //Solicita al usuario que de inputs

function menuPrincipal() {
  prompt(
    "---- Bienvenidos al Sistema de Gestión de Biblioteca de Paola Asprilla ---\n " + //Aprendí que agregando\n puedo hacer saltos de línea//
    "Seleccione una opción:\n" + "1. Gestionar Libros\n" + 
    "2. Gestionar Usuarios\n" + 
    "3. Gestionar Préstamos\n" + 
    "4. Generar reportess\n" + 
    "5. Identificación Avanzada de Libros\n" + 
    "6. Calcular estadísticas\n" +
    "0. Salir"
  ); 

  //Crear el menú con las opciones solicitadas//
let opcionMenuPrincipal = parseInt(prompt("Ingrese una opción del menú principal:"));

switch (opcionMenuPrincipal) {
  case 1:
    console.log("--- Gestionar libros ---\n" + 
       "1. Ver libros disponibles\n" + 
       "2. Agregar libro\n" + 
       "3. Buscar libro\n" + 
       "4. Borrar libro\n" + 
       "5. Ordenar libros alfabéticamente o por año\n" +
       "0. Volver al menú principal");
    
    //Submenú de Gestión de libros//
      let opcionLibros = parseInt(prompt("Selecciona la acción que deseas realizar en gestión de libros:"));
    switch (opcionLibros) {
      case 1:
        console.log(libros.filter(lib => lib.disponible)); //Muestra los libros disponibles//
        break;
      case 2:
        console.log("Agregar libro");
         id = libros.length + 1; 
         titulo = prompt("Ingrese el título del libro: ");
         autor = prompt("Ingrese el autor del libro: ");
         anio = parseInt(prompt("Ingrese el año de publicación del libro: "));
         genero = prompt("Ingrese el género del libro:");
        agregarLibro(id, titulo, autor, anio, genero);
        break;
        case 3:
          console.log("Buscar libro");
          buscarLibro = prompt("Ingrese el criterio de búsqueda (título, autor, género):");
          break;
        case 4:
          console.log("Borrar libro");
          break;
        case 5:
          console.log("Ordenar libros");
          break;
        case 0:
          console.log("Volviendo al menú principal");
          break;
        default:
          console.log("Opción no válida");
          break;
      }
    break;
  case 2:
    console.log("--- Gestionar usuarios ---\n" + 
      "1. Ver todos los usuarios\n" + 
      "2. Registrar usuario\n" +
       "3. Buscar usuario\n" + 
       "4. Borrar usuario\n" + 
       "0. Volver al menú principal");
    

    //Submenú de Gestión de usuarios//  
    let opcionUsuarios = parseInt(prompt("Selecciona la acción que deseas realizar en gestión de usuarios:"));
    switch (opcionUsuarios) {
      case 1:
        mostrarTodosLosUsuarios();
        break;
      case 2:
        console.log("Registrar usuario"); 
        id = usuarios.length + 1;
        nombre = prompt("Ingrese el nombre del usuario:");
        email = prompt("Ingrese el email del usuario:");
        registrarUsuario(id, nombre, email);
        break;
      case 3:
        console.log("Buscar usuario");
        email = prompt("Ingrese el email del usuario a buscar:");
        buscarUsuario(email);
        break;
      case 4:
        console.log("Borrar usuario");
        nombre = prompt("Ingrese el nombre del usuario a borrar:");
        email = prompt("Ingrese el email del usuario a borrar:");
        borrarUsuario(nombre, email);
        break;
      case 0:
        console.log("Volviendo al menú principal");
        break;
      default:
        console.log("Opción no válida");
        break;
    } 
    break;
  case 3:
    console.log("--- Gestionar préstamos ---\n" + 
      "1. Prestar libro\n" + 
      "2. Devolver libro\n" + 
      "0. Volver al menú principal");
    
    //Submenú de Gestión de préstamos//
    let opcionPrestamos = parseInt(prompt("Selecciona la acción que deseas realizar en gestión de préstamos:"));
    switch (opcionPrestamos) {
      case 1:
        console.log("Prestar libro");
        idLibro = parseInt(prompt("Ingrese el ID del libro a prestar:"));
        idUsuario = parseInt(prompt("Ingrese el ID del usuario que presta el libro:"));
        prestarLibro(idLibro, idUsuario);
        break;
      case 2:
        console.log("Devolver libro");
        idLibro = parseInt(prompt("Ingrese el ID del libro a devolver:"));
        idUsuario = parseInt(prompt("Ingrese el ID del usuario que devuelve el libro:"));
        devolverLibro(idLibro, idUsuario);
        break;
      case 0:
        console.log("Volviendo al menú principal");
        break;
      default:
        console.log("Opción no válida");
        break;
    } 
    break;
  case 4:
    console.log("--- Generar reportes ---\n" + 
      "1. Libros más prestados\n" + 
      "2. Usuarios con más préstamos\n" + 
      "0. Volver al menú principal");
    
    //Submenú de Generar reportes//
    let opcionReportes = parseInt(prompt("Selecciona la acción que deseas realizar en generación de reportes:")); 
    switch (opcionReportes) {
      case 1:
        console.log("Libros más prestados");
        break;
      case 2:
        console.log("Usuarios con más préstamos");
        break;
      case 0:
        console.log("Volviendo al menú principal");
        break;
      default:
        console.log("Opción no válida");
        break;
    }
    break;
  case 5:
    console.log("--- Identificación Avanzada de Libros ---\n" + 
      "1. Buscar por múltiples criterios\n" + 
      "2. Filtrar por disponibilidad y género\n" + 
      "0. Volver al menú principal");
    
    //Submenú de Identificación Avanzada de Libros//
    let opcionIdentificacion = parseInt(prompt("Selecciona la acción que deseas realizar en identificación avanzada de libros:"));
    switch (opcionIdentificacion) {
      case 1:
        console.log("Buscar por múltiples criterios");
        break;
      case 2:
        console.log("Filtrar por disponibilidad y género"); 
        break;
      case 0:
        console.log("Volviendo al menú principal");
        break;
      default:
        console.log("Opción no válida");
        break;
    }
    break;
  case 6:
    console.log("--- Calcular estadísticas ---\n" + 
      "1. Promedio de libros prestados por usuario\n" + 
      "2. Porcentaje de libros disponibles\n" + 
      "0. Volver al menú principal");
    
    //Submenú de Calcular estadísticas//
    let opcionEstadisticas = parseInt(prompt("Selecciona la acción que deseas realizar en cálculo de estadísticas:"));  
    switch (opcionEstadisticas) {
      case 1:
        console.log("Promedio de libros prestados por usuario");
        break;
      case 2:
        console.log("Porcentaje de libros disponibles");
        break;
      case 0:
        console.log("Volviendo al menú principal");
        break;
      default:
        console.log("Opción no válida");
        break;
    }
    break;
  case 0:
    console.log("Saliendo del sistema. ¡Hasta luego!");
    break;
  default:
    console.log("Opción no válida. Por favor, seleccione una opción del menú.");
    break;
}
menuPrincipal();
}


//1. Estructura de Datos
//a. Crear un array de objetos llamado libros que contenga al menos 10 libros. Cada libro debe tener las siguientes propiedades:
//✔ id (número)
//✔ título (string),
//✔ autor (string),
//✔ año (número),
//✔ género (string),
//✔ disponible (booleanio).



let libros = [
  // Esto crea el array de Libros
  // ANGELA DAVIS (INGLÉS)
  {
    id: 1,
    titulo: "Women, Race & Class",
    autor: "Angela Davis",
    anio: 1981,
    genero: "Essay",
    disponible: true
  },
  {
    id: 2,
    titulo: "Are Prisons Obsolete?",
    autor: "Angela Davis",
    anio: 2003,
    genero: "Essay",
    disponible: true
  },
  {
    id: 3,
    titulo: "Freedom Is a Constant Struggle",
    autor: "Angela Davis",
    anio: 2016,
    genero: "Essay",
    disponible: false
  },

  // MAYA ANGELOU (INGLÉS)
  {
    id: 4,
    titulo: "I Know Why the Caged Bird Sings",
    autor: "Maya Angelou",
    anio: 1969,
    genero: "Autobiography",
    disponible: true
  },
  {
    id: 5,
    titulo: "Letter to My Daughter",
    autor: "Maya Angelou",
    anio: 2008,
    genero: "Essay",
    disponible: true
  },
  {
    id: 6,
    titulo: "And Still I Rise",
    autor: "Maya Angelou",
    anio: 1978,
    genero: "Poetry",
    disponible: false
  },

  // MICHELLE OBAMA (INGLÉS)
  {
    id: 7,
    titulo: "Becoming",
    autor: "Michelle Obama",
    anio: 2018,
    genero: "Autobiography",
    disponible: true
  },
  {
    id: 8,
    titulo: "The Light We Carry",
    autor: "Michelle Obama",
    anio: 2022,
    genero: "Essay",
    disponible: true
  },

  // ESCRITORAS COLOMBIANAS (ESPAÑOL)
  {
    id: 9,
    titulo: "Delirio",
    autor: "Laura Restrepo",
    anio: 2004,
    genero: "Novela",
    disponible: true
  },
  {
    id: 10,
    titulo: "La perra",
    autor: "Pilar Quintana",
    anio: 2017,
    genero: "Novela",
    disponible: false
  },
  {
    id: 11,
    titulo: "Los abismos",
    autor: "Pilar Quintana",
    anio: 2021,
    genero: "Novela",
    disponible: true
  },
  {
    id: 12,
    titulo: "La multitud errante",
    autor: "Laura Restrepo",
    anio: 2001,
    genero: "Novela",
    disponible: true
  },
  {
    id: 13,
    titulo: "Memoria por correspondencia",
    autor: "Emma Reyes",
    anio: 2012,
    genero: "Autobiografía",
    disponible: true
  },

  // ESCRITORAS CHILENAS (ESPAÑOL)
  {
    id: 14,
    titulo: "La casa de los espíritus",
    autor: "Isabel Allende",
    anio: 1982,
    genero: "Novela",
    disponible: true
  },
  {
    id: 15,
    titulo: "Paula",
    autor: "Isabel Allende",
    anio: 1994,
    genero: "Autobiografía",
    disponible: false
  },

  // ESCRITORAS NIGERIANAS (INGLÉS)
  {
    id: 16,
    titulo: "Americanah",
    autor: "Chimamanda Ngozi Adichie",
    anio: 2013,
    genero: "Novel",
    disponible: true
  },
  {
    id: 17,
    titulo: "Half of a Yellow Sun",
    autor: "Chimamanda Ngozi Adichie",
    anio: 2006,
    genero: "Novel",
    disponible: false
  },
  {
    id: 18,
    titulo: "We Should All Be Feminists",
    autor: "Chimamanda Ngozi Adichie",
    anio: 2014,
    genero: "Essay",
    disponible: true
  },
  {
    id: 19,
    titulo: "My Sister, the Serial Killer",
    autor: "Oyinkan Braithwaite",
    anio: 2018,
    genero: "Novel",
    disponible: true
  },
  {
    id: 20,
    titulo: "Dear Ijeawele, or A Feminist Manifesto in Fifteen Suggestions",
    autor: "Chimamanda Ngozi Adichie",
    anio: 2017,
    genero: "Essay",
    disponible: true
  },

  // ESCRITORAS DE GHANA (INGLÉS)
  {
    id: 21,
    titulo: "Homegoing",
    autor: "Yaa Gyasi",
    anio: 2016,
    genero: "Novel",
    disponible: true
  },
  {
    id: 22,
    titulo: "Transcendent Kingdom",
    autor: "Yaa Gyasi",
    anio: 2020,
    genero: "Novel",
    disponible: false
  },

  // ENSAYO / NARRATIVA EN ESPAÑOL
  {
    id: 23,
    titulo: "El infinito en un junco",
    autor: "Irene Vallejo",
    anio: 2019,
    genero: "Ensayo",
    disponible: true
  },
  {
    id: 24,
    titulo: "Las cosas que perdimos en el fuego",
    autor: "Mariana Enríquez",
    anio: 2016,
    genero: "Cuentos",
    disponible: true
  },
  {
    id: 25,
    titulo: "Temporada de huracanes",
    autor: "Fernanda Melchor",
    anio: 2017,
    genero: "Novela",
    disponible: true
  },

 
  {
    id: 26,
    titulo: "Hija del camino",
    autor: "Lucía Mbomío",
    anio: 2019,
    genero: "Ensayo",
    disponible: true
  },
  {
    id: 27,
    titulo: "The Bluest Eye",
    autor: "Toni Morrison",
    anio: 1970,
    genero: "Novel",
    disponible: true
  },
  {
    id: 28,
    titulo: "Beloved",
    autor: "Toni Morrison",
    anio: 1987,
    genero: "Novel",
    disponible: false
  },
  {
    id: 29,
    titulo: "Sula",
    autor: "Toni Morrison",
    anio: 1973,
    genero: "Novel",
    disponible: true
  },
  {
    id: 30,
    titulo: "The Woman King",
    autor: "Akua Ofosuhene",
    anio: 2019,
    genero: "Historical Fiction",
    disponible: true
  }
];

//b) Crear un array de objetos llamado usuarios
//✔ id (número)
//✔ nombre (string)
//✔ email (string)
//✔ librosPrestados (array de ids de libros).

let usuarios = [
  {
    //Esto crea el array de Usuarios.
    id: 100,
    nombre: "Tatiana Perez",
    email: "tatiana.or@gmail.com",
    librosPrestados: [1, 5]
  },
{
    id: 101,
    nombre: "Catalina Rios",
    email: "catrios@gmail.com",
    librosPrestados: [3, 4]
  },
  {
    id: 102,
    nombre: "Alina Oz",
    email: "Oz.al@gmail.com",
    librosPrestados: [ ]
  },
  {
    id: 103,
    nombre: "Andrea Palomeque",
    email: "paloa@gmail.com",
    librosPrestados: [12, 7]
  },
  {
    id: 104,
    nombre: "Lina Osorio",
    email: "Osoli@gmail.com",
    librosPrestados: [7, 9]
  },
];

/* 2. Funciones de Gestión de Libros
a) Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros. 

Para agregar un objeto al array, debo usar .push*/

function agregarLibro (id, titulo, autor, anio, genero) {
  let nuevoLibro = libros.push({
    id: id, 
    titulo: titulo,
    autor: autor,
    anio: anio, 
    genero: genero,
    disponible: true, // Al agregar un libro, siempre estará disponible.
  });
  console.log(nuevoLibro);
} 

/*b) Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, 
autor o género utilizando el algoritmo de búsqueda lineal.*/

function buscarLibro(criterio, valor) {
  let resultados = [];
  for (let i = 0; i < libros.length; i++) {
    if (libros[i][criterio].toLowerCase() === valor.toLowerCase()) {
      resultados.push(libros[i]);
    } 
return resultados;
  }
  console.log(resultados);
}
//c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola.//
//Para esto hay que usar Bubble sort. el bubble sort funciona usando dos for for//
function ordenarLibros(criterio) {
  for (let i = 0; i < libros.length - 1; i++) {
    for (let j = 0; j < libros.length - 1 - i; j++) { 
      if (criterio === "titulo" && 
          libros[j].titulo.toLowerCase() > libros[j + 1].titulo.toLowerCase()) {
        let aux = libros[j];
        libros[j] = libros[j + 1];
        libros[j + 1] = aux;
      }
      if (criterio === "anio" && libros[j].anio > libros[j + 1].anio) {
        let aux = libros[j];
        libros[j] = libros[j + 1];
        libros[j + 1] = aux;
      }
    }
  }
  console.log(libros);
}
    

//d) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.//
function borrarLibro(id) {
  for (let i = 0; i < libros.length; i++) {
    if (libros[i].id === id) {
      libros.splice(i, 1);
      return;
    }
  }
}

//3. Funciones de Gestión de Usuarios
//a) Implementar una función registrarUsuario(id, nombre, email) que agregue un nuevo usuario al array usuarios.
//Como con todas las funciones de agregar, uso .push, en el id le sumo 1 para que siga la secuencia.//
function registrarUsuario(id, nombre, email) {
  usuarios.push({
    id: usuarios.length + 1,
    nombre: nombre,
    email: email,
    librosPrestados: []
  });
}
//b) Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios.//
function mostrarTodosLosUsuarios() {
  console.log(usuarios);
}

//c) Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.//
function buscarUsuario(email) {
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].email === email) {
      return usuarios[i];
    }
  }
  return null;
  console.log("Usuario no encontrado");
}
   // Si no se encuentra el usuario, devolvemos Usuario no encontrado con el comando null.


//d) Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.//
function borrarUsuario(nombre, email) {
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].nombre === nombre && usuarios[i].email === email) {
      usuarios.splice(i, 1);
      return;
      console.log("El usuario ha sido eliminado."); 
    }
  }
}

//4. Sistema de Préstamos
//a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y lo agregue a la lista de libros prestados del usuario.//

function prestarLibro(idLibro, idUsuario) {
  let libro = libros.find(pres => pres.id === idLibro);
  let usuario = usuarios.find(user => user.id === idUsuario);
  if (libro && usuario && libro.disponible) {
    libro.disponible = false;
    usuario.librosPrestados.push(idLibro);
  }
}

//b) Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la lista de libros prestados del usuario.
// Para ello se debe usar la función find que encuentra el libro a través de recorrer el array, es una función de callback


function devolverLibro(idLibro, idUsuario) {
  let libro = libros.find(libr => libr.id === idLibro);
  let usuario = usuarios.find(user => user.id === idUsuario);
  if (libro && usuario) {
    libro.disponible = true;
    usuario.librosPrestados = usuario.librosPrestados.filter(id => id !== idLibro); //Elimina el id 
  }
}


/*5. Reportes
a) Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .fi lter(), .reduce()) para generar un reporte con la siguiente información:
✔ Cantidad total de libros.
✔ Cantidad de libros prestados.
✔ Cantidad de libros por género.
✔ Libro más antiguo y más nuevo */

function generarReporteLibros() {
  let totalLibros = libros.length;
  let librosPrestados = libros.filter(gen => !gen.disponible).length;
  let librosPorGenero = libros.reduce((resultado, libro) => {
    resultado[libro.genero] = (resultado[libro.genero] || 0) + 1;
    return resultado;
  }, {});
  let libroMasAntiguo = libros.reduce((antiguo, libro) => (libro.anio < antiguo.anio ? libro : antiguo), libros[0]);
  let libroMasNuevo = libros.reduce((nuevo, libro) => (libro.anio > nuevo.anio ? libro : nuevo), libros[0]);
  console.log("Cantidad total de libros: " + totalLibros);
  console.log("Cantidad de libros prestados: " + librosPrestados);
  console.log("Cantidad de libros por género: ", librosPorGenero);
  console.log("Libro más antiguo: ", libroMasAntiguo);
  console.log("Libro más nuevo: ", libroMasNuevo);  
}

//6. Identificación Avanzada de libros
//a) Implementar una función librosConPalabrasEnTitulo() que identifique y muestre todos los libros cuyo título contiene más de una palabra (no títulos que contengan números ni otros caracteres).
//b) La función debe devolver un array con los títulos de esos libros y mostrarlo en la consola.//
function librosConPalabrasEnTitulo() {
  let resultados = libros.filter(avan => avan.titulo.split(" ").length > 1 && /^[A-Za-z\s]+$/.test(avan.titulo));
  let titulos = resultados.map(avan => avan.titulo);
  console.log(titulos);
  return titulos;
}

//7. Cálculos Estadísticos
//a) Desarrollar una función calcularEstadisticas() que utilice el objeto Math para calcular y mostrar:
//✔ Promedio de años de publicación de los libros.
//✔ Año de publicación más frecuente.
//✔ Diferencia en años entre el libro más antiguo y el más nuevo.//
function calcularEstadisticas() {
  let totalAnios = libros.reduce((suma, libro) => suma + libro.anio, 0);
  let promedioAnios = totalAnios / libros.length;
  let aniosFrecuentes = {};
  libros.forEach(libro => {
    aniosFrecuentes[libro.anio] = (aniosFrecuentes[libro.anio] || 0) + 1;
  });
  let anioMasFrecuente = Object.keys(aniosFrecuentes).reduce((a, b) => aniosFrecuentes[a] > aniosFrecuentes[b] ? a : b); // Usé este código con ayuda de chatGPT, porque no sabía cómo hacerlo. El object.keys no lo sé usar bien//
  let anioMasAntiguo = Math.min(...libros.map(l => l.anio));
  let anioMasNuevo = Math.max(...libros.map(l => l.anio));  
  let diferenciaAnios = anioMasNuevo - anioMasAntiguo;
  console.log("Promedio de años de publicación: " + promedioAnios.toFixed(2));
  console.log("Año de publicación más frecuente: " + anioMasFrecuente);
  console.log("Diferencia en años entre el libro más antiguo y el más nuevo: " + diferenciaAnios);
}

//8. Manejo de Cadenas
//a) Crear una función normalizarDatos() que utilice métodos de strings para:
//✔ Convertir todos los títulos a mayúsculas.
//✔ Eliminar espacios en blanco al inicio y fi nal de los nombres de autores.
//✔ Formatear los emails de los usuarios a minúsculas.//

function normalizarDatos() {
  libros.forEach(libro => {
    libro.titulo = libro.titulo.toUpperCase();
    libro.autor = libro.autor.trim();
  });
  usuarios.forEach(usuario => {
    usuario.email = usuario.email.toLowerCase();
  });
}

menuPrincipal(); 

