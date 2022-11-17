for(var i = 0; i < 5; i++ /* Es igual que i = i + 1*/ ) {
  console.log(`El valor de i es: ${i}`)
}

// for (VALOR INICIAL; COMPARACIÓN; OPERACIÓN TRAS CASA LOOP) {
//    CONTENIDO / CÓDIGO A EJECUTAR
//}

for (var j = 10; j >= 0; j--) {
  console.log(`El valor de i es: ${j}`)
}

for (var x = 10; x >= 0; x -= 3 /* Es igual que x = x - 3*/) {
  console.log(`El valor de i es: ${x}`)
}

var timesRepeated = 0;
var sentence = 'La programación me gusta'
console.log(sentence.length) //Lenght no cuenta desde 0, si no desde 1
//En este caso ha contado 24 por lo que hay 23 posiciones

for (var y = 0; y < sentence.length; y++) {
  if (sentence[y] === 'a') {
    timesRepeated += 1;
  }
}

console.log(`La letra "a" se ha repetido ${timesRepeated} veces`)