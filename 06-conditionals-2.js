var price;
var city = 'Valencia'

switch(city) {
  case 'Valencia':
    price = 10;
    break;
  case 'Madrid':
    price = 15;
    break;
  case 'Barcelona':
    price = 20;
    break;
  default:
    price = 5;
}

console.log(`El precio del metro para ${city} es de ${price} euros`)
// El precio del metro para Valencia es de 10 euros

var removeChar = 'eloquent'

function removeChar(str){
  return `#{removeChar.slice(1,7)}`;
}