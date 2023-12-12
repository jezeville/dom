// Sélectionnez le dernier enfant de la <ol>balise et placez-le en début de liste

let ol = document.querySelector('ol');
let last = ol.children[4];
let first = ol.children[0];
ol.insertBefore(last, first);

// Déplacez le <h2>de la troisième section dans la deuxième et vice-versa

let section = document.querySelectorAll('section');
let h2 = document.querySelectorAll('h2');
let lasth2 = h2[2];
let secondh2 = h2[1];
section[1].insertBefore(lasth2, section[1].firstElementChild);
section[2].insertBefore(secondh2, section[2].firstElementChild);


// Supprimez la dernière section du DOM, nous n'en avons pas besoin de toute façon

section[2].style.display = "none";