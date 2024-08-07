let btn = document.getElementById("btn1");

// Event Object, event listeners
// btn.onclick = (event) => {
//     console.log(event);
//     // defines type of event and target of event
// }

// syntax
// Add -> node.addEventListener(eventtype, function)
// Remove -> node.removeEventListener(eventtype, function)

btn.addEventListener("click", () => {
    console.log("Event Listener Added");
});

let e = () => {
    alert("Event triggered");
}

btn.addEventListener("click", e);
btn.removeEventListener("click", e);