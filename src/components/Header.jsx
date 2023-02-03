import React from "react";

const Header = () => {
	return (
		<div className="Header-container">
			<h1 className="Header-title">Our Pricing</h1>
			<div className="toggle-container">
				<h2 className="toggle-h2">Annually</h2>
				<div className="slider-container">
					<label className="switch">
					<input type="checkbox" />
					<span className="slider round"></span>
					</label>
				</div>
				<h2 className="toggle-h2">Monthly</h2>
			</div>
		</div>
	)
}

export default Header