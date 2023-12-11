// Ajoutez un title attribut à chaque élément possédant la classe importante, en indiquant This is an important item. Astuce : ajouter un attribut de titre à un élément est différent de modifier le titre d'un document.

let title = document.querySelectorAll('.important');
for (let jerem of title){
    jerem.setAttribute("title", "This is an important item");
}


// Sélectionnez toutes les balises img et parcourez-les. S'ils n'ont pas importantde classe, transformez leur propriété d'affichage ennone

let img = document.querySelectorAll('img');
for (let imgElement of img) {
    if (!imgElement.classList.contains('important')) {
        imgElement.style.display = "none";
    }
}

// Parcourez tous les paragraphes et affichez leur contenu dans la console. Si le paragraphe a une classe, affichez également son nom de classe

let p = document.querySelectorAll('p');
for (let para of p ){
    console.log(para.innerHTML);
    if(para.classList != ""){
        console.log(para.classList.value);
    }
}

// Donnez à chacun des paragraphes une couleur de texte aléatoire (différente pour chacun) SAUF s'il a une classe, puis laissez-le tel quel.

for (let paragraphe of p ){
    if(paragraphe.classList != ""){}
    else {
        var myRandomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        paragraphe.style.color = myRandomColor;
    }
}