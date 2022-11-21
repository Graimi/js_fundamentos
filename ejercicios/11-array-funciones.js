// 1. Crea la función "getNewArray" que reciba un  array de frutas, y
// un string con otra fruta nueva, y luego retorne otro array igual (pero con
// otra referencia) pero habiéndole añadido en la primera posición la fruta nueva.
const originalFruta = ['melon', 'platano', 'naranja']

function getNewFruit(originalFruta, fruit) {
    let newArrayFruta = originalFruta.slice();
    newArrayFruta.unshift(fruit);
return newArrayFruta;
}
console.log(getNewFruit(originalFruta, 'sandia'))

// 2. Crea la función "modifyOriginalArray" que reciba un array de números o strings,
// le elimine la primera y la última posición y lo retorne (misma referencia)
const array = [7, 8, 5, 44, 20]

function getNewArray(array) {
    array.shift();
    array.pop();
return array;
}
console.log(getNewArray(array))

// --EXTRA-- Dado el array "colors", crea la función "getColors" que reciba un número
// como parámetro, cree una copia, y añada el color "black" en la última posición de
// dicha copia si el número es par, o añada el color "white" en la primera posición
// si es impar, y luego retorne dicho array
const colors = ["blue", "red", "gray"];

function getColors(number) {
    let newColors = colors.slice()
    if (number % 2 == 0) {
        newColors.push('black')
    }
    if (number % 2 !== 0) {
        newColors.unshift('white')
    }
    return newColors;
}
console.log(getColors(3))
console.log(getColors(2))
/*
// ///////////////////////////////////////////////////////////////
// ⬇️ NO TOCAR ESTA PARTE O ROMPERÁS LOS TESTS ⬇️
export default { getNewArray, modifyOriginalArray, colors, getColors };
// ///////////////////////////////////////////////////////////////
*/