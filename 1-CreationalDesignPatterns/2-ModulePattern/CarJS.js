
// create object
function carObject(data) {
    this.model = data.model;
    this.year = data.year;
    this.miles = data.miles;

}

carObject.prototype.getcarsByModel = function () {
    var _CarCRUD = CarCRUD();
    console.log(_CarCRUD.getCarsByModel(this.model));
}
carObject.prototype.SaveCar = function () {

    var _CarCRUD = CarCRUD();
    console.log(_CarCRUD.saveCar(this));
}


var CarCRUD = () => {
    getprivateFun = () => {
        return 'weclome private '
    }
    getCarsByModel = (model) => {
        return 'We get All cars with model ' + model + ' from database';
    }
    saveCar = (car) => {
        return car.model + ' car saved in database created at ' + car.year
    }

    return {
        getCarsByModel: getCarsByModel,
        saveCar:saveCar
    }

}



var civic = new carObject({ model: "Honda Civic", year: 2009, miles: 20000 });
civic.getcarsByModel();
civic.SaveCar();


