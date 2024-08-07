let sect = document.getElementById("sect");
sect.style.backgroundColor = "lightblue";
sect.style.height = "200px";

// creating a div
let div = document.createElement("div");
div.innerText = "We are learning Java, and the topic is DOM.\nJava provides with various DOM properties. \nJava will make pages dynamic";

// adding div to section
sect.append(div)

// replacing java with javascript
let text = div.innerText;
div.innerText = text.replaceAll("Java", "Javascript");