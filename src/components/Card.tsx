import React from 'react';
import { AppFace as CardProps } from '../App';

const Card: React.FC<CardProps> = ({ people }) => {
	const renderedList = (): JSX.Element[] => {
		return people.map((person) => (
			<li className='List'>
				<div className='List-header'>
					<img
						className='List-img'
						src={person.image}
						alt='person avatar'
						width='64'
						height='64'
					/>
				</div>
				<h2>{person.name}</h2>
				<p>{person.age} years old</p>
				<p className='List-note'> {person.note}</p>
			</li>
		));
	};

	return <ul>{renderedList()}</ul>;
};

export default Card;
