// Sintaxis objeto
const person = {
    name: 'Cristian',
    surname: 'Castillo',
};

// Acceso a datos
const personName = person['name']; // Una forma de acceder
const personName2 = person.name; // Otra forma
console.log(`El nombres es: ${personName}`);

// Añadir datos al objeto
person['age'] = 30;
person.age = 30;
delete person['age'];
delete person.age;

// Reasignar
// Hacer el mismo proceso que añadir datos y se sobreescribe

// Claves dinámicas
function getKey(object, key) {
    return object[key]
}

const dynamicName = getKey(person, 'name');