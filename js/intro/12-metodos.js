// String
const ejemplo = 'Esto es un texto';

const minus = ejemplo.toLowerCase() // Minusculas
const mayus = ejemplo.toUpperCase() // Mayusculas

const arr = ejemplo.split(' ') // divide el texto en elementos en función del separador definido

const rpl = ejemplo.replace('texto', 'ejemplo')


// Arrays

const inc = arr.includes('ejemplo'); // Que elemento quiero buscar --> false

const largo = arr.length; // 4

const duplicated = arr.slice(3) // Modifica una parte del array en uno nuevo

arr.splice(0, 2) // Elimina elementos del array y permite sustituir, modificando el array original

arr.push('de') // Añade un elemento al final

const last = arr.pop() // Elimina el último elememento y lo devuelve

arr.unshift('Esto'); // Añade un elemento al principio

// Extras útiles para scrapear

Array.from(); // Permite convertir en array un objeto iterable que parece un array

Array.isArray(); // Nos permite comprobar si una variable es array --> true o false