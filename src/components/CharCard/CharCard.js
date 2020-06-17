import React from 'react';
import "./CharCard.css";
import Card from 'react-bootstrap/Card'

const CharCard = props => (

	<div 
	className="card-props" 
	key={props.id}
	onClick={() => props.handleClicked(props.id, props.clicked, props.name, props.src, props.image)}
	>
		<Card.Img
		className="card-image"  
		src={props.image}
		id={props.name}
		alt={props.name}
		name={props.name} />
	</div>
	
);

export default CharCard;