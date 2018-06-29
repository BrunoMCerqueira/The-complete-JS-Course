/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game


ADD

- A player looses his entire score when he rolls two 6 in a row.After that, it s the next players turn.
- Add an input field to the HTML where players can set the winnig score, so they can change the score.
- Add anothe dice. The player looses his current score when one of them is a 1.
*/

var lastDice, scores, roundScore, activePlayer, gamePlaying, winningScore;
lastdice = 0;
init();



document.querySelector('.btn-roll').addEventListener('click', function () {
  if(gamePlaying) {
    // 1. Random nunmber
    var dice = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    // 2. Display result
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    var dice2DOM = document.querySelector('.dice2')
    dice2DOM.style.display = 'block';
    dice2DOM.src = 'dice-' + dice2 + '.png';

    // 3. Update the round score If the rolled number != 1
    if (lastDice === 6 && dice === 6) {
      // Player looses score
      scores[activePlayer] = 0;
      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
      nextPlayer();
    } else if (dice2  === 1 || dice  === 1) {
      // Next player
      nextPlayer();
    }else {
      // Add score
      roundScore += dice + dice2;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    };
    lastDice = dice;
  }

});


document.querySelector('.btn-hold').addEventListener('click', function () {
  if (gamePlaying) {
    // add current score to global score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // input winning score value
    var input = document.querySelector('.finalscore').value;

    // Undefined, 0, null or '' are coerced to false
    if(input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }

    // Check if player won the game

    if (scores[activePlayer] >= winningScore) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.dice2').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      // Next Player
      nextPlayer();
    }
  }
});

function nextPlayer () {
  // Next player
  document.getElementById('current-' + activePlayer).textContent = '0';
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  // document.querySelector('.player-0-panel').classList.remove('active');

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.dice2').style.display = 'none';



}

document.querySelector('.btn-new').addEventListener('click', init);

function init () {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;

  gamePlaying = true
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  //document.querySelector('#current-' + activePlayer).textContent = dice;
  // document.querySelector('#current-' + activePlayer).innerHTML = '<strong>' + dice + '</strong>';


  //var x = document.querySelector('#score-' + activePlayer).textContent;

  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.dice2').style.display = 'none';
  document.getElementById('name-0').textContent = 'Player 1'
  document.getElementById('name-1').textContent = 'Player 2'
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

}
