
// Modifiez le script.js pour en créer un nouveau <section> avec une couleur d'arrière-plan aléatoire pour chaque apprenant de votre groupe. 
//Cette section doit contenir un paragraphe avec le nom de l'apprenant. Ces sections doivent être annexées dans le<article>

function creationDiv(nom){
let article = document.querySelectorAll('article');
for (let elem of article){
    let newsection = document.createElement('section');
    let newcolor =  '#' + Math.floor(Math.random() * 16777215).toString(16);
    let newparagraphe = document.createElement('p');
    newparagraphe.innerHTML = nom;
    newsection.appendChild(newparagraphe);
    newsection.style.backgroundColor = newcolor;
    elem.appendChild(newsection);

}
}
/*let tab = ["alice", "julien", "alexis","cassidy", "winona","hanen"];
for (let i = 0; i< tab.length; i++){
    creationDiv(tab[i]);
}*/


// Si le fond est sombre, le texte doit être blanc, si le fond est clair, le texte doit être noir.

let section = document.querySelectorAll('section');
for (let element of section) {
    let backgroundColor = element.style.backgroundColor;

    let rgbValues = backgroundColor.match(/\d+/g);


    let r = parseInt(rgbValues[0]);
    let g = parseInt(rgbValues[1]);
    let b = parseInt(rgbValues[2]);

    if(r < 150 && g < 150 && b < 150){
        element.style.color = "#ffffff";
    }
    else {
        element.style.color = "#000000";
    }
}


// Trouvez un moyen pour qu'à chaque fois que vous chargez la page, l'ordre des éléments change !

let tab = ["alice", "julien", "alexis", "cassidy", "winona", "hanen"];

for (let i = 0; i < tab.length; i++) {
    let randomIndex = Math.floor(Math.random() * tab.length);
    let x = tab[i];
    tab[i] = tab[randomIndex];
    tab[randomIndex] = x;
}

console.log(tab);

for (let x = 0; x< tab.length; x++){
    creationDiv(tab[x]);
}