
// --------------- Folder:05, Video 03 Accessing the DOM

//  -------- Access a signle Element

console.log(document.getElementById("logo"))  //// method 1

const logoEl = document.getElementById("logo"); 
console.log(logoEl); // method 2

console.log(document.querySelector(".chore"))  //// method 3



// -------- Accesing Multiple Element

let choresEl = document.getElementsByClassName("chore");   // it wil select all the 'chore' class in 'index.html'

let choresOptionalEl = document.getElementsByTagName("li");   // it wil select all the 'li' tags in 'index.html'

let headingEl = document.getElementsByTagName("h2")   // it wil select all the 'h2' tags in 'index.html'


let paragraphEl = document.querySelectorAll(".chores, .random-paragraph");      // it wil select all 2 classes in 'index.html'
console.log(paragraphEl);


