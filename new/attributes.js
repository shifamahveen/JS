let sect = document.getElementById("sect");

// get Attribute values
sect.getAttribute("id") // demo

// set Attribute (add)
sect.setAttribute("class", "sample")
// applying setAttribute for second time will overwrite values

// classes
sect.classList.add("demo")
sect.classList.remove("demo")
sect.classList.replace("sample", "dummy")

// hasAttributes, get all attributes list