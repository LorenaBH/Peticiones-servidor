'use strict';

const userNick = document.querySelector('.paragraph');
const userBoxName = document.querySelector('.boxName');
const clickButton = document.querySelector('.btn');
const listBoxes = document.querySelector('.boxes');

function seeker (event) {
    fetch (`https://api.github.com/users/${userBoxName.value}`)
    .then(response => response.json())
    .then(data =>{
        listBoxes.innerHTML="";
        for(const letter of data.name){
            listBoxes.innerHTML += `<li>${letter}</li>`;
        } 
    })
    .catch(error => console.log(`Ha sucedido un error: ${error}`));
}


clickButton.addEventListener('click', seeker);
