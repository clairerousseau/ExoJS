let head = document.getElementsByTagName("head")[0]; 
let titleTag = document.createElement("title"); 
let title = document.createTextNode("Exercice JavaScript");

titleTag.appendChild(title);
head.appendChild(titleTag); 

var section2 = document.createElement("section");


var section2Header = document.createElement("header");



// Isma
var section2H2 = document.createElement("h2");
var section2H2Text = document.createTextNode("Lorem ipsum");
section2H2.appendChild(section2H2Text);



var section2P = document.createElement("p");
var section2PText = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.");
section2P.appendChild(section2PText);

section2.appendChild(section2H2);
section2.appendChild(section2P);


document.body.appendChild(section2);

//