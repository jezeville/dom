// Utilisez childNodes pour lister tous les enfants du <ul>
let ul = document.querySelector('ul');
let tab = ul.childNodes;

// Écrivez une boucle for pour parcourir chaque enfant. Dans cette boucle :


let alertWrite = (e) => {
    if (e.target.innerHTML == "Fast and Furious") {
        let sentence = "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family";
        alert(sentence);
    }
    else {
        let sentence = e.target.innerHTML;
        alert(sentence);
    }
}

const tabArray = Array.from(tab);
let modification = (child, tabArray) => {
    // Utiliser une condition pour parcourir uniquement les nœuds d'éléments (nodeType === 1)
    if (child.nodeType === 1) {
        child.addEventListener('click', alertWrite);
        // (*) Supprimez les doublons à l'aide de RemoveChild (les doublons sont des éléments ayant exactement le même nom textContent, isEqualNode peut être utile).
        for (let i = tabArray.indexOf(child) + 1; i < tabArray.length; i++) {
            if (child.isEqualNode(tabArray[i])) {
                child.parentNode.removeChild(tabArray[i]);
            }
        }
        if (child.innerText === "Fast and Furious") {
            // Recherchez l'élément qui contient "Fast and Furious". Si ce n'est pas le premier élément, déplacez-le en haut de la liste
            if (child !== child.parentNode.firstElementChild) {
                let first = child.parentNode.firstElementChild;
                // Déplacer l'élément en haut de la liste
                child.parentNode.insertBefore(child, first);
            }
            // Puisqu'il Fast and Furious s'agit de la franchise la plus importante de tous les temps, ajoutez une classe .important à l'élément
            child.classList.add('important');
        }
    }
}

for (let child of tabArray) {
    modification(child , tabArray); 
}

// (*) Ajoutez un eventListener sur le corps du document, en écoutant keyup. Lorsque vous appuyez sur la r touche du clavier, la liste doit être triée dans un ordre aléatoire, mais Fast and Furious doit rester le premier élément (la franchise la plus importante de tous les temps, vous vous souvenez ?)
let sorted = (e) => {
    if (e.key == "r") {
        let ul = document.querySelector('ul');
        ul.innerHTML = "";

        for (let i = tabArray.length - 1; i >= 0; i--) {
            let randomNumber = Math.floor(Math.random() * (i + 1));

            let temp = tabArray[i];
            tabArray[i] = tabArray[randomNumber];
            tabArray[randomNumber] = temp;

            if (tabArray[i].nodeType === 1) {
                let li = document.createElement('li');
                li.innerHTML = tabArray[i].innerHTML;
                ul.append(li);
            }
        }
        const tabTwo = Array.from(ul.childNodes);
        for (let elem of tabTwo){
            modification(elem , tabTwo); 
        }
    }
    // (*) Modifiez la fonction précédente pour que lorsque vous appuyez sur la lettre d de votre clavier, l' Fast and Furious élément soit cloné
    if (e.key == "d") {
        let ul = document.querySelector('ul');
        let FF = document.querySelector('.important');
        let div = FF.cloneNode(true);
        ul.insertBefore(div,FF);
    }
}

document.body.addEventListener('keyup', sorted);


// Créez un nouveau <div>avant la liste, en utilisant createElement et insertBefore

let maDiv = document.createElement('div');
document.body.insertBefore(maDiv, ul);

// A l'aide de createElement, créez une <select>balise dans la balise créée précédemment <div>, avec deux <option>s dedans : "franchises importantes" et "franchises normales".

let select = document.createElement('select');
let option1 = document.createElement('option');
option1.value = "franchises importantes";
option1.innerHTML = "franchises importantes";
let option2 = document.createElement('option');
option2.value = "franchises normales";
option2.innerHTML = "franchises normales";
select.append(option1);
select.append(option2);
maDiv.append(select);

// Ajoutez un eventListener au <select>, on change, si l'option "franchise importante" est choisie, affichez uniquement les éléments de la liste qui ont la classe .important. (indice : vous pouvez basculer la visibilité en utilisant element.style.visibility = 'hidden')

let selection = (e) =>{
    let valueSelect = document.querySelector('select').value;
    let ul = document.querySelector('ul');
    if(valueSelect == "franchises importantes"){
       for (let element of ul.childNodes){
        if (element.nodeType === 1){
            if (!element.classList[0]){
                element.style.visibility= "hidden";
            }
            else{
                element.style.visibility = "visible";
            }
        }
       }
    }
    else{
        for (let element of ul.childNodes){
         if (element.nodeType === 1){
             if (element.classList[0]){
                 element.style.visibility= "hidden";
             }
             else{
                element.style.visibility = "visible";
            }
         }
        }
     }

}
    select.addEventListener('click', selection);
