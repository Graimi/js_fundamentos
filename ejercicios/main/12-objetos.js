// 1. Crea la función printCar de forma que acepte un objeto "car"
// como argumento e invoque un console.log con su propiedad "model"

function printCar() {
    const car = {
        model: 'Chevrolet Camaro',
    };
    return car.model
}

console.log(printCar())

// 2. Crea la función printCountry de forma que acepte dos argumentos, primero
// un objeto llamado "country" y después un string "key", e invoque un console.log
// con la propiedad "key" del objeto "country"

const country = {
    name: 'Spain'
}
console.log(country['name'])

const printCountry = (country, key) => {
    console.log(country[key]);
}
console.log(printCountry)

function printCountryV2 (country, key) {
    return  country[key];
}
console.log(printCountryV2(country,['name']))


// 3. Crea la función "deleteProperties" de forma que acepte dos argumentos, primero
// un objeto llamado "person" y después un string "property". Dentro de la función,
// elimina dicha propiedad del objeto "person" e invoca un console.log del objeto

const person = {
    name: 'Jaime',
    surname: 'Flores'
}

const deleteProperties = (person, name) => {
    delete person.name;
}

console.log(person)
/*
// ///////////////////////////////////////////////////////////////
// ⬇️ NO TOCAR ESTA PARTE O ROMPERÁS LOS TESTS ⬇️
export default {
    printCar,
    printCountry,
    deleteProperties,
  };
  // ///////////////////////////////////////////////////////////////
  */