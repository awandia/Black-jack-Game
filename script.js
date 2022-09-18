let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let newcardEl = document.getElementById("newcard-el")

let player = {
     name: "Wandia",
     chips: 120,
     sayHello: function() {
        console.log("Hey Fanis")
     }
}



let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13) + 1
    if ( randomNumber === 1 ) {
        return 11
    } else if ( randomNumber > 10 ) {
        return 10
    } else {
        return randomNumber
    }
}

console.log( getRandomCard() )

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard 
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " 

        for (let i = 0; i < cards.length; i++) {
            cardsEl.textContent += cards[i] + " "
        }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw another card?"
        isAlive = true
        
    } else if (sum === 21) {
        message = "You've got a blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
        messageEl.textContent = message 
}

function newCard() {
     if  ( isAlive === true && hasBlackJack === false ) {
        let thirdCard = getRandomCard( )
        sum += thirdCard
        cards.push(thirdCard)
        console.log(cards)
        renderGame()
     }
     
} 

