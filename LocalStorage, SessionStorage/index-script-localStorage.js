class Car {
    constructor(name) {
        this.name = name;
    }
}

var cars = [
    new Car("bmw"),
    new Car("pontiac"),
    new Car("opel")
];

function setCarsToLocalStorage(cars) {
    localStorage.setItem('carsArray', JSON.stringify(cars));
}

function getCarsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('carsArray'));
}


setCarsToLocalStorage(cars);

function createCar(name) {
    executeActionWithCarsArray(storageCars => {
        storageCars.push({ name: name });
    });
}

function removeCar(name) {
    executeActionWithCarsArray(storageCars => {
        let index = storageCars.findIndex(car => car.name === name);

        if (index !== -1) {
            storageCars.splice(index, 1);
        }
    })
}

function updateCar(name, newName) {
    executeActionWithCarsArray(storageCars => {
        let index = storageCars.findIndex(car => car.name === name);

        storageCars[index].name = newName;
    })
}

function executeActionWithCarsArray(callback) {
    let cars = getCarsFromLocalStorage();

    callback(cars);

    setCarsToLocalStorage(cars);

    console.log(cars);
}

function displayCars() {
    console.log(getCarsFromLocalStorage());
}