// create buying car Object  of unique data========>
var BuyingCar = function (data) {
   // this.flyweight = FlyWeightCollection.get(data.carPrice, data.carTax, data.carDiscount)
    this.carName = data.carName;
    this.carPrice = data.carPrice;
    this.carTax = data.carTax;
    this.carDiscount = data.carDiscount;
}

// create buying car Object  of  non unique data =========>
var Flyweight = function (carPrice, carTax, carDiscount) {
    this.carPrice = carPrice;
    this.carTax = carTax;
    this.carDiscount = carDiscount;

}


// create object for buying car CRUD =========>
function BayingCarCollection() {

    var baycar = {};
    var count = 0;
    var saveOperation = function (data) {
        baycar[data.carName] = new BuyingCar(data);
        count++;

    }
    var getcatbyName = function (carName) {
        return baycar[carName];
    }
    var getOperationsCount = function () {
        return count;
    }
    return {
        saveOperation: saveOperation,
        getcatbyName: getcatbyName,
        getOperationsCount: getOperationsCount
    }

}

// create flyweight factory =========>
var FlyWeightCollection = function () {
    var flyweight = {};
    // get carObject 
    var get = function (carPrice, carTax, carDiscount) {
        if (!flyweight[carPrice + carTax + carDiscount]) {
            flyweight[carPrice + carTax + carDiscount] = new Flyweight(carPrice, carTax, carDiscount)
        }
        return flyweight[carPrice + carTax + carDiscount];


    }

    var getCount = function () {
        var count = 0;
        for (var f in flyweight) count++
        return count;
    }
    return {
        get: get,
        getCount: getCount
    }
}()


// Mock data =============>
var carPriceList = [200000, 541000000, 1255400, 5222000, 12365000000];
var carTaxList = [14, 12, 10];
var carDiscountList = [5, 10];
var _BayingCarCollection = new BayingCarCollection();
// insert balck of data ============>


var initMemory = process.memoryUsage().heapUsed;

for (var i = 0; i < 1000000; i++) {
    _BayingCarCollection.saveOperation({
        carName: 'Car ' + i,
        carPrice: carPriceList[Math.floor(Math.random() * 5)],
        carTax: carTaxList[Math.floor(Math.random() * 3)],
        carDiscount: carDiscountList[Math.floor(Math.random() * 2)]
    })
}

var FinishMemory = process.memoryUsage().heapUsed;
console.log('SOperation Used memory: ' + (FinishMemory - initMemory) / 1000000);
console.log('Saving car Count: ' + _BayingCarCollection.getOperationsCount());
//console.log('FlyWeight Saving car Count: ' + FlyWeightCollection.getCount());
