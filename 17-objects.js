const persona = {
  name: 'Cristian',
};
const vehicles = [
  {
    model: 'Seat Ibiza',
    capacity: 5,
    favorite: false,
  },
  {
    model: 'Mercedes Vito',
    capacity: 8,
    favorite: false,
  },
  {
    model: 'Kawasaki Ninja',
    capacity: 2,
    favorite: true,
  },
];

const getMaxCapacityFromVehicles = (vehicles) => {
let maxCapacity = 0;

for (let i = 0; i < vehicles.length; i++) {
  const vehicle = vehicles[i];

  if (vehicle.capacity > maxCapacity) {
    maxCapacity = vehicle.capacity;
  }
} 
return maxCapacity
}

const getFavoriteVehicle = (vehicles) => {
for (let x = 0; x < vehicles.length; x++) {
    const vehicleFav = vehicles[x]

    if (vehicleFav.favorite === true) {
        return vehicles
    }
}
}

const maxCapacity = getMaxCapacityFromVehicles (vehicles)
console.log(`El vehículo con mayor capacidad tiene ${maxCapacity} asientos`);

const favouriteVehicle = getFavoriteVehicle(vehicles);
persona['vehicle'] = favouriteVehicle;
console.log('La persona tiene estos valores:', persona)