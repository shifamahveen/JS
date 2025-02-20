function displayNum(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(number);
            resolve();
        }, 2000);
    })
}

// promise chaining
displayNum(1).then(() => {
    displayNum(2).then(() => {
        displayNum(3).catch((err) => console.log(err))
    })
})