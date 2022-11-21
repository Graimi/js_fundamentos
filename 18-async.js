// 1. Ejemplo de promise resuelta
const promise = new Promise((resolve, reject) => {
//Esta parte antes de indicar resolve o reject es lo que se muestra
    console.log('Promesa ejecutándose!'); 
// A partir de lo que se escriba debajo de resolve o reject no vale para nada
    resolve('Resuleta');
})  

console.log('Este codigo se ejecuta antes que la Promise!');


// No se puede leer directamente porque la promesa no se ha resuelto 
console.log(`La promesa está: ${promise}`); 

// Antes hay que realizar un then (en caso de resolve)
// para indicar que se realize la promesa al final
promise.then((value) => {
    console.log('La promesa se ha resuelto con el valor:', value);
})


// 2. Ejemplo de promise reject
const promiseReject = new Promise((resolve, reject) => {
    //Esta parte antes de indicar resolve o reject es lo que se muestra
        console.log('Promesa reject ejecutándose!'); 
    // A partir de lo que se escriba debajo de resolve o reject no vale para nada
        reject('La promesa se ha roto');
    }) 

// Ahora que es reject se usa catch
promiseReject.catch((reject) => { // tb puede verse error en vez de reject
    console.log(reject);
})


// Ejemplo con dinero en el banco
const getAmountInBank = () => {
    const promiseBank = new Promise ((resolve, reject) => {
        resolve(1000);
    });
    return promiseBank;
};

 getAmountInBank()
    .then((amount) => { 
// Lo que incluímos en estos paréntesis hace referencia a
// lo que resuelva resolve, es como un sinónimo de resolve
    console.log (`Esta resuleto con la cantidad en el banco de ${amount}`)
    })
    // Se pueden usar then encadenados, lo que recibe el siguiente then 
    // es lo que ha exportado el último, mostrando todos los que añadamos
    .then((message) => {
        console.log('Esto es el segundo then')
    })
    .catch((error) => {
        console.log(`Error: ${error}`);
    })
