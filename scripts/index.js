const GoTlist = document.querySelector('[data-list]');
const GoTdata = document.querySelector('[data-info]');
const GoTletters = document.querySelector('[data-letters]');

let GoTnameList = [];
let GoTalphabet = [];
let index = 0;


function OpenLetter(event){
    GoTnameList.forEach(function (div){
        if (event.target.textContent === div.textContent[0]){
            div.classList.toggle('hidden');
        }

    })
}


function  genAlphabet(charA, charZ){
    let i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    let myIndex = 0;
    for (; i <= j; i++){


        GoTalphabet.push((aDiv = document.createElement('div')));
        GoTalphabet[myIndex].textContent = String.fromCharCode(i);

        GoTletters.appendChild(GoTalphabet[myIndex]);

        GoTalphabet[myIndex].addEventListener('click', OpenLetter);
        GoTalphabet[myIndex].style.display = 'inline-block';

        myIndex += 1;
    };
    return;
}
const myAlphabet = genAlphabet("A","Z");




characters.forEach(function (charObj){

    GoTnameList.push((aDiv = document.createElement('div')));

    GoTnameList[index].textContent = charObj.name;
    GoTnameList[index].data = charObj;
    // GoTnameList[index].classList.toggle('hidden');
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

function urlForPage(pageNumber){
    return `https://www.anapioficeandfire.com/api/characters?page=${pageNumber}&pageSize=50`
}


function accumulateCharacters(data){
    allCharactersArray = [...allCharactersArray, ...data];
    console.log(allCharactersArray);
    storeCharacters(allCharactersArray);
}


// const URL = "https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50"
let allCharactersArray = [];

function fetchPage(pageNumber){
    fetch(urlForPage(pageNumber))
        .then(function(response){
            return response.json();
        }) 
        .then(accumulateCharacters)
        .then(function(){
            console.log("YUP")
        });

}
function sortByName(obj1, obj2){
    const letter1 = obj1.name[0];
    const letter2 = obj2.name[0]
    if (letter1 < letter2){
        return 1;
    } else if (letter2 < letter1){
        return -1;
    }
    return 0;
};



function main(){
    let myLocalChars = loadCharacters()
    if (myLocalChars){
        allCharactersArray = myLocalChars.sort(sortByName);
        console.log(allCharactersArray)
    }else{
        for (let num = 0; num < 49; num++){
            let delay = num * 500
            setTimeout(function(){
                fetchPage(num);
            }, delay)
        }
    }
}
console.log(main())

function storeCharacters(arrayOfCharacters){
    arrayOfCharacters = JSON.stringify(arrayOfCharacters)
    localStorage.setItem('GoT', arrayOfCharacters)
}

function loadCharacters(){

    const myChars = localStorage.getItem('GoT')
    return myChars;
}