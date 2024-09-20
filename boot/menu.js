do {
    let choice = parseInt(prompt("String Operations \n 1. Length of the String \n 2. Number of words \n 3. Number of vowels \n 4. Exit\n Enter your choice"));

    switch(choice) {
        case 1: {
            let str = prompt("Enter string:");
            console.log(`The length of ${str} is ${str.length}`);
            break;
        } 
        case 2: {
            let str = prompt("Enter string:");
            console.log(`No. of words in ${str} is ${str.split(' ').length}`);
            break;
        }
        case 3: break;
        case 4: break;
        default: alert("Invalid choice");
    }
} while(choice !== 4);

// 1. length of the string
// 2. number of words in the string