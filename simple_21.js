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
}

const drawCards = async (deck_id, num) => {
    let url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${num}`
    let response = await axios.get(url)
    let cardData = response.data.cards 
  }