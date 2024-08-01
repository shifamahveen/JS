function upperTri(n) {
    for(let i=n; i>0; i--) {
        for(let j=i; j>0; j--) {
            document.write("*");
        }
        document.write("<br>");
    }
}

upperTri(3);
upperTri(10);
// find sum of digits of a number. Ex: 123 => 6