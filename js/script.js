
// Création de l'élément title
let head = document.getElementsByTagName("head")[0]; 
let titleTag = document.createElement("title"); 
let title = document.createTextNode("Exercice JavaScript");

titleTag.appendChild(title);
head.appendChild(titleTag); 
