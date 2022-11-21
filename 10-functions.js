function getPriceByCity(city) {
    var price = 0

    if (city === 'Madrid') {
        price = 10;
    } else if (city === 'Valencia') {
        price = 5;
    } else {
        price = 1;
    }

    return price;
}

var priceByCityMadrid = getPriceByCity('Madrid')
var priceByCityValencia = getPriceByCity('Valencia')
var priceByCityCadiz = getPriceByCity('Cádiz')
console.log(`El precio del metro en Madrid es ${priceByCityMadrid}€, en Valencia ${priceByCityValencia}€ y en Cádiz ${priceByCityCadiz}€`)