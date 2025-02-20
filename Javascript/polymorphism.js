class Parent {
    eat() {
        console.log("From Parent Class");
    }
}

class Child extends Parent {
    eat() {
        super.eat();
        console.log("From Child Class");
    }
}

let child = new Child();
child.eat(); // method overriding