var marks = [10, 4, 6, 9, 4, 6, 7]

console.log(`El array marks tiene longitud: ${marks.length}`)

const lenght = marks.length; // 7

// Acceder al último elemento de un array
const lastMark = marks[marks.length-1];
console.log(`La última nota es: ${lastMark}`);

// Cambiar un elemento de un array
marks[0] = 4;
console.log(`La nota del primer alumno es ${marks[0]}`);

// Añadir elementos al array
marks.unshift(3); // Al principio [3, 4, 4, 6, 9, 4, 6, 7]
marks.push(8); // Al final [3, 4, 4, 6, 9, 4, 6, 8]

// Eliminar elementos del array
marks.shift(); // Al principio [4, 4, 6, 9, 4, 6, 7, 8]
marks.pop(); // Al final [4, 4, 6, 9, 4, 6, 7]

// Seleccionar un elemento del array
const fruits = ['kiwi', 'manzana', 'melon'];
const firstFruit = fruits.slice(0, 1);
console.log(`El array con la primera fruta es:`, firstFruit);


// Copiar un array entero
// Usar este método para no modificar el original
// Se trabaja sonbre una nueva variable
const copyFruits = fruits.slice();
console.log('copy fruits array:', copyFruits);

// Hacer referencia a un array
// Se está apuntando al original
// Con esta versión si se hacen cambios se cambia el original
const reassignedFruits = fruits;
