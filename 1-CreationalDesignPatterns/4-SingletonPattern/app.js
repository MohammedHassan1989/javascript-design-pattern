const task = require('./tsakObject');
const _taskSingleton = require('./tasksSingleton');
//_taskSingleton = taskSingleton();
//const task = taskObject();

task.saveTask('hassan');
task.saveTask('mohammed');

_taskSingleton.saveTask();
_taskSingleton.saveTask();

