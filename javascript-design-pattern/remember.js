// create object 
var task = {
    title:'learnig javascript',
    description:'To imprve my skills'
};

// difine proprty
Object.defineProperty(task,'newProp',{
    value: function (){
        return  this.title+' ' + this.description;
    },
        writable:false,
        enumerable:false,
        configurable: true
    
})
 // inheritance 

var urgentTasks = Object.create(task);

// difine new  proprty
Object.defineProperty(urgentTasks,'newProp',{
    value: function (){
        return this.title + ' this task is urgent'
    },
        writable:false,
        enumerable:false,
        configurable: true
    
})


console.log(task.newProp()); // call  new property from task
console.log(urgentTasks.newProp());// call  new property from urgentTasks