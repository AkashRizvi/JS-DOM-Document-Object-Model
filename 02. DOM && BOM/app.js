console.log("Hy Akash");
document.write("Hy Akash ");

let h3El = document.querySelector("h3");   // we select h3 in index05.html

h3El.style.color = "green";   // change the color of h3



// ------- start Adding Paragrpah in js to add it in index05.html

let content = document.createElement("p");
content.innerHTML = "This paragraph is Created / written in  app.js "

document.querySelector("body").appendChild(content);

// ------- End Adding Paragrpah in js to add it in index05.html
