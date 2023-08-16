let userPlay = '';
let userScore = 0;
let computerPlay = '';
let computerScore = 0;
let rps = ['ROCK', 'PAPER', 'SCISSORS'];
let winningScore = 0;
let winner = '';

// QUERY SELECTOR OBJECT
const getDOM = {
	btnRock: document.querySelector('.btn-rock'),
	btnPaper: document.querySelector('.btn-paper'),
	btnScissors: document.querySelector('.btn-scissors'),
	btnNew: document.querySelector('.btn-new'),
	playerSelection: document.querySelector('.player-selection'),
	computerSelection: document.querySelector('.computer-selection'),
	playerScore: document.querySelector('.player-score'),
	computerScore: document.querySelector('.computer-score'),
	winnerScore: document.querySelector('.set-winner'),
	playerHand: document.querySelector('.player-hand'),
	computerHand: document.querySelector('.computer-hand'),
	playerName: document.querySelector('.player-name'),
	computerName: document.querySelector('.computer-name'),
};

// FUNCTION TO GET USER SELECTION AND ALSO PLAY A ROUND OF GAME BASED ON USER CLICK
const getPlay = () => {
	// Get User Play
	getDOM.btnRock.addEventListener('click', (e) => {
		userPlay = getDOM.btnRock.textContent;

		setWinningScore();

		// Get Computer Play
		computerPlay = rps[Math.floor(Math.random() * 3)];

		playGame();
		renderDOM();
		renderHand();
		getWinner();
	});

	getDOM.btnPaper.addEventListener('click', (e) => {
		userPlay = getDOM.btnPaper.textContent;

		setWinningScore();

		computerPlay = rps[Math.floor(Math.random() * 3)];

		playGame();
		renderDOM();
		renderHand();
		getWinner();
	});

	getDOM.btnScissors.addEventListener('click', (e) => {
		userPlay = getDOM.btnScissors.textContent;

		setWinningScore();

		computerPlay = rps[Math.floor(Math.random() * 3)];

		playGame();
		renderDOM();
		renderHand();
		getWinner();
	});
};

// GAME LOGIC
const playGame = () => {
	if (userPlay === 'ROCK' && computerPlay === 'PAPER') {
		computerScore = computerScore + 1;
	} else if (userPlay === 'ROCK' && computerPlay === 'SCISSORS') {
		userScore = userScore + 1;
	} else if (userPlay === 'PAPER' && computerPlay === 'ROCK') {
		userScore = userScore + 1;
	} else if (userPlay === 'PAPER' && computerPlay === 'SCISSORS') {
		computerScore = computerScore + 1;
	} else if (userPlay === 'SCISSORS' && computerPlay === 'ROCK') {
		computerScore = computerScore + 1;
	} else if ((userPlay === 'SCISSORS' && computerPlay) === 'PAPER') {
		userScore = userScore + 1;
	} else {
		return [userScore, computerScore];
	}
};

const renderDOM = () => {
	getDOM.playerSelection.textContent = userPlay;
	getDOM.computerSelection.textContent = computerPlay;
	getDOM.playerScore.textContent = userScore;
	getDOM.computerScore.textContent = computerScore;
};

const getWinner = () => {
	if (userScore === winningScore) {
		winner = 'player';
		displayWinner();
		stopGame();
	} else if (computerScore === winningScore) {
		winner = 'computer';
		displayWinner();
		stopGame();
	}
};

// FUNCTION NTO SET WINNING SCORE, DEFAULT IS 10
const setWinningScore = () => {
	getDOM.winnerScore.value
		? (winningScore = getDOM.winnerScore.value * 1)
		: (winningScore = 10);
};

const newGame = () => {
	userPlay = '';
	userScore = 0;
	computerPlay = '';
	computerScore = 0;
	rps = ['ROCK', 'PAPER', 'SCISSORS'];
	winningScore = 0;
	winner = '';

	// ENABLES SELECTION BUTTONS
	getDOM.btnRock.disabled = false;
	getDOM.btnPaper.disabled = false;
	getDOM.btnScissors.disabled = false;

	getDOM.playerName.classList.remove('winner');
	getDOM.computerName.classList.remove('winner');

	renderDOM();
};

// FUNCTION TO DISPLAY WINNER BY ADDING A CLASS
const displayWinner = () => {
	document.querySelector(`.${winner}-name`).classList.add('winner');
};

const stopGame = () => {
	getDOM.btnRock.disabled = true;
	getDOM.btnPaper.disabled = true;
	getDOM.btnScissors.disabled = true;
};

const renderHand = () => {
	getDOM.playerHand.setAttribute('src', `${userPlay.toLowerCase()}.png`);
	getDOM.computerHand.setAttribute('src', `${computerPlay.toLowerCase()}.png`);
};

// EVENT LISTENER FOR NEW GAME
getDOM.btnNew.addEventListener('click', (e) => {
	newGame();
});

// CALL GETPLAY FUNCTION THAT CALLS OTHER FUNCTIONS
getPlay();
