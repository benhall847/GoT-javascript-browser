const GoTlist = document.querySelector('[data-list]');
let GoTnameList = [];
let index = 0;

characters.forEach(function (charObj){
    GoTnameList.push((aDiv = document.createElement('div')));
    GoTnameList[index].textContent = charObj.name;
    GoTnameList[index].setAttribute(`data-${index}`,'character');
    GoTlist.appendChild(GoTnameList[index]);
    GoTnameList[index].addEventListener('click', openIt);
    index += 1;
});
console.log(GoTnameList);

function openIt(){
    console.log("YES")
}