
// create object
function carObject(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;

}

carObject.prototype.getCarData = function(){
    return this.model + ' has done at ' + this.year + ' with ' + this.miles + ' miles'
}
carObject.prototype.buyingCar = function(){
    // validate 
        //
        //
        // saving database
        return 'You are buy car ' + this.model
}

module.exports = carObject;