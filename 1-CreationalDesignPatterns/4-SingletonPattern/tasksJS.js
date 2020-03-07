// create object
function JuniorsTask(employeeName, called) {


    this.name = employeeName;
    this.description = 'employee should finish his task for 1 week';
    this.toString = () => {
        return this.name + ' ' + this.description +' This function called '+ called+' times';
    }
}

// create singleton object
var tasksSingleton = (()=>{

var called = 0;
    var  _JuniorsTask;
    var CreateTask = (employeeName)=>{

        if(!_JuniorsTask){
            called++;
        _JuniorsTask = new JuniorsTask(employeeName,called);
        }
        
        return _JuniorsTask
    }

    return {
        CreateTask:CreateTask
    }
})();


var hassan = tasksSingleton.CreateTask('hassan'); 
var mohammed = tasksSingleton.CreateTask('mohammed'); 
var ahmed = tasksSingleton.CreateTask('ahmed'); 
var eslam = tasksSingleton.CreateTask('eslam'); 

console.log(hassan.toString());
console.log(mohammed.toString());
console.log(ahmed.toString());
console.log(eslam.toString());