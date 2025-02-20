// Encapsulation -> binding data & methods in one single unit
class Bank {
    #balance; // private

    constructor(amount) {
        this.#balance = amount;
    }

    getBalance() {
        return this.#balance;
    }
}

let obj = new Bank(50000);
console.log(obj.getBalance()); // getter method to access
console.log(obj.#balance); // error
