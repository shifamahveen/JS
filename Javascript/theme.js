let btn = document.getElementById("btn");
let mode = "light";

// toggle
btn.addEventListener("click", () => {
    if (mode === "light") {
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
        mode = "dark";
    } else {
        document.querySelector("body").style.backgroundColor = "bisque";
        document.querySelector("body").style.color = "black";
        mode = "light";
    }
});