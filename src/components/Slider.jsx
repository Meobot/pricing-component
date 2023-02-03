import React from "react";
import { useState } from "react";

const Slider = (props) => {
	const [checked, setChecked] = useState(false)

	const toggleChecked = () => {
		setChecked(!checked)
		props.updateSliderValue(!checked)
	}

	return (
		<div className="slider-container">
			<label className="switch">
				<input type="checkbox" onChange={toggleChecked}/>
				<span className="slider round"></span>
			</label>
		</div>
	)
}

export default Slider