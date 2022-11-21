// Compuesta
// Se separan con comas

function sum(num1, num2) {
    return num1 + num2;
}

var totalSum = sum(4,6);

console.log(totalSum)

// Función anónima
// Se declara como una variable

var hey = function () {
    return 'hello!'
}

console.log(hey())

// Arrow function (Función flecha)

// Clásica
var substract = (num1, num2) => {
    return num1 - num2;
}

// Rutern implícito
var substract = (num1, num2) => num1 - num2

var totalSubstract = substract(4,6);

console.log(totalSubstract)
