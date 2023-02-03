import React from "react";

const Card = (props) => {
	let price
	if (props.sliderValue === false) {
		price = props.priceAnnual
	} else if (props.sliderValue === true) {
		price = props.priceMonthly
	}

	return (
		<div className="Card">
			<h2 className="Card-title">{props.title}</h2>
			<p className="Card-price">{price}</p>
			<div className="Card-details-container">
				<p>{props.storage} Storage</p>
				<p>{props.usersAllowed} Users Allowed</p>
				<p>Send up to {props.dataLimit}</p>
			</div>
		</div>
	)
}

export default Card