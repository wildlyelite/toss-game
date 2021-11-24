const cardArray = [{
    name: 'crash',
    Img: 'crash.png'
},
{
    name: 'crash',
    Img: 'crash.png'
},
{
    name: 'kick',
    Img: 'kick.png'
},
{
    name: 'kick',
    Img: 'kick.png'
},
{
    name: 'snare',
    Img: 'snare.png'
},
{
    name: 'snare',
    Img: 'snare.png'
},
{
    name: 'tom1',
    Img: 'tom1.png'
},
{
    name: 'tom1',
    Img: 'tom1.png'
},
{
    name: 'tom2',
    Img: 'tom2.png'
},
{
    name: 'tom2',
    Img: 'tom2.png'
},
{
    name: 'tom3',
    Img: 'tom3.png'
},
{
    name: 'tom3',
    Img: 'tom3.png'
},
]
cardArray.sort(()=>0.5-Math.random())

const grid = document.querySelector('.grids')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

// creat gamebord
function creatbord() {
for (let i = 0; i < cardArray.length; i++) {
    var card = document.createElement('img');
    card.setAttribute('src', 'bg.png');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipcard);
    grid.appendChild(card);



}
}

// check for match 

function checkformatch() {
const cards = document.querySelectorAll('img');
const optionOneId = cardsChosenId[0]
const optionTwoId = cardsChosenId[1]
if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'bg.png')
    cards[optionTwoId].setAttribute('src', 'bg.png')
    alert('congratation you selected the same ')
} else if (cardsChosen[0] === cardsChosen[1]) {
    alert('you found a match')
    cards[optionOneId].setAttribute('src', '2.png')
    cards[optionTwoId].setAttribute('src', '2.png')
    cards[optionOneId].removeEventListener('click', flipcard)
    cards[optionTwoId].removeEventListener('click', flipcard)
    cardsWon.push(cardsChosen)

} else {
   
    cards[optionOneId].setAttribute('src', 'icons8-cross-mark-100.png')
    cards[optionTwoId].setAttribute('src', 'icons8-cross-mark-100.png')
    var audio= new Audio("wrong.mp3")
    audio.play()
    setTimeout(() => {
        cards[optionOneId].setAttribute('src', 'bg.png')
    cards[optionTwoId].setAttribute('src', 'bg.png')
    }, 2000);
    

    alert('sorry try again ')
}
cardsChosen = []
cardsChosenId = []
resultDisplay.textContent = cardsWon.length
if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.textContent = 'Congratulations! You found them all!'
}

}

// flipcard
function flipcard() {
var cardId = this.getAttribute('data-id');
cardsChosen.push(cardArray[cardId].name)
cardsChosenId.push(cardId);
this.setAttribute('src', cardArray[cardId].Img)
if (cardsChosen.length === 2) {
    setTimeout(checkformatch, 500);
}


}


creatbord()