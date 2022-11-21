var name = 'Cristian';
console.log('1. name:', name);

function changeName(newName) {
  name = newName;
}

console.log('2. name:', name);

changeName('Alberto');
console.log('3. name:', name);

function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function doOperation(operation, a, b) {
  var sum = (num1, num2) => num1 + num2;
  if (operation === 'sum') {
    return sum(a, b);
  } else if (operation === 'substract') {
    return substract(a, b);
  } else {
    return 'No operation';
  }
}

const result = doOperation('sum', 3, 4);
console.log(result());
