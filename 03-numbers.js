var two = 2;
var twotWithDecimals = 2.5;
var negative = -2;

// Suma
var sum = 3 + 2;
console.log(sum); // = 5
console.log(two + negative); // = 0

// Resta
var substract = 10 - 4;
console.log(substract); // 6

// Multiplicación
var multiply = 6 * 4;
console.log(multiply); // = 24

// División
var divide = 25 / 5;
console.log(divide); // = 5

// Resto = Cuanto ha sobrado de una división
// En el caso de 5/3, el resto sería 2 porque serían los números que faltarían para llegar al siguiente entero
// En el caso de 88/5, es igual a 17,6 y nos faltaría un 3 para que fuera 18
var rest = 5 % 3;
console.log(rest); // = 2

// Potencia 
// En este caso es 5 al cuadrado
var power = 5 ** 2;
console.log(power); // = 25

// El orden de los cálculos se realizan de forma normal y seguido
//Primero las * y / y en orden de como van apareciendo
var firstCalcule = 2 * 4 + 5 / 5; 
var secondCalcule = 2 * (4 + 5) / 5; 
console.log(firstCalcule); // = 8 + 1 = 9
console.log(secondCalcule); // = 18 / 5 = 3.6

// Suma de string con número
var numberAsString = '30';
var number = 35;
console.log(numberAsString + number); // = 3035

// Cambiar string a número
// Declarando Number(<var>) a una variable
var numberAsNumber = Number(numberAsString);
console.log(numberAsNumber + number);
// Otra opción es añadir un + delante de la var pero no es recomendable
console.log(+numberAsString + number);
// Más adelante veremos parseInt y parseFloat

// NaN (Not a Number)
// Contenido que se ha intentado transformar a número pero no lo es
var notValidNumber = Number('_')
console.log(notValidNumber); // = NaN
var salary = 1000 * notValidNumber;
console.log(salary); // = NaN