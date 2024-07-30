// find whether an element is present in an array or not
do {
    option = parseInt(prompt("Menu:\n1. Length of String\t2. No. of Words\t3. Exit\nEnter your choice:"))
    switch(option){
        case 1: {
            let str = prompt("Enter string")
            console.log(`The length of ${str} is: ${str.length}`)
            break
        }
        case 2: {
            let str = prompt("Enter string")
            console.log(`The no. of words in ${str} is: ${str.split(" ").length}`)
            break
        }
        case 3: {
            console.log("Exiting...")
            break
        }
        default: alert("Invalid choice")           
    }
} while (option !== 3)