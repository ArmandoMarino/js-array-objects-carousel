console.log('JS OK');


const dataObj = [
  {
    image: 'img/01.webp',
    title: 'Marvel\'s Spiderman Miles Morale',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
    image: 'img/03.webp',
    title: 'Fortnite',
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
    image: 'img/05.webp',
    title: "Marvel's Avengers",
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];


// PRENDO I DATI DAL DOM
// GALLERY
const row = document.getElementById('img-wrapper');
console.log(row);

// BUTTONS NEXT AND PREV
const prev = document.getElementById('prev');
console.log(prev);

const next = document.getElementById('next');
console.log(next);

// TODO FUNCTION
// const hello = () => {
//     return "Hello World!";
//   }

// VARIABILE D'APPOGGIO
let myList = "";

// CICLO FINCHE'
let i = 0;
while (i < dataObj.length){
    console.log(dataObj[i]);

    myList += `
    <div class="col-8 gallery">
        <img class="" src="${dataObj[i].image}">
        <div class="img-text">
            <h5>${dataObj[i].title}</h5>
            <p>${dataObj[i].text}</p>
        </div>
    </div>`;
    i++;
}

row.innerHTML += myList;

// IMG
const images = document.querySelectorAll('.gallery')

let currentActiveIndex = 0;

images[currentActiveIndex].classList.add('active');


next.addEventListener('click', function (){

    images[currentActiveIndex].classList.remove('active');


    currentActiveIndex++;

    if(currentActiveIndex === dataObj.length){
        currentActiveIndex = 0;
    }

    images[currentActiveIndex].classList.add('active');
});


prev.addEventListener('click', function (){

    images[currentActiveIndex].classList.remove('active');

    currentActiveIndex--;

    if(currentActiveIndex < 0 ){
        currentActiveIndex = dataObj.length - 1;
    }

    images[currentActiveIndex].classList.add('active');
});