const carObject = require('./carObject'); // calling 


//using
var civic = new carObject("Honda Civic", 2009, 20000);
var car128 = new carObject("Fiaat 128", 1980, 10000000000000);

console.log(civic.getCarData());
console.log(car128.getCarData());
console.log(car128.buyingCar());