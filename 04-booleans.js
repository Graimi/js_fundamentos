var trueVar = true;
console.log(trueVar);

trueVar = false;
console.log(trueVar);

console.log('¿Los números son iguales? ' + (5 == 5));
console.log('¿El número y el string son iguales? ' + ('5' == 5));

console.log('¿Los números son iguales? ' + (5 === 5));
console.log('¿El número y el string son iguales? ' + ('5' === 5));

console.log('Es 3 mayor que 2? ' + (3 > 2));
console.log('Es 2 mayor que 3? ' + (2 > 3));
console.log('Es 2 mayor o igual que 2? ' + (2 >= 2));

var isSameName = 'Juan'.toUpperCase === 'juan'.toUpperCase;
console.log('Son el mismo nombre? ' + isSameName);

// Truthy
console.log('Es 2 truthy?' + Boolean(2));
console.log('Es PMBA truthy?' + Boolean('PMBA'));
console.log('Es true truthy?' + Boolean(true));

// Falsy
console.log('Es 0 truthy?' + Boolean(0));