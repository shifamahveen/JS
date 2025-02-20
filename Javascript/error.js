let x = 10;

try {   
    x = y+10; // ReferenceError
} catch (e) {       
    document.querySelector("#error").innerHTML = e;
} finally {
    console.log("Finally block");
}