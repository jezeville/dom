const _initTime = Date.now()


const getElapsedTime = () => {
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
    console.log(e.target.classList[1])
    console.log(getElapsedTime())
}
const creatediv = (e) => {
    let div = document.createElement('div');
    div.className = "displayedsquare";
    div.classList.add(e.target.classList[1]);
    let wrapper = document.querySelector('.displayedsquare-wrapper');
    wrapper.appendChild(div);
}
const information = (e) => {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    let sentence = "[" + getElapsedTime() + "] Created a new " + e.target.classList[1] + " square";
    li.innerHTML = sentence;
    ul.appendChild(li);
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
    actionSquare.addEventListener('click', clickOnSquare);
    actionSquare.addEventListener('click', creatediv);
    actionSquare.addEventListener('click', information);
}

const logkey = (e) => {
    if (e.code == "Space") {
        let random = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = random;z
        let ul = document.querySelector('ul');
        let li = document.createElement('li');
        let sentence = "[" + getElapsedTime() + "] Created a new " + random + " background";
        li.innerHTML = sentence;
        ul.appendChild(li);
    }
    else if (e.code == "KeyL") {
        let tab = document.querySelectorAll('li');
        for ( let element of tab){
            element.remove();
        }
    }
    else if (e.code == "KeyS"){
        let tab = document.querySelectorAll('.displayedsquare ');
        for ( let element of tab){
            element.remove();
        }
    }
}

document.addEventListener("keypress", logkey);
let generatedAlert2 = (e) => {
    alert(e.target.classList[1]);
}
let generatedAlert = () => {
    const generatedSquares = document.querySelectorAll('.displayedsquare');
    for (let generatedSquare of generatedSquares) {
            generatedSquare.addEventListener('click', generatedAlert2);
        }
} 
document.body.addEventListener('click', generatedAlert);