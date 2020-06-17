import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import CharCard from '../CharCard';
import "./Game.css";

// character information
import characters from "../../characters.json";

// Game component
class Game extends Component {
	
	// initial state
	state = {
		winTotal: this.props.length,
		characters: characters,
		name: characters.name,
		message: "Click a character to begin!",
		submessage: "Pick all twelve characters without repeating to win the game.",
		score: 0,
		highestScore: 0,
	};

	// what to show on the page
	render() {
		return (
			
		<div className="container-fluid">
			
			{/* game status messages */}
			<div className="message text-center">
				<h1>{this.state.message}</h1>
				<p>{this.state.submessage}</p>
			</div>

			{/* alert for scores */}
			<Alert
			className="scores-wrapper">
				<div className="score current-score">
				{/* current score */}
				<p>Current Score</p>
				<p className="score-number" idname="current-score">{this.state.score}</p>
				</div>
	
				{/* highest score */}
				<div className="score highest-score">
					<p className="score-number" idname="highest-score">{this.state.highestScore}</p>
					<p>Highest Score</p>
				</div>
			</Alert>

			{/* here's where we map our cards props */}
			<div className="cards">
					{this.state.characters.map(image => (
						<CharCard className="card"
							// this is here because: Each child in a list should have a unique "key" prop.
							key={image.id}
							id={image.id}
							name={image.name}
							clicked={image.clicked}
							image={image.image}
							handleClicked={this.handleClicked}
							/>
					))}
			</div>
		
		</div>
		);
	}

	// game logic (handleClicked function = states for clicking on cards)
	handleClicked = (id, clicked, name) => {
		
		const cardLocation = this.state.characters;
		const winTotal = this.state.characters.length;
		const score = this.state.score +1 ;

		console.log ("score: " + score + "\nwinTotal :" + winTotal);

		// if a card is clicked that has already been clicked, return this state:
		
		if

			( score  === winTotal ) { 

			const { highestScore, score } = this.state;
			// increase score by one
			const newScore = score + 1;
			//if new score is greater than highest score, make the highest score the new socre (called newHighestScore)
			const newHighestScore = newScore > highestScore ? newScore : highestScore;
			cardLocation.forEach((image, index) => {
				cardLocation[index].clicked = false;
			});
			return this.setState({
				// alert with these messages:
				message: `You won!`,
				submessage: "Click a character to play again.",
				// shuffle the cards
				image: cardLocation.sort(() => Math.random() - 0.5),
				// reset score to 0
				// add one to the score
				score: 0,
				// set the newHighestScore
				highestScore: winTotal,
				// set all cards to clicked = false
			})

		} else if (clicked) {
			cardLocation.forEach((image, index) => {
			cardLocation[index].clicked = false;
		});
		return this.setState({
			// alert with these messages:
			message: `You already picked ${name}`,
			submessage: "Click another character to begin again.",
			// shuffle the cards
			image: cardLocation.sort(() => Math.random() - 0.5),
			// reset score to 0
			score: 0,
		})
		}	
		//otherwise, return this state:
		else {
			cardLocation.forEach((image, index) => {
				if (id === image.id) {
					cardLocation[index].clicked = true;
				}
			});
			const { highestScore, score } = this.state;
			// increase score by one
			const newScore = score + 1;
			//if new score is greater than highest score, make the highest score the new socre (called newHighestScore)
			const newHighestScore = newScore > highestScore ? newScore : highestScore;
			return this.setState({
				// return these messages
				message: "Good choice!",
				submessage: "Pick another character to continue.",
				// shuffle the cards
				image: cardLocation.sort(() => Math.random() - 0.5),
				// add one to the score
				score: newScore,
				// set the newHighestScore
				highestScore: newHighestScore
			});
		}
	};
};

// export as Game
export default Game;