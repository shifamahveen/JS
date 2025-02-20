const employee = {
    calcTax() {
        console.log("Tax rate is 10%");
    }
}

const smith = {
    salary: 50000
}

smith.__proto__ = employee