// create object
function carObject(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

// add property
carObject.prototype.getCarData = function () {
    console.log(this.model + ' has done at ' + this.year + ' with ' + this.miles + ' miles')
}
carObject.prototype.buyingCar = function () {
    console.log('You are buy car ' + this.model)
}

// take instance 
var civic = new carObject("Honda Civic", 2009, 20000);
var car128 = new carObject("Fiaat 128", 1980, 10000000000000);


//
car128.stockCarYearLimit = 1990;
car128.semdMailToManger = function () {
    if (car128.stockCarYearLimit > this.year)
        console.log('sending mail to manager');
}
car128.buyingCar = function () {
    this.semdMailToManger();
    carObject.prototype.buyingCar.call(this);
}
// call function
civic.getCarData();
civic.buyingCar();
car128.getCarData();
car128.buyingCar();



// Inheretance...... =>

//Inherete Object .. =>
var BicycleObiect = function (model, year, miles, wheelNumber) {
    carObject.call(this, model, year, miles);
    this.wheelNumber = wheelNumber;
}

//Inherete prototypes ..=>
BicycleObiect.prototype = Object.create(carObject.prototype);

// extend getCarData function 
BicycleObiect.prototype.getCarData = function () {
    carObject.prototype.getCarData.call(this);
    console.log('With Wheels: ' + this.wheelNumber);
}

// take instance from BicycleObiect =>
var Honda = new BicycleObiect("Honda Bicycle", 2010, 20000, 2);
// calling function =>
Honda.getCarData();




