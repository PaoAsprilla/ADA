let products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Mouse', price: 25 },
  { name: 'Teclado', price: 50 },
  { name: 'Monitor', price: 200 },
  { name: 'Audífonos', price: 75 }
];

let productosFiltrados = products.filter(product => product.price >= 50);

let nombresProductos = productosFiltrados.map(product => product.name);

let totalPrecio = productosFiltrados.reduce(
  (total, product) => total + product.price,
  0
);

console.log("Productos seleccionados:");
nombresProductos.forEach(nombre => console.log(nombre));

console.log("Total a pagar:", totalPrecio);
