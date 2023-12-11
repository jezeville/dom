
// Modifiez le script.js pour en créer un nouveau <section> avec une couleur d'arrière-plan aléatoire pour chaque apprenant de votre groupe. Cette section doit contenir un paragraphe avec le nom de l'apprenant. Ces sections doivent être annexées dans le<article>

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
let tab = ["alice", "julien", "alexis","cassidy", "winona","hanen"];
for (let i = 0; i< tab.length; i++){
    creationDiv(tab[i]);
}


// Si le fond est sombre, le texte doit être blanc, si le fond est clair, le texte doit être noir.




// Trouvez un moyen pour qu'à chaque fois que vous chargez la page, l'ordre des éléments change !