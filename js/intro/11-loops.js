// Iteración en Arrays
const arr = [1,2,3,4,5,6,7];

    // For y  For of
    for(let index = 0; index < arr.length; index++) {
        console.log(arr[index]);
    }

    for(let item of arr) {
        console.log(item);
    }

    //While: Do While y While
    let x = 0;
    const y = 10;
    do {
        // lógica que se ejecuta primero
        console.log(x);
        x++;
    } while (x < y);

    while (x > y){
        //se ejecuta si se cumple la condición
    }
    
    //Métodos específicos
    arr.forEach(item => console.log(item));
    
    arr.map(item => console.log(item)); // hace lo mismo que con forEach, pero devuelve un array
    arr.map(item => item + 1); // devolverá un array sumando 1 y almacenando
    arr.map((item, index) => item + 1); // pasar más de un parémtro

    arr.filter(item => item > 5);

    arr.reduce((acumulador, actual) => acumulador + actual);

// Iteración en Objetos
const miObj = {
    title: '',
    slug: '/urls-1',
    indexable: true,
    h1: 'h1 de la url 1',
    h2: [
        'lorem',
        'ipsum',
        'dolor'
    ],
    inlinks: 24
}

    // For in
    for (let key in miObj) {
        console.log(miObj[key]); // importante, para recuperar el valor de los items mediante variables utilizar la notación de arrays
    }

    // Object
    const keys = Object.keys(miObj);
    const values = Object.values(miObj);
    const entries = Object.entries(miObj);
