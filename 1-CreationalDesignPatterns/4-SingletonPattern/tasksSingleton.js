
var task = require('./tsakObject');
//var task = taskObject
var tasksSingleton =function ()  {
   
    var saveTask = function() {
            
        task.saveTask('outSide emp');
    }

    return {
        saveTask: saveTask
    }


}

module.exports = tasksSingleton();