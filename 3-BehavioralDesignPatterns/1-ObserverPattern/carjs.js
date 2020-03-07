


// create object salesOperation
var SalesOperation = function () {

}
SalesOperation.prototype.doAction = function () {
    console.log('Sales operation must do so and so ');
}


// create object Manager Operation
var ManagerOperation = function () {

}
ManagerOperation.prototype.doAction = function () {
    console.log('Manager operation must do so and so ');
}



// create subscription opject ====>
var Subject = function () {
    this.observers = []; // array of function 
}
Subject.prototype.subscribe = function (fn) {
    this.observers.push(fn);
}
Subject.prototype.unsubscribe = function (fn) {
    this.observers = this.observers.filter(f => {
        if (f != fn)
            return f;
    });
}
Subject.prototype.fire= function(){
    this.observers.forEach(fn => {
        fn.call();
    });
}

// create car object =======>
var BuyingCar = function (data) {
    Subject.call(this);
    this.carName = data.carName;
}
BuyingCar.prototype = Object.create(Subject.prototype);


BuyingCar.prototype.save = function () {
    var salesOp = new SalesOperation();
    var manageOp = new ManagerOperation();
    this.subscribe(salesOp.doAction);
    this.subscribe(manageOp.doAction);
    console.log('You are buing a car: ' + this.carName);
    this.fire();
}










 var _buyingcar = new BuyingCar({carName:'Fiaat'});
 _buyingcar.save();


