// 1. Crea unan función llamada slugify que tranforme un string (input) en una URL amigable para SEO (output).
// slugify(texto)
// Caracteres que se pueden tener en cuenta: àáäâèéëêìíïîòóöôùúüûñç·/_,:;
// Ejemplos:
// * ' que significan los sueños' --> '/que-significan-los-suenos'
// * 'qué hacer después de programar' --> '/que-hacer-despues-de-programar'


// Mi solución. Deberíamos cambiar el array por un objeto y gestionar los espacios de otra forma

//var texto = ' texto de prueba prueba àáäâ èéëê ìíïî òóöô ùúüû ñ ç · / _ , : ; àáäâèéëêìíïîòóöôùúüûñç ·/_,:;';
const regexArr = [
    ['a',/(à|á|ä|â)/g],
    ['e',/(è|é|ë|ê)/g],
    ['i',/(ì|í|ï|î)/g],
    ['o',/(ò|ó|ö|ô)/g],
    ['u',/(ù|ú|ü|û)/g],
    ['n',/ñ/g],
    ['c',/ç/g],
    [' ',/(\·|\/|\_|\,|\:|\;)/g]
];

function slugify(str) {
    var slug = str.toLowerCase();

    // Eliminamos caracteres extraños
    regexArr.forEach(item => {
        let replaceLetter = item[0];
        let regex = item[1];
        slug = slug.replaceAll(regex,replaceLetter);
    });

    // Eliminamos espacios
    let textoArr = slug.split(' ');
    let pos = textoArr.indexOf('');
    while (pos >=0) {
        textoArr.splice(pos, 1);
        pos = textoArr.indexOf('', pos++);
    };
    slug = '/' + textoArr.join('-')
    return slug;
};

// solución Nacho, sustituye letra por letra e utiliza desestructuración
// Tip sobre uso de objetos: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

const mapping = {
    '-': [' ','·','/','_',',',':',';'],
    'a': ['à','á','ä','â'],
    'e': ['è','é','ë','ê'],
    'i': ['ì','í','ï','î'],
    'o': ['ò','ó','ö','ô'],
    'u': ['ù','ú','ü','û'],
    'n': ['ñ'],
    'c': ['ç']
};

function slugify2(str) {
    const letters = str.toLowerCase().split('');
    
    const goodLetters = letters.map(letter => { 
        for ( const [ key, value ] of Object.entries(mapping)) { // Aquí utiliza destructuración
            if (value.includes(letter)) {
                return key;
            }
        }
        return letter;
    });

    return goodLetters
        .join('')
        .replace(/-{2,}/g, '-')
        .replace(/^-|-$/g, '')
        .trim() //elimina el primer y último espacio
}