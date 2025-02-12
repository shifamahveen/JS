let form = document.querySelector("#form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    let password = document.querySelector("#password").value;
    let error = document.querySelector("#error");
    let success = document.querySelector("#success");

    let digitExp = /\d/;
    if(password.length <= 8 && digitExp.test(password)) {
        error.innerHTML = "Password must contain min of 8 chars & it must contain a digit";
        error.style.color = "red";
        isValid = false;
    }
    if(isValid) {
        success.innerHTML = "Form Submitted Successfully!";
        success.style.color = "green";
        error.style.display = "none";
    }
    
})