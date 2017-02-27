
// Création de l'élément title
let head = document.getElementsByTagName("head")[0]; 
let titleTag = document.createElement("title"); 
let title = document.createTextNode("Exercice JavaScript");

titleTag.appendChild(title);
head.appendChild(titleTag);

// création du main
let main = document.createElement('main'); 
document.body.appendChild(main); 

// la partie de Abdoulaye
let section = document.createElement("section"); // crée la balise section
document.body.appendChild(section); // rajoute la section à body

let header = document.createElement("header"); // crée la balise header
document.body.appendChild(header); // rajoute le header au body

let h2 = document.createElement("title"); // crée un titre de niveau h2
document.body.appendChild(h2); // rajoute un titre de niveau h2

let contentH2 = document.createTextNode("Lorem ipsum"); // crée un contenu pour le h2
h2.appendChild(contentH2); // rajoute le contenu au h2
document.body.appendChild(contentH2); // rajoute le h2 et son contenu au body

let paragraph = document.createElement("paragraph"); // crée un paragraphe
let contentParagraph = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."); /* crée
un contenu pour le paragraphe */
paragraph.appendChild(paragraph); // rajoute le contenu au paragraphe
document.body.appendChild(paragraph); // rajoute le paragraphe et son contenu au body

// Isma

var section2 = document.createElement("section");
var section2Header = document.createElement("header");
var section2H2 = document.createElement("h2");
var section2H2Text = document.createTextNode("Lorem ipsum");

section2H2.appendChild(section2H2Text);

var section2P = document.createElement("p");
var section2PText = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.");
section2P.appendChild(section2PText);

section2.appendChild(section2H2);
section2.appendChild(section2P);

document.main.appendChild(section2);
