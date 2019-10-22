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
}