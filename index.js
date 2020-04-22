/***** Deliverable 1 *****/
document.addEventListener("DOMContentLoaded", function(){
  console.log("DOM loaded")
  updateDOM()

})


// $(document).ready(function ()
//     {
//       console.log("DOM loaded")
//       updateDOM()
//     });

function updateDOM () {
/***** Deliverable 2 *****/
  let header = document.querySelector("h1#header")
  console.log("Here's your header:", header)
  /***** Deliverable 3 *****/
  header.style.color = "red"
  
  console.log("PLAYERS array looks like this:", PLAYERS)

  let base = document.querySelector(".player-container")
  
PLAYERS.forEach(player => {
  base.innerHTML += `<div class="player" data-number="${player.number}"><h3>${player.name} (<em>${player.nickname}</em>)</h3><img src="${player.photo}" alt="${player.name}"></div>`

  console.log("player made")

  
  });

  let manCityPlayer = document.querySelector('div[data-number="7"]')
  manCityPlayer.remove()
}

// "<div class="player-container"><div class="player" data-number="(Player Number)"><h3>`${player name} (<em>${player nickname}</em>)`</h3><img src="{player image}" alt="{player name}"></div></div>"




/***** Deliverable 4 *****/
