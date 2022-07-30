const alphabet = [
    "Aa", "Bb", "Cc", "Dd", "Ee", "Ff", "Gg", "Hh", "Ii", "Jj", "Kk", "Ll", "Mm", "Nn", "Oo", "Pp", "Qq", "Rr", "Ss", "Tt", "Uu", "Vv", "Ww", "Xx", "Yy", "Zz"
];

let list = document.getElementById("alphabet_list");

alphabet.forEach(addLetter);

function addLetter(value, index, array) {
    let letterDiv = createElementLetter(value);
    let boxDiv = createElementBox(letterDiv, value);
    list.appendChild(boxDiv);
}

function createElementBox(childDiv, id) {
    let letterBox = document.createElement("div");
    letterBox.setAttribute("id", id);
    letterBox.classList.add("letter_box");
    letterBox.addEventListener("click", onClickBox);
    letterBox.appendChild(childDiv);
    return letterBox;
}

function createElementLetter(currentLetter) {
    let letterDiv = document.createElement("div");
    letterDiv.classList.add("letter");
    let text = document.createTextNode(currentLetter);
    letterDiv.appendChild(text);
    return letterDiv;
}

function onClickBox(event) {
    console.log(event);
    let id = event.target.id;
    if (!id) {
        id = event.target.parentElement.id;
    }
    alert("fui clicado " + id);
};