// Utilisez childNodes pour lister tous les enfants du <ul>
let ul = document.querySelector('ul');
let tab = ul.childNodes;
console.log(tab);

// Écrivez une boucle for pour parcourir chaque enfant. Dans cette boucle :


let alertWrite = (e) => {
    if (e.target.innerHTML == "Fast and Furious"){
        let sentence = "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family";
        alert(sentence);
    }
    else  {
        let sentence = e.target.innerHTML;
        alert(sentence);
    }
}


for (let child of tab) {
    // Utiliser une condition pour parcourir uniquement les nœuds d'éléments (nodeType === 1)
    if (child.nodeType === 1) {
        child.addEventListener('click', alertWrite);
        if (child.innerText === "Fast and Furious") {
            // Recherchez l'élément qui contient "Fast and Furious". Si ce n'est pas le premier élément, déplacez-le en haut de la liste
            if (child !== child.parentNode.firstElementChild) {
                let first = child.parentNode.firstElementChild;
                // Déplacer l'élément en haut de la liste
                child.parentNode.insertBefore(child, first);
            }
            // Puisqu'il Fast and Furiouss'agit de la franchise la plus importante de tous les temps, ajoutez une classe .importantà l'élément
            child.classList.add('important');
        }
    }
}


// (*) Supprimez les doublons à l'aide de RemoveChild (les doublons sont des éléments ayant exactement le même nom textContent, isEqualNode peut être utile).
// (*) Ajoutez un eventListenersur le corps du document, en écoutant keyup. Lorsque vous appuyez sur la rtouche du clavier, la liste doit être triée dans un ordre aléatoire, mais Fast and Furious doit rester le premier élément (la franchise la plus importante de tous les temps, vous vous souvenez ?)
// (*) Modifiez la fonction précédente pour que lorsque vous appuyez sur la lettre dde votre clavier, l' Fast and Furiousélément soit cloné
// Créez un nouveau <div>avant la liste, en utilisant createElement et insertBefore
// A l'aide de createElement, créez une <select>balise dans la balise créée précédemment <div>, avec deux <option>s dedans : "franchises importantes" et "franchises normales".
// Ajoutez un eventListener au <select>, on change, si l'option "franchise importante" est choisie, affichez uniquement les éléments de la liste qui ont la classe .important. (indice : vous pouvez basculer la visibilité en utilisant element.style.visibility = 'hidden')