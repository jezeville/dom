// Ajoutez un keyup écouteur sur le premier champ de saisie, de sorte qu'une fois que vous tapez une lettre dans ce champ, elle aille dans le fichier <span id="display-firstname">. Le contenu du champ et la durée doivent toujours rester les mêmes.


let writeName = (e) => {
    let span = document.getElementById('display-firstname');
    let inputValue = e.target.value;
    span.innerHTML = inputValue;
}

let firstInput = document.getElementById('firstname');
firstInput.addEventListener('keyup', writeName);

// Ajoutez un keyup auditeur sur la deuxième entrée (l'entrée du numéro), afin que si l'âge est inférieur à 18 ans, le contenu de la section a-hard-truthreste caché, sinon montrez-lui ce fait difficile à avaler.

let writeAge = (e) => {
    if(parseFloat(e.target.value) < 18){
        let sectionCache = document.getElementById('a-hard-truth');
        sectionCache.style.display = "none";
    }
    else {
        let sectionCache = document.getElementById('a-hard-truth');
        sectionCache.style.display = "block";
        sectionCache.style.visibility ="visible";
    }
}

let secondInput = document.getElementById('age');
secondInput.addEventListener('keyup', writeAge);

// Eh bien, c'est un problème courant. Ajoutez un keyup écouteur sur les deux champs et affichez un indice visuel (par exemple, faites passer la bordure de saisie en rouge), ajoutez une validation , si le mot de passe est trop court (moins de 6 caractères) ou si le mot de passe et sa confirmation ne correspondent pas.


let password = document.getElementById('pwd');
let passwordConfirm = document.getElementById('pwd-confirm');

let validatePassword = (passwordValue) => {
    if (passwordValue.length < 6) {
        password.style.border = '2px solid red';
        return false;
    } else {
        password.style.border = '';
        return true;
    }
}

let writePwd = (e) => {
    let passwordInner = e.target.value;
    validatePassword(passwordInner);
}

let writePwd2 = (e) => {
    let passwordFirst = password.value;
    let passwordConfirmInner = e.target.value;

    if (passwordFirst !== passwordConfirmInner) {
        passwordConfirm.style.border = '2px solid red';
    } else {
        passwordConfirm.style.border = '';
    }
}


password.addEventListener('keyup', writePwd);
passwordConfirm.addEventListener('keyup', writePwd2);

// Enfin, utilisez un change auditeur sur le <select> terrain pour activer un mode sombre sur toute la page. Pour plus de facilité d'utilisation, nous dirons que le mode sombre consiste simplement à rendre l'arrière-plan noir et le texte blanc.

// /* <select name="toggle-darkmode" id="toggle-darkmode">
//         <option value="dark">Dark Mode</option>
//         <option value="light" selected>Light Mode</option>
//       </select> */



let mode = document.getElementById('toggle-darkmode');
mode.addEventListener('change', (event) => {
   if(event.target.value == "dark"){
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#fff";
   }
   else{
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000000";
   }
  });