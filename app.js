let userPlay = ''
let userScore = 0
let computerPlay = ''
let computerScore = 0
let rps = ['rock', 'paper', 'scissors']

const getPlay = () => {
	document.querySelector('.btn-rock').addEventListener('click', (e) => {
		userPlay = document.querySelector('.btn-rock').textContent
		console.log(userPlay)
	})

	document.querySelector('.btn-paper').addEventListener('click', (e) => {
		userPlay = document.querySelector('.btn-paper').textContent
		console.log(userPlay)
	})

	document.querySelector('.btn-scissors').addEventListener('click', (e) => {
		userPlay = document.querySelector('.btn-scissors').textContent
		console.log(userPlay)
	})
}
const playGame = (userPlay, computerPlay, userScore, computerScore) => {}

getPlay()
