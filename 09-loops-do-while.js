var timesRepeated = 0;
var sentence = "La programación me gusta";
var i = 0;

do {
  if (sentence[i] === "a") {
    timesRepeated += 1;
  }
  i++;
} while (i < sentence.length);

console.log(`La letra "a" se ha repetido ${timesRepeated} veces`);
