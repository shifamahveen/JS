let body = document.body;
let para = document.querySelector("p");
let theme = "light";

body.addEventListener("click", () => {
    if (theme === "light") {
        theme = "dark";
        body.style.backgroundColor = "black";
        para.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        para.style.color = "black";
    }
});
