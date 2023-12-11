console.log(document.title);
document.title = "Modifying the DOM";
document.body.style.backgroundColor = "#FF69B4";
document.body.style.backgroundColor = "rgb(255,255,125)";

let deuxiemeElementEnfant = document.body.children;

for (let jerem of deuxiemeElementEnfant) {
    console.log(jerem);
}


