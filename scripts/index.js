const GoTlist = document.querySelector('[data-list]');
const GoTdata = document.querySelector('[data-info]');
const GoTletters = document.querySelector('[data-letters]');

let GoTnameList = [];
let GoTalphabet = [];
let index = 0;


function OpenLetter(){
    console.log("HELLO")
}

function  genAlphabet(charA, charZ){
    let a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    let myIndex = 0;
    for (; i <= j; i++){
        a.push(String.fromCharCode(i));
        GoTalphabet.push((aDiv = document.createElement('div')));
        GoTalphabet[myIndex].textContent = String.fromCharCode(i);
        GoTletters.appendChild(GoTalphabet[myIndex]);
        GoTalphabet[myIndex].addEventListener('click', OpenLetter);
        GoTalphabet[myIndex].style.display = 'inline-block';
        myIndex += 1;
    };
    console.log(GoTalphabet)
    return;
}
const myAlphabet = genAlphabet("A","Z");


characters.forEach(function (charObj){
    GoTnameList.push((aDiv = document.createElement('div')));
    GoTnameList[index].textContent = charObj.name;
    GoTnameList[index].data = charObj;
    GoTlist.appendChild(GoTnameList[index]);
    GoTnameList[index].addEventListener('click', openIt);
    index += 1;
});







function openIt(event){

    let myString = ''
    Object.keys(event.target.data).forEach(function (key){
        myString += `${key}: ${event.target.data[key]}\r\n`;
    });
    GoTdata.textContent = myString;

};