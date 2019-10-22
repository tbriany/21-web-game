document.addEventListener("DOMContentLoaded", () => {
    startGame()
   })
   
const startGame = () => {
       let btn = document.querySelector("#startBtn")
       btn.addEventListener('click', getNewDeck)
}

const getNewDeck = async () => {
    let url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    let response = await axios.get(url)
    deck_id = response.data.deck_id 
    drawCards(deck_id, 2)
    removeStartBtn()
}

const drawCards = async (deck_id, num) => {
    let url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${num}`
    let response = await axios.get(url)
    let cardData = response.data.cards 

    if (num === 1 || num === 2) {
     displayUserCards(cardData)
    } else if (num === 3) {
    displayCpuCards(cardData)
     }
 }

  userScore = []

const displayUserCards = (cardData) => {

    cardData.forEach(el => {
        let img = el.image
        let value = el.value

        userScore.push(value)

        card = document.createElement("img")
        card.className = "card";

        
       card.src = img 
       card.setAttribute('width', '201px')
       card.setAttribute('height', '294px')

       let userDiv = document.querySelector("#userDeck")
       userDiv.append(card)
    })
     updateUserScore(userScore)
}

const removeStartBtn = () => {
    let btn = document.querySelector("#startBtn")
    let gameDiv = document.querySelector("#gameDiv")
    gameDiv.removeChild(btn)

    addBtns()
}

const addBtns = () => {
    let hitBtn = document.createElement('button')
    hitBtn.id = "hitBtn"
    hitBtn.innerText = "HIT"

    let stayBtn = document.createElement('button')
    stayBtn.id = "stayBtn"
    stayBtn.innerText = "Stay"

    let footer = document.querySelector("#footer")
    footer.append(hitBtn, stayBtn)

    hitBtn.addEventListener('click', hit)
    stayBtn.addEventListener('click', stay)
}

const hit = () => {
    drawCards(deck_id, 1)
}

const updateUserScore = (scoreArr) => {
    userSum = 0
     for (let i = 0; i < scoreArr.length; i++) {
       if (scoreArr[i] === "JACK" || scoreArr[i] === "QUEEN" || scoreArr[i] === "KING"){
          userSum += 10
       } else if (scoreArr[i] === "ACE") {
          userSum += 1
       } else {
        userSum += parseInt(scoreArr[i])
       }
     }
     checkUserScore(userSum)
}

const checkUserScore = (sum) => {
    displayUserScore(userSum)
    if (sum === 21) {
      displayYouWon()
      removeButtons()
    } else if (sum > 21) {
     displayBusted()
    }
}

const displayUserScore = (sum) => {
    let score = document.querySelector("#userScore")
    score.innerText = sum 
}

const removeButtons = () => {
    let footer = document.querySelector("#footer")
    let hitBtn = document.querySelector("#hitBtn")
    let stayBtn = document.querySelector("#stayBtn")
  
    footer.removeChild(hitBtn)
    footer.removeChild(stayBtn)
}


const displayBusted = () => {
    let userDiv = document.querySelector("#userDeck")
  
    let busted = document.createElement('h2')
    busted.innerText = "BUSTED !"
  
   let gameDiv = document.querySelector("#gameDiv")
   gameDiv.replaceChild(busted, userDiv)
  
     removeButtons()
}

const displayYouWon = () => {

    let header = document.querySelector("#header")
  
    let youWonText = document.createElement('h1')
    youWonText.innerText = 'YOU WIN!'
  
    header.append(youWonText)
}


const stay = () => {
    drawCards(deck_id, 3)
}


cpuScore = []


const displayCpuCards = (cardData) => {
    cardData.forEach(el => {
      let img = el.image
      let value = el.value
  
      cpuScore.push(value)
  
      card = document.createElement("img")
      card.className = "card";
  
      
     card.src = img
     card.setAttribute('width', '201px')
     card.setAttribute('height', '294px')
  
     let cpuDiv = document.querySelector("#cpuDeck")
     cpuDiv.append(card)
 })
  updateCpuScore(cpuScore)
}


const updateCpuScore = (scoreArr) => {
    cpuSum = 0
    for (let i = 0; i < scoreArr.length; i++) {
      if (scoreArr[i] === "JACK" || scoreArr[i] === "QUEEN" || scoreArr[i] === "KING"){
         cpuSum += 10
      } else if (scoreArr[i] === "ACE") {
         cpuSum += 1
      } else {
       cpuSum += parseInt(scoreArr[i])
      }
    }
    checkCpuScore()
    displayCpuScore()
    removeButtons()
 }

const checkCpuScore = (sum) => {
    if (sum > 21) {
      displayYouWon()
    } else {
      compareScores(userSum, cpuSum)
    }
  }

const displayCpuScore = (sum) => {
    let score = document.querySelector("#cpuScore")
    score.innerText = sum 
 }

const compareScores = (sum1, sum2) => {
    let userdiff = 21 - sum1 
    let cpudiff = 21 - sum2 
    if (userdiff < cpudiff){
      displayYouWon()
    } else {
      displayCpuWon()
    }
 }

 const displayCpuWon = () => {
    let header = document.querySelector("#header")
  
    let cpuWonText = document.createElement('h1')
    cpuWonText.innerText = 'COMPUTER WINS!'
  
    header.append(cpuWonText)
  }


  


