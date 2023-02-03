import { useState } from 'react'
import React from 'react'
import Card from './components/Card'
import Slider from './components/Slider'
import Data from "./data"

function App() {
	const [sliderValue, setSliderValue] = useState(false);

	const updateSliderValue = (value) => {
   		setSliderValue(value);
  	}

	const cards = Data.map(item => {
		return (
			<Card 
				key={item.id}
				sliderValue={sliderValue}
				{...item}
			/>
		)
	})

	return (
		<div className="App">
			<div className="Header-container">
				<h1 className="Header-title">Our Pricing</h1>
				<div className="toggle-container">
					<h2 className="toggle-h2">Annually</h2>
						<Slider updateSliderValue={updateSliderValue}/>
					<h2 className="toggle-h2">Monthly</h2>
				</div>
			</div>
			{cards}
		</div>
	)
}

export default App
