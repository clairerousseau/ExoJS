
// Création de l'élément title
let head = document.getElementsByTagName("head")[0]; 
let titleTag = document.createElement("title"); 
let title = document.createTextNode("Exercice JavaScript");

titleTag.appendChild(title);
head.appendChild(titleTag);

// création du main
let main = document.createElement('main'); 
let body = document.getElementsByTagName('body')[0]; 
body.appendChild(main); 


// la partie de Abdoulaye
let section = document.createElement("section"); // crée la balise section
document.body.appendChild(section); // rajoute la section au main

let header = document.createElement("header"); // crée la balise header
section.appendChild(header); // rajoute le header à la section

let h2 = document.createElement("h2"); // crée un titre de niveau h2
header.appendChild(h2); // rajoute un titre de niveau h2

let contentH2 = document.createTextNode("Lorem ipsum"); // crée un contenu pour le h2
h2.appendChild(contentH2); // rajoute le contenu au h2

let paragraph = document.createElement("p"); // crée un paragraphe
let contentParagraph = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.");
/* crée
un contenu pour le paragraphe */
paragraph.appendChild(contentParagraph); // rajoute le contenu au paragraphe
section.appendChild(paragraph); // rajoute le paragraphe et son contenu au body