import React, { useState } from 'react';
import './App.css';
import AddList from './components/AddList';
import Card from './components/Card';

export interface AppFace {
	people: {
		name: string;
		image: string;
		note: string;
		age?: number;
	}[];
}
function App() {
	const [people, setPeople] = useState<AppFace['people']>([
		{
			name: 'Davron',
			image: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
			note: 'some note',
			age: 12,
		},
		{
			name: 'Ali',
			image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg',
			note: 'some note',
			age: 2,
		},
	]);

	return (
		<div className='App'>
			<h1>People invited to my party</h1>
			<Card people={people} />
			<AddList setPeople={setPeople} people={people} />
		</div>
	);
}

export default App;
