function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Employee(name, age, salary, task, position) {
    this.salary = salary;
    this.task = task;
    this.position = position;
    Person.call(this, name, age);
}

function Dev(name, age, salary, task, position, stack, seniority) {
    this.stack = stack;
    this.seniority = seniority;
    Employee.call(this, name, age, salary, task, position); 
}

let dev1 = new Dev('Leonardo Marinho', 24, 5000, 'Interface Refactoring', 'Front-End Developer', 'JavaScript', 'Junior Developer');
let dev2 = new Dev('Maria Silva', 29, 6500, 'Backend Integration', 'Backend Developer', 'Node.js', 'Pleno Developer');
let dev3 = new Dev('Carlos Souza', 32, 8000, 'Database Optimization', 'Database Administrator', 'SQL', 'Senior Developer');

console.log(dev1);
console.log(dev2);
console.log(dev3);
