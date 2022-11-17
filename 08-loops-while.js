var count = 0;

while(count <= 10) {
    console.log(`La cuenta va por ${count}`);
    count += 1;
}

var timesRepeated = 0;
var sentence = 'La programación me gusta'
var i = 0

while (i < sentence.length) {
    if (sentence[i] === 'a') {
        timesRepeated += 1;
     }
     i++;
}

console.log(`La letra "a" se ha repetido ${timesRepeated} veces`)