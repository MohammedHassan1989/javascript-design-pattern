// create object
function JuniorsTask(employeeName) {
    this.name = employeeName;
    this.description = 'employee should finish his task for 1 week';
    this.toString = () => {
        return this.name + ' ' + this.description
    }
}
function SeniorTask(employeeName) {
    this.name = employeeName;
    this.description = 'employee should finish his task for 1 day';
    this.toString = () => {
        return this.name + ' ' + this.description
    }
}
function ManagerTask(employeeName) {
    this.name = employeeName;
    this.description = 'employee should finish his task for 1 hour';

    this.toString = () => {
        return this.name + ' ' + this.description
    }
}


function tasksFactory(employeeName, employeeGrade) {

    switch (employeeGrade) {
        case 10:
            return new JuniorsTask(employeeName)
            break;
        case 20:
            return new SeniorTask(employeeName)
            break;
        case 100:
            return new ManagerTask(employeeName)
            break;
        default:
            break;
    }
}

var hassan = new tasksFactory('hassan',10);
var ahmed = new tasksFactory('ahmed',100);
var kamal = new tasksFactory('kamal',20);

console.log(hassan.toString());
console.log(ahmed.toString());
console.log(kamal.toString());
