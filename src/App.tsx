import { useState } from 'react';
import './App.css';
import daysUntil from './daysUntil';

function App() {
    const [clicked, setClicked] = useState<boolean>(false);

	const handleClick = (): void => {
		setClicked(true);
	}

	return (
		<>
			<h1>This page should give you a count of the number of days from today to Christmas Day, New Years Day and Valentines Day.</h1>

            <button onClick={ handleClick }>Show Days Until</button>

			{ !clicked ? null :
				<>
					<p>{ daysUntil(new Date('2021-12-25'))} days until Christmas</p>
					<p>{ daysUntil(new Date('2022-01-01'))} days until New Year</p>
					<p>{ daysUntil(new Date('2022-02-14'))} days until Valentines Day</p>
				</>
			}
		</>
	);
}

export default App;
