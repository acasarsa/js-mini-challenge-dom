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
  header.style.color = "red"

  /***** Deliverable 3 *****/
  console.log("PLAYERS array looks like this:", PLAYERS)

  let base = document.querySelector(".player-container")
  
PLAYERS.forEach(player => {
  base.innerHTML += `<div class="player" data-number="${player.number}"><h3>${player.name} (<em>${player.nickname}</em>)</h3><img src="${player.photo}" alt="${player.name}"></div>`

  console.log("player made")

  
  });
/***** Deliverable 4 *****/

  let manCityPlayer = document.querySelector('div[data-number="7"]')
  manCityPlayer.remove()
}

// "<div class="player-container"><div class="player" data-number="(Player Number)"><h3>`${player name} (<em>${player nickname}</em>)`</h3><img src="{player image}" alt="{player name}"></div></div>"



//  long way from uriel 
// const div = document.querySelector('.player-container');

//   PLAYERS.forEach(function(playerObj) {
//     let playerDiv = document.createElement('div');
//     playerDiv.className = 'player';
//     // console.log(playerDiv)
//     playerDiv.setAttribute('data-number', playerObj.number);


//     let playerEMTag = document.createElement('em');
//     playerEMTag.innerHTML = `${playerObj.nickname}`
//     // console.log(playerEMTag);

//     let playerHTag = document.createElement('h3');
//     playerHTag.textContent = `${playerObj.name} `;

//     let playerIMGTag = document.createElement('img');
//     playerIMGTag.src = playerObj.photo;
//     playerIMGTag.setAttribute('alt', playerObj.name);

//     div.appendChild(playerDiv).appendChild(playerHTag).appendChild(playerEMTag);
//     div.appendChild(playerDiv).appendChild(playerIMGTag);
//     // console.log(div);
//   });
//   const manchesterCityPlayer = document.querySelector('div[data-number="7"]');
//   div.removeChild(manchesterCityPlayer);
