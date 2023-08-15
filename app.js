let userPlay = ''
let userScore = 0
let computerPlay = ''
let computerScore = 0
let rps = ['ROCK', 'PAPER', 'SCISSORS']
let winningScore = 0
let winner = ''

const getPlay = () => {
	// Get User Play
	document.querySelector('.btn-rock').addEventListener('click', (e) => {
		userPlay = document.querySelector('.btn-rock').textContent
		console.log(userPlay)

		// SET WINNING SCORE
		setWinningScore()

		// Get Computer Play
		computerPlay = rps[Math.floor(Math.random() * 3)]
		console.log(computerPlay)

		// PLAY GAME & RENDER DOM
		playGame()
		renderDOM()
		renderHand()

		// GET AND ALERT WINNER
		getWinner()
	})

	document.querySelector('.btn-paper').addEventListener('click', (e) => {
		userPlay = document.querySelector('.btn-paper').textContent
		console.log(userPlay)

		// SET WINNING SCORE
		setWinningScore()

		// Get Computer Play
		computerPlay = rps[Math.floor(Math.random() * 3)]
		console.log(computerPlay)

		// PLAY GAME & RENDER DOM
		playGame()
		renderDOM()
		renderHand()

		// GET AND ALERT WINNER
		getWinner()
	})

	document.querySelector('.btn-scissors').addEventListener('click', (e) => {
		userPlay = document.querySelector('.btn-scissors').textContent
		console.log(userPlay)

		// SET WINNING SCORE
		setWinningScore()

		// Get Computer Play
		computerPlay = rps[Math.floor(Math.random() * 3)]
		console.log(computerPlay)

		// PLAY GAME & RENDER DOM
		playGame()
		renderDOM()
		renderHand()

		// GET AND ALERT WINNER
		getWinner()
	})
}

const playGame = () => {
	if (userPlay === 'ROCK' && computerPlay === 'PAPER') {
		computerScore = computerScore + 1
		console.log(`Userscore = ${userScore} Computerscore = ${computerScore}`)
	} else if (userPlay === 'ROCK' && computerPlay === 'SCISSORS') {
		userScore = userScore + 1
		console.log(`Userscore = ${userScore} Computerscore = ${computerScore}`)
	} else if (userPlay === 'PAPER' && computerPlay === 'ROCK') {
		userScore = userScore + 1
		console.log(`Userscore = ${userScore} Computerscore = ${computerScore}`)
	} else if (userPlay === 'PAPER' && computerPlay === 'SCISSORS') {
		computerScore = computerScore + 1
		console.log(`Userscore = ${userScore} Computerscore = ${computerScore}`)
	} else if (userPlay === 'SCISSORS' && computerPlay === 'ROCK') {
		computerScore = computerScore + 1
		console.log(`Userscore = ${userScore} Computerscore = ${computerScore}`)
	} else if ((userPlay === 'SCISSORS' && computerPlay) === 'PAPER') {
		userScore = userScore + 1
		console.log(`Userscore = ${userScore} Computerscore = ${computerScore}`)
	} else {
		console.log(`Userscore = ${userScore} Computerscore = ${computerScore}`)
	}
}

const renderDOM = () => {
	document.querySelector('.player-selection').textContent = userPlay
	document.querySelector('.computer-selection').textContent = computerPlay
	document.querySelector('.computer-selection').textContent = computerPlay
	document.querySelector('.player-score').textContent = userScore
	document.querySelector('.computer-score').textContent = computerScore
}

const getWinner = () => {
	if (userScore === winningScore) {
		winner = 'player'
		displayWinner()
		// alert(`${winner} is the winner!`)

		stopGame()
	} else if (computerScore === winningScore) {
		winner = 'computer'
		displayWinner()
		// alert(`${winner} is the winner!`)

		stopGame()
	}
}

const setWinningScore = () => {
	document.querySelector('.set-winner').value
		? (winningScore = document.querySelector('.set-winner').value * 1)
		: (winningScore = 10)
	console.log(typeof winningScore)
}

const newGame = () => {
	userPlay = ''
	userScore = 0
	computerPlay = ''
	computerScore = 0
	rps = ['ROCK', 'PAPER', 'SCISSORS']
	winningScore = 0
	winner = ''

	document.querySelector('.btn-rock').disabled = false
	document.querySelector('.btn-paper').disabled = false
	document.querySelector('.btn-scissors').disabled = false

	document.querySelector('.computer-name').classList.remove('winner')
	document.querySelector('.player-name').classList.remove('winner')

	renderDOM()
}

const displayWinner = () => {
	document.querySelector(`.${winner}-name`).classList.add('winner')
}

const stopGame = () => {
	document.querySelector('.btn-rock').disabled = true
	document.querySelector('.btn-paper').disabled = true
	document.querySelector('.btn-scissors').disabled = true
}

const renderHand = () => {
	document
		.querySelector('.player-hand')
		.setAttribute('src', `${userPlay.toLowerCase()}.png`)
	document
		.querySelector('.computer-hand')
		.setAttribute('src', `${computerPlay.toLowerCase()}.png`)
}

document.querySelector('.btn-new').addEventListener('click', (e) => {
	newGame()
})
getPlay()
