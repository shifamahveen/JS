(async function() {
    function displayNum(number) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(number);
                resolve();
            }, 2000);
        })
    }

    await displayNum(1);
    await displayNum(2);
    await displayNum(3);
})();