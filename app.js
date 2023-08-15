let userPlay = ''
let userScore = 0
let computerPlay = ''
let computerScore = 0
let rps = ['ROCK', 'PAPER', 'SCISSORS']

const getPlay = () => {
	// Get User Play
	document.querySelector('.btn-rock').addEventListener('click', (e) => {
		userPlay = document.querySelector('.btn-rock').textContent
		console.log(userPlay)

		// Get Computer Play
		computerPlay = rps[Math.floor(Math.random() * 3)]
		console.log(computerPlay)

		// PLAY GAME & RENDER DOM
		playGame()
		renderDOM()
	})

	document.querySelector('.btn-paper').addEventListener('click', (e) => {
		userPlay = document.querySelector('.btn-paper').textContent
		console.log(userPlay)

		// Get Computer Play
		computerPlay = rps[Math.floor(Math.random() * 3)]
		console.log(computerPlay)

		// PLAY GAME & RENDER DOM
		playGame()
		renderDOM()
	})

	document.querySelector('.btn-scissors').addEventListener('click', (e) => {
		userPlay = document.querySelector('.btn-scissors').textContent
		console.log(userPlay)

		// Get Computer Play
		computerPlay = rps[Math.floor(Math.random() * 3)]
		console.log(computerPlay)

		// PLAY GAME & RENDER DOM
		playGame()
		renderDOM()
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
getPlay()
