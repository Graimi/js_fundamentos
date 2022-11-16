var age = 30
var canParticipate = false

if (age < 30) {
    canParticipate = true
}

console.log(`Puede participar el usuario? ${canParticipate}`)

var yearsToRenew = 0;
var driverAge = 19;

// 18 o más, y 50 o menos => 10
// más de 50 y menos o igual a 75 => 5
// más de 75 años => 1

if (driverAge >= 18 && driverAge <= 50) {
    yearsToRenew = 10;
}

if (driverAge > 50 && driverAge <= 75) {
    yearsToRenew = 5;
}

if (driverAge > 75) {
    yearsToRenew = 1;
}


if (driverAge >= 18 && driverAge <= 50) {
    yearsToRenew = 10;
} else if (driverAge > 50 && driverAge <= 75) {
    yearsToRenew = 5;
} else if (driverAge > 75) {
    yearsToRenew = 1;
} else {
    console.log('No tienes edad para tener carnet de conducir');
}

//

console.log(`Se tiene que renovar el carnet cada ${yearsToRenew} años`)

var myName = 'Cristian'

if (myName === 'Cristian') {
    console.log('Eres el profe!');
} else {
    console.log('Eres un alumno');
}

// Es super importante ordenar bien los if para evitar que se cumpla  
// en última instancia una condición que no sea la acertada

var time = 10000;
var record = '';

if (time < 12000) {
    record = 'Personal Best';
}

if (time < 10000) {
    record = 'Olympic Record';
}

if (time < 8000) {
    record = 'World Record';
}

console.log(`El record es: ${record}`);

// Para eso es importante añadir los else if

var timeOther = 13000;
var recordOther = '';

if (timeOther < 12000) {
    recordOther = 'Personal Best';
} else if (timeOther < 10000) {
    recordOther = 'Olympic Record';
} else if (timeOther < 8000) {
    recordOther = 'World Record';
} else {
    recordOther = 'No record';
}

console.log(`El record es: ${recordOther}`);

var city = 'Madrid';
var hasCar = false;

if ((city === 'Madrid' || city === 'Barcelona') && hasCar === false) {
    console.log(`El usuario tiene que usar el metro de ${city}`)
} else {
    console.log(`El usuario circula con coche en ${city}`)
}