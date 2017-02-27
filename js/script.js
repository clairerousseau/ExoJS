let head = document.getElementsByTagName("head")[0]; 
let titleTag = document.createElement("title"); 
let title = document.createTextNode("Exercice JavaScript");

titleTag.appendChild(title);
head.appendChild(titleTag);


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