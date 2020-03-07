function CarOperations(carPrice) {
    this.carPrice = carPrice


}
CarOperations.prototype.saleCash = function (model, discount) {
    return 'You sale a car  ' + model + ' cash: ' + (this.carPrice - discount);

}
CarOperations.prototype.saleInstallment = function (model, Downpayment) {
    remainingAmount = this.carPrice - Downpayment

    return 'You sale a car  ' + model + ' with Downpayment: ' + Downpayment + ' each installment wil be :' + (remainingAmount / 12);
}

function CarOperationsCommand(carPrice) {
    var carop = new CarOperations(carPrice);
    this.paidAmount = [];
    var excute = (opType, model, Amount) => {
        // if opType 1 cash else installment
        if (opType == 1)
        this.paidAmount.push(  carop.saleCash(model, Amount));
        else
        this.paidAmount.push(  carop.saleInstallment(model, Amount));
    }
    var undo = () => {
        this.paidAmount=   this.paidAmount.splice(-1,1)
        //
    }

    return {
        excute:excute,
        undo:undo,
        paidAmount:this.paidAmount
    }
}



var carCommand = new CarOperationsCommand(550000000);
carCommand.excute(1,"Daewoo",5000);
carCommand.excute(1,"MG",7000);
carCommand.excute(2,"Fiaat", 10000);
console.log(carCommand.paidAmount);
carCommand.undo();
console.log(carCommand.paidAmount);
