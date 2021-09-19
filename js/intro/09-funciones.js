// Declaración y ejecución
function nombreDeLaFuncion(parametros){
    //Lógica de la función
    return result;
}

nombreDeLaFuncion(); // Ejecutar la función
nombreDeLaFuncion; // Referenciar la función (señalar)

// Parámetros y argumentos. Es lo mismo, sin embargo,
// hablamos de parámetros cuando se declara la función y
// hablamos de argumentos se está ejecutando la función


// Hoisting, permite acceder a una fucnión o variable antes de que sea declarada
// Podemos llamar a la función antes de ser declarada


// Tipos de funciones
    
    // Anonymous function
    const anon = function (parametros) {
        return 'Soy anónima';
    }

    anon();

    // Function expression
    const nonAnon = function nombreDelaFunción (parametros) {
        return 'Soy nonAnon';
    };

    nonAnon();
    
    // ò
    function nonAnon2 (parametros) {
        const result = parametros;
        return result;
    } 

    nonAnon2();

    // Arrow function ES6
    const por2 = parametro => parametro * 2;
    
    // ò
    const por3 = numero => {
        return numero * 3;
    }

    // IIFE - Inmediately Invoked Function Expression
    (function (){
        console.log('Hola Mundo')
    })(); // Los segundos paréntesis son de nada más se crea, nada más se invoca


// Métodos
console.log(); // Método log asociado a console

var varString = 'hola';
varString.length;
varString.replace('h','');