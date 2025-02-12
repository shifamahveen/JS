let n=3;

for(let i=1; i<=n; i++) {
    // spaces
    for(let j=1; j<=n-i; j++) {
        document.write("&nbsp;&nbsp;");
    }
    for(let k=1; k<=i; k++) {
        document.write(" * ");
    }
    document.write("<br>");
}