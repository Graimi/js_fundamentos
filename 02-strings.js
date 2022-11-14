var name = 'Cristian';
var surname = 'Castillo';

var fullName = name + ' ' + surname;

console.log(fullName);

var firstIngredient = 'leche';
var secondIngredient = 'arroz';
var thirdIngredient = 'limon';
var fourthIngredient = 'canela';

// Lista de ingredientes: leche, arroz, limon y canela

// Versión simple
var recipe =
  'Lista de ingredientes: ' +
  firstIngredient +
  ' ' +
  secondIngredient +
  ' ' +
  thirdIngredient +
  ' ' +
  fourthIngredient +
  '.';

console.log(recipe);

//Versión interpolada
var recipeInterpolated =
`Lista de ingredientes:
- ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}, ${fourthIngredient}
`;

console.log(recipeInterpolated);
/*
Lista de ingredientes:
- leche, arroz, limon, canela
*/

var car = 'Fiat';
var myCar = `My car is a ${car}`;
console.log(myCar);
//My car is a Fiat

console.log('-------------')
var car = 'Fiat';
var myCar = `My car is a ${car}`;

// car.toUpperCase() - Para poner en MAYUS
var myCar = `My car is a ${car}`;
console.log(myCar.toLocaleUpperCase());

// car.toLowerCase() - Para poner en minus
var myCar = `My car is a ${car}`;
console.log(myCar.toLowerCase());

// car.trim() - Para quitar espacios delanteros y traseros
var myCarTrim = `       My car is a ${car}             `;
console.log(myCarTrim.trim());

// car.slice(<posición>) - Para elegir desde que posición queremos partir 
var myCar = `My car is a ${car}`;
console.log(myCar.slice(7,16));