// Data 

let backgroundImages = ["images\\outerSpace1.png", "images\\outerSpace2.png", "images\\outerSpace3.png", 
"images\\outerSpace4.png", "images\\outerSpace5.png", "images\\outerSpace6.png"]

let alienShipImages = ["images\\alien.png", "images\\alienShip.png", "images\\anotherShip.png", 
"images\\alienShip2.png", "images\\alienShip3.png", "images\\alienHorde.png"]

// Queries

let letDGameBegin = document.getElementById("begin")
let humanAttack = document.getElementById("humanAttacks")
let alienAttack = document.getElementById("alienAttacks")
let scaredyCat = document.getElementById("retreat")
let braveOne = document.getElementById("continue")

// classes

class Ship {
    constructor(name) {
        this.name = name
        this.hull = 20
        this.firepower = 5
        this.accuracy = 7
        this.myturn = true
        this.attack()
    }

    attack = (alien) => {
        // If it is human's turn
        if (this.myturn) {

            // enable attack button

            humanAttack.classList.add("enabled")

            // listen for attack alien button click

            humanAttack.addEventListener("click", displayAction)
            
            if (successfulHit(alien)) {

            }
        } else { // if it's alien's turn
            // disppear human attack button and make alien attack button appear

            humanAttack.classList.replace("disabled")

            // turn alien turn 

            AlienShip.this.myturn = true
        }
    }

    
}

class AlienShip {
    constructor(name) {
        this.name = name
        this.hull = rando(3, 6)
        this.firepower = rando(2, 4)
        this.accuracy = rando(6, 8)
        this.myturn = false
        this.attack()
    }

    rando = (min, max) => {
        let randomNumber = Math.floor(Math.random() * ((max - min) + 1) + min)
        return randomNumber
    }

    attack = (human) => {

    }

}

// Start Game

letDGameBegin.addEventListener("click", startYourEngines)

// Functions

const startYourEngines = () => {
    // Disable Begin button

    letDGameBegin.style.visibility = "collapse"
    humanAttack.style.visibility = "visible"
}

// Determine Successful Hits

const successfulHit = (enemy) => {
    let hit
    if (Math.floor(Math.random() * 10) > enemy.accuracy) {
        hit = "Target Hit!"
    } else {
        hit =  "Target Missed!"
    }
    displayAction(hit) 
}

const playerHitSuccess = (attacker, victim) => {

    // subtract human hit point from alien hull

    victim.hull -= attacker.firepower

    // update hull of alien ship

    updateShipData(enemy)

    // call check hull of alien ship function

    checkShipAlive(enemy)
}


const checkShipAlive = (attackedShip) => {

    // if ship hull <= 0

    if (this.hull <= 0) {

        // Display Alien ship destroyed

        displayAction("Alien Ship Destroyed!")

        // Ask if human wants to continue or retreat

        let divEl = document.getElementByID("fightOrFlight")
        divEl.style.visibility = "visible"

        // call fight or flight function

        fightOrFlight()
    }
    else {
        // disappear human attack button

        letDGameBegin.classList.replace("disabled")

        // appear alien attack button
    }
}

const updateShipData = (enemyShip, hitPower) => {
    // remove hp of player from hull of enamy
    let updatedShipHullInfo = enemyShip.hull - hitPower
    return updatedShipHullInfo
}

const fightOrFlight = () => {
    // listen for click on Retreat or Continue
    // if continue call attack ()
    // if retreat then call endGame
}

const quitGame = () => {
    // display "Thanks for playing please come back again"
    displayAction("Thanks for playing please come back again.")
}

const completeGame = () => {
    // display who won 
    // call quitGame
}

const changeBackgroundImage = () => {
    // randomize Background Image
    let backgroundImage = backgroundImages[(Math.floor(Math.random() * 6))]
    return backgroundImage
}

const changeAlienShipImage = () => {
    //randomize Alien Spaceship Image
    let alienShipImage = alienShipImages[(Math.floor(Math.random() * 6))]
    return alienShipImage
}

const displayAction = (notice) => {
    
    // display attack actions

    const liEl = document.createElement("li")
    liEl.textContent = notice

    document.querySelector('ul').appendChild(liEl)
}

// Battle Setup

ussAssembly = new Ship("USS Assembly")

alienShip = new AlienShip("Kree")
alienShip2 = new AlienShip("Letari")
alienShip3 = new AlienShip("Skrulls")
alienShip4 = new AlienShip("DoomsDay")
alienShip5 = new AlienShip("Arnachids")
alienShip6 = new AlienShip("Predator")

let count = 0

let AlienHorde = [alienShip, alienShip2, alienShip3, alienShip4, alienShip5, alienShip6]

let currentAlien = AlienHorde[count]






