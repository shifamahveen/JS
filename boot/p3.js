let n = parseInt(prompt("Enter n:"));

for(let i=n; i>0; i--) {
    for(let j=0; j<i; j++) {
        document.write("*");
    }
    document.write("<br>");
}