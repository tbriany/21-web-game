document.addEventListener("DOMContentLoaded", () => {
    startGame()
   })
   
   const startGame = () => {
       let btn = document.querySelector("#startBtn")
       btn.addEventListener('click', () => {
           console.log('game is starting')
       })
   }