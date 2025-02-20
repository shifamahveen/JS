// base class
class Person {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating...`);
    }

    walk() {
        console.log(`${this.name} is walking...`);
    }
}

// derived class
class Engineer extends Person {
    constructor(name, role) {
        super(name);
        this.role = role;
    }

    work() {
        console.log(`${this.name} is working as ${this.role}`);
    }
}

let e1 = new Engineer("John", "UI Developer");