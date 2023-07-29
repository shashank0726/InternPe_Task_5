let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let dice = document.querySelector('.dice');
let rollDice = document.querySelector('.btn--roll');
let current1 = document.getElementById('current--0');
let current2 = document.getElementById('current--1');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let holdBtn = document.querySelector('.btn--hold');
let newGame = document.querySelector('.btn--new');
let name1 = document.getElementById('name--0');
let name2 = document.getElementById('name--1');



// -------------Initilize value zero--------------

let scores;
let current;
let activePlayer;


// -------------For Scores of activePlayer 

function init(){
    score0.textContent = 0;
    score1.textContent = 0;
    current1.textContent = 0;
    current2.textContent = 0;

    name1.textContent = "Player 1";
    name2.textContent = "Player 2";

    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');

    rollDice.classList.remove('hidden');
    holdBtn.classList.remove('hidden');
    dice.classList.add('hidden');

    scores = [0,0];
    current = 0;
    activePlayer = 0;
}
init();

let switchPlayer = function(){
    current = 0;
    document.getElementById(`current--${activePlayer}`).textContent = current;
    activePlayer = activePlayer === 0? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

// ------------For Roll Dice Button 

rollDice.addEventListener('click', function(){

    // Generate a random number between 1 to 6
    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNumber);


    // Display the dice image with the random number 
    dice.classList.remove('hidden');
    dice.src = `images/dice-${diceNumber}.png`;


    // If the random number is not 1 then add it to the active player current score 
    if(diceNumber != 1){
        current += diceNumber;
        document.getElementById(`current--${activePlayer}`).textContent = current;
        // current1.textContent = current;
    }else{
        switchPlayer();
    }
   
    // If the random number is not 1 then reset to zero and change the active player
})


holdBtn.addEventListener('click', function(){
    // Add current score to the global score 
    scores[activePlayer] += current;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

   
    // check is the active player has already reacehd maximum score  
    if(scores[activePlayer] >= 20){
        // For Finish the game 
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.getElementById(`name--${activePlayer}`).textContent = 'Winner!';

        // hide Dice Image 
        dice.classList.add('hidden');
        rollDice.classList.add('hidden');
        holdBtn.classList.add('hidden');
    }else{
        switchPlayer();
    }
})



// -------------------For start a new game 

newGame.addEventListener('click', init);