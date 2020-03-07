//  create meditor object as a factory =====>
var mediator = (function () {
    var channels = {};

    //  create channel objects
    var subscribe = function (channel, context, func) {

        if (!mediator.channels[channel]) {
            mediator.channels[channel] = [];
        }
        // create channel object 
        mediator.channels[channel].push({
            context: context,
            func: func
        })

    };


    // fire channel
    var publish = function (channel) {
        // check if channel not exist  return error message
        if (this.channels[channel]) {
            return false;
        }


        var args = Array.prototype.slice.call(arguments, 1)
        for (var i = 0; i < mediator.channels[channel].length; i++) {

            var sub = mediator.channels[channel][i];
            sub.func.apply(sub.context, args);
        }
    };

    return {
        channels: {},
        subscribe: subscribe,
        publish: publish
    }

}());



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



var salesOp = new SalesOperation();
var manageOp = new ManagerOperation();
mediator.subscribe('save', salesOp, salesOp.doAction());
mediator.subscribe('save', manageOp, manageOp.doAction());

// create car object =======>
var BuyingCar = function (data) {
    this.carName = data.carName;
}



BuyingCar.prototype.save = function () {
    console.log('You are buing a car: ' + this.carName);

    mediator.publish('save', this);
}


var _buyingcar = new BuyingCar({ carName: 'Fiaat' });
_buyingcar.save();


