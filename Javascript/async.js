function displayNum(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(number);
            resolve();
        }, 2000);
    })
}

async function execute() {
    await displayNum(1);
    await displayNum(2);
    await displayNum(3);
}

execute();