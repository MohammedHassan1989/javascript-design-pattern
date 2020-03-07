
var carObject = () => {
    buyingCar = (model) => {
        // save database 
        console.log('You buy car ' + model);
    }
    sendMailTocustomerByPriceDetail = () => {
        console.log('You must visit our branch and  pay 250000 ')
    }
    sendMailToOperation = () => {
        console.log('Please prepare a car for sale today');
    }
    sendMailToBranchManager = () => {
        console.log('Customer will visit you today to pay 250000 for buying a car');
    }

    buyCarAndNoify=(model, areyouSure)=>{
        if(areyouSure == true){
           buyingCar(model)
        sendMailTocustomerByPriceDetail();
        sendMailToOperation();
        sendMailToBranchManager(); 
        }
        else{
            console.log('Operation stoped');
        }
        
    }
    return {
        buyCarAndNoify:buyCarAndNoify
    }
}


var car128 = carObject();

car128.buyCarAndNoify('fiaat',false);



