// 1. Dada la función "printPersons" que recibe un array de objetos llamado "persons",
// y un string "property", completa la función para que recorra dicho array con un
// bucle e invoque un console.log con la propiedad "property" de cada objeto

const printPersons = (persons, property) => {
  // Completa el código ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇
  persons = [
    {
      name: 'Fernando',
      surname: 'Gómez',
    },
    {
      name: 'Luis',
      surname: 'García',
    },
    {
      name: 'Juan',
      surname: 'Fernández',
    },
  ];
  for (let i = 0; i < persons.length; i++) {
    console.log(persons[i][property]);
  }
  // Completa el código ⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆
};

console.log(printPersons('', 'surname'));

// 2. Crea la función addProperty para que reciba un objeto, una propiedad y valor nuevos,
// y un boolean. Si el boolean es true, que cree una copia de dicho objeto, añada la
// nueva propiedad + valor y lo retorne. Si el boolean es false, que retorne directamente
// el mismo objeto (misma referencia)

const addProperty = (persons2, property, value, boolean) => {
    persons2 = [
        {
          name: 'Fernando',
          surname: 'Gómez',
        },
        {
          name: 'Luis',
          surname: 'García',
        },
        {
          name: 'Juan',
          surname: 'Fernández',
        },
      ];
      const personlength = persons2.length

    if (personlength === personlength) {        
        const newPersons2 = persons2.slice()
        newPersons2['middleName'] = 'Julian'
        return newPersons2
    } else {
        return persons2;
    }
};

console.log(addProperty())


  // 3. Crea la función getPeopleWeight para que reciba un array con [clave, valor,...]
  // donde "clave" es el nombre de las personas y "valor" su peso en kg, y devuelva
  // un objeto con solo las personas (clave) y su peso (valor) que tengan un peso
  // par y por encima de 60kg.
  // Example of array => peopleArr = ["Juan", 72, "Maria", 58, "Martin", 75, "Sofia", 62];
  peopleArr = ["Juan", 72, "Maria", 58, "Martin", 75, "Sofia", 62]
  
  const getPeopleWeight = (array) => {
    const peopleObj = {};
    for (let i = 0; i < peopleArr.length; i += 2) {
      if (peopleArr[i + 1] % 2 === 0 && peopleArr[i + 1] > 60) {
        const key = peopleArr[i];
        const value = peopleArr[i + 1];
        peopleObj[key] = value;
      }
    }  
    return peopleObj;
  };

  console.log(getPeopleWeight())

  /*
  // ///////////////////////////////////////////////////////////////
  // ⬇️ NO TOCAR ESTA PARTE O ROMPERÁS LOS TESTS ⬇️
  export default {
    printPersons,
    addProperty,
    getPeopleWeight,
  };
  // ///////////////////////////////////////////////////////////////
  */
