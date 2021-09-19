// Callbacks
array.forEach(element => {
    // Por cada elemento ejecuta la arrow function
    console.log(element);
});

// Callbacks pasando funciones por referencia
const mostrar = element => {
    console.log(element);
}
array.forEach(mostrar);