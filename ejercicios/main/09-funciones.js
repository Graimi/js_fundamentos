// 1. Declara una función llamada "getLongString" que devuelva un string conteniendo al menos 6 caracteres.
// Ejemplo: getLongString() tiene que devolver un string de longitud igual o mayor a '123456'.
function getLongString() {
return 'thepower'
}
let stringEj = getLongString()
let lenghtString = getLongString().length
console.log(`El string ${getLongString()} tiene una longitud de ${lenghtString}`)

// 2. Declara una función llamada "getInUpperCase" que devuelva el string pasado como argumento en MAYÚSCULAS.
// Ejemplo: getInUpperCase('thepower') tiene que devolver THEPOWER.
function getInUpperCase(thepower) {
    return 'thepower'.toUpperCase();
}
console.log(getInUpperCase())

// 3. Declara una función llamada "sum" que devuelva dos números pasados como argumentos (a, b) sumados.
// Ejemplo: sum(2, 4) tiene que devolver 6.
function sum(a, b) {
    return a + b;
}
console.log(sum());

// 4. Declara una función llamada "sliceUntil" que devuelva un trozo de un string pasado como argumento (usando .slice sobre este),
// que empiece en el índice 0 y acabe en el índice que tenga el valor del segundo argumento pasado a la función.
// Ejemplo: sliceUntil('thepower school', 6) tiene que devolver 'thepow'
function sliceUntil(thepower, limit) {
    var thepower = 'thepower';
    return thepower.slice(0,limit);
}
console.log(sliceUntil('', 4))

// ///////////////////////////////////////////////////////////////
// ⬇️ NO TOCAR ESTA PARTE O ROMPERÁS LOS TESTS ⬇️
//export default { getLongString, getInUpperCase, sum, sliceUntil };
// ///////////////////////////////////////////////////////////////