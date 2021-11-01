class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log('Hello, ' + this.name);
    }
}

const person = new Person('Shobhit');
person.sayHello();
