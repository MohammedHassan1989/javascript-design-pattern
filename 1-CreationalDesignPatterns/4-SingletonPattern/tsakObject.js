
var tasksObject=function ()  {
    var called = 0;
  
    var saveTask = function(employeeName) {
            called++;
            console.log( 'Task saved for employee ' + employeeName + '  this function caled: ' + called)
    }
    console.log('new task')
    return {
        saveTask: saveTask
    }


}

module.exports = tasksObject();