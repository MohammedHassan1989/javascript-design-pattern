
// create object
class carObject {

    constructor(model, year, miles) {
        this.model = model;
        this.year = year;
        this.miles = miles;
    }

    getCarData() {
        return this.model + ' has done at ' + this.year + ' with ' + this.miles + ' miles'
    }
    buyingCar() {
        // validate 
        //
        //
        // saving database
        return 'You are buy car ' + this.model
    }
}





var civic = new carObject("Honda Civic", 2009, 20000);
var car128 = new carObject("Fiaat 128", 1980, 10000000000000);

console.log(civic.getCarData());
console.log(car128.getCarData());
console.log(car128.buyingCar());

