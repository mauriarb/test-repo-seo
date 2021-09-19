// 2. Añade un parámetro a la función para poder pasarle un listado de stopwords
// slugify(texto, ['de','que','los'])
// Ejemplos:
// * ' que significan los sueños' --> '/significan-los-suenos'
// * 'qué hacer después de programar' --> '/hacer-despues-programar'

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

function slugify(str, stopwords) {  
    var slug = str.toLowerCase();
    
    if (stopwords) {
        stopwords.forEach(stopword => {
            slug = slug.replaceAll(` ${stopword} `, ' ');
        });
    }
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
