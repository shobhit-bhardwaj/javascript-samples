class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log('Hello, ' + this.name);
    }
}

class Employ extends Person {
    constructor(name, designation) {
        super(name);
        this.designation = designation;
    }

    printInfo() {
        console.log('Name - ' + this.name + ', Designation - ' + this.designation);
    }
}

const person = new Person('Shobhit');
person.sayHello();

const employ = new Employ('Shobhit', 'Software Engineer');
employ.printInfo();
