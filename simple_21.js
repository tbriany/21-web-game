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

    hitBtn.addEventListener('click', () => {
        console.log('Hit button was clicked')
    })
    stayBtn.addEventListener('click', () => {
        console.log('Stay button was clicked')
    })
}


