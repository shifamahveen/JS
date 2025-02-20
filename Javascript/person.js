class Person {
    constructor(name, age) {
        console.log("Creating object");
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello!, My name is ${this.name}`;
    }
}

let obj = new Person("Smith", 23);
// ES6